const getMainPage = (req, res) => {
  res.render("main", {
    pageTitle: "Main Page",
  });
}

module.exports = {
  getMainPage,
};