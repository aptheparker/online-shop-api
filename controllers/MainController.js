exports.getMain = (req, res) => {
  res.render("main", {
    pageTitle: "Main Page",
    logoImg: "assets/jam-logo.png",
  });
}