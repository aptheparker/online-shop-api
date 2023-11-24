const User = require("../models/User");

exports.getSignIn = (req, res, next) => {

  res.render("auth/sign-in", {
    pageTitle: "SignIn Page",
    logoImg: "/assets/jam-logo.png",
    error: "",
    isAdmin: req.session.isAdmin,
  });
};

exports.postSignIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    where: { username: username },
  });


  if (!username || !password) {
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "username or password is empty",
      isAdmin: req.session.isAdmin,
    });
  } else if (!user) {
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "username not found",
      isAdmin: req.session.isAdmin,
    });
  } else if (user.password !== password) {
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "password not matched",
      isAdmin: req.session.isAdmin,
    });
  } else {
    req.session.username = username;
    req.session.isAdmin = user.isAdmin;
    req.session.userId = user.id;

    return res.render("main", {
      path: "/",
      pageTitle: "Main Page",
      logoImg: "/assets/jam-logo.png",
      userName: username,
      isAdmin: req.session.isAdmin,
    });
  }
};

exports.getSignUp = (req, res, next) => {
  res.render("auth/sign-up", {
    pageTitle: "SignUp Page",
    logoImg: "/assets/jam-logo.png",
    error: "",
    isAdmin: req.session.isAdmin,
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
      isAdmin: req.session.isAdmin,
    });
  } else if (usernameExist) {
    return res.render("auth/sign-up", {
      pageTitle: "SignUp Page",
      logoImg: "/assets/jam-logo.png",
      error: "username already exist",
      isAdmin: req.session.isAdmin,
    });
  } else if (password !== passwordConfirm) {
    return res.render("auth/sign-up", {
      pageTitle: "SignUp Page",
      logoImg: "/assets/jam-logo.png",
      error: "password not matched",
      isAdmin: req.session.isAdmin,
    });
  } else {
    await User.create({ username: username, password: password, isAdmin: false });
    return res.render("auth/sign-in", {
      pageTitle: "SignIn Page",
      logoImg: "/assets/jam-logo.png",
      error: "",
      isAdmin: req.session.isAdmin,
    });
  }
};
