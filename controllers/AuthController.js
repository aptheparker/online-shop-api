const User = require("../models/User");

exports.getSignIn = (req, res, next) => {
  res.render("auth/sign-in", {
    pageTitle: "SignIn Page",
    logoImg: "/assets/jam-logo.png",
  });
};

exports.postSignIn = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username: username, password: password },
  });

  if (!user) {
    console.log("user not found");
    return res.redirect("/auth/sign-in");
  }

  res.redirect("/");
};

exports.getSignUp = (req, res, next) => {
  res.render("auth/sign-up", {
    pageTitle: "SignUp Page",
    logoImg: "/assets/jam-logo.png",
  });
};

exports.postSignUp = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username: username } });
  if (user) {
    console.log("user already exists");
    return res.redirect("/auth/sign-up");
  }

  await User.create({ username: username, password: password });
  res.redirect("/auth/sign-in");
};
