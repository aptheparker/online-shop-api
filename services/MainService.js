const getMainPage = (req, res) => {
  res.render("main", {
    pageTitle: "Main Page",
    shopName: "CoMit",
  });
}

module.exports = {
  getMainPage,
};