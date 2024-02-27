const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID ='507380915165-rgihm8m0ogcak65ib4lkjstm673n83bd.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5050/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));