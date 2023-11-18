const User = require("../models/User");

exports.getSignIn = (req, res, next) => {
  res.render("auth/sign-in", {
    pageTitle: "SignIn Page",
    logoImg: "/assets/jam-logo.png",
    error: "",
  });
};

exports.postSignIn = async (req, res) => {
  const { username, password } = req.body;

  const usernameExist = await User.findOne({
    where: { username: username },
  });


  if (!username || !password) {
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "username or password is empty",
    });
  } else if (!usernameExist) {
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "username not found",
    });
  } else if (usernameExist.password !== password) {
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "password not matched",
    });
  } else {
    return res.render("main", {
      pageTitle: "Main Page",
      logoImg: "/assets/jam-logo.png",
      userName: username,
    });
  }
};

exports.getSignUp = (req, res, next) => {
  res.render("auth/sign-up", {
    pageTitle: "SignUp Page",
    logoImg: "/assets/jam-logo.png",
    error: "",
  });
};

exports.postSignUp = async (req, res, next) => {
  const { username, password, passwordConfirm } = req.body;

  const usernameExist = await User.findOne({ where: { username: username } });

  if (!username || !password || !passwordConfirm) {
    return res.render("auth/sign-up", {
      pageTitle: "SignUp Page",
      logoImg: "/assets/jam-logo.png",
      error: "username or password is empty",
    });
  } else if (usernameExist) {
    return res.render("auth/sign-up", {
      pageTitle: "SignUp Page",
      logoImg: "/assets/jam-logo.png",
      error: "username already exist",
    });
  } else if (password !== passwordConfirm) {
    return res.render("auth/sign-up", {
      pageTitle: "SignUp Page",
      logoImg: "/assets/jam-logo.png",
      error: "password not matched",
    });
  } else {
    await User.create({ username: username, password: password, isAdmin: false });
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "",
    });
  }
};
