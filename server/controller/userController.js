const bcrypt = require('bcrypt');

const User = require('../model/userSchema');
const saltRounds = 10

const UserSignup = async (req,res)=>{
   try {
    const {userName, password, email, phone, address, city, state, zip} = req.body;

    const existingUser = await User.findOne({email: email});

    if(existingUser){
        return res.status(400).json({message: 'User already exists'})
    };

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (!password || typeof password !== 'string'){
       return res.status(404).json({error: 'invalid password'});
    }
    console.log(req.body);

    const newUser = new User({
        userName: userName,
        password: hashedPassword,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip: zip
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

    return res.status(200).json({message:'userlogged in successfully'});

   } catch (error) {
    console.log(error);
    return res.status(500).json({message:'internal server error', error})
   }


}

module.exports = {UserSignup, UserLogin}