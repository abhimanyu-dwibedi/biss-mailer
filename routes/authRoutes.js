const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google"));
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send({ user: req.user });
  });
  app.get("/api/curr", (req, res) => {
    res.send(req.user);
  });
};
