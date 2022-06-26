const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/User");
const passport = require("passport");
const cookiesession = require("cookie-session");
const app = express();

app.use(
  cookiesession({
    maxAge: 1 * 24 * 60 * 60 * 1000,
    keys: [keys.cookiekey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

// for connecting to db and starting server
mongoose
  .connect(keys.dburi)
  .then(() => {
    console.log("hi i n ");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
