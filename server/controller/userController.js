const bcrypt = require('bcrypt');

const User = require('../model/userSchema');
const saltRounds = 10

const UserSignup = async (req,res)=>{
   try {
    const { email, password,confirmPassword} = req.body;

    const existingUser = await User.findOne({email: email});

    if(existingUser){
        return res.status(400).json({message: 'User already exists'})
    };

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (!password || typeof password !== 'string'){
       return res.status(404).json({error: 'invalid password'});
    }
    console.log(req.body);

    const newUser = new User({
        
        email: email,
        password: hashedPassword,
        confirmPassword: hashedPassword
    });

     await newUser.save()

     console.log('user created');
     return res.status(201).json({ message: "User created" });

   } catch (error) {
       return res
       .status(500)
       .json({ error: "Something went wrong creating a user" });
   }
};


const UserLogin = async (req,res) => {
   try {
    const {email, password} = req.body;

    const user = await User.findOne({email:email});

if (!user) {
    return res.status(404).json({message: 'User does not exist'})
};

    const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
    return res.status(404).json({message: 'Invalid password'})
};

   const expirationTime = process.env.expires_In;
      const payload = {
        userId: user._id,
      };
      
      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: expirationTime }
        );
        // console.log(token)
        
      const dataInfo = {
        status: "success",
        message: "Admin Logged in successful",
        access_token: token,
      };
      return res.status(200).json(dataInfo);

   } catch (error) {
    console.log(error);
    return res.status(500).json({message:'internal server error', error})
   }


}

module.exports = {UserSignup, UserLogin}