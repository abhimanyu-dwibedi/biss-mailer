const passport = require("passport");
// how to
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToekn, profile, done) => {
      await User.findOne({
        googleId: profile.id,
      }).then(async (exsistinguser) => {
        if (exsistinguser) {
          // we have the record
          done(null, exsistinguser);
        } else {
          // we dont have the id
          const user = await User.create({
            googleId: profile.id,
          });
          done(null, user);
        }
      });

      console.log(user);
    }
  )
);
