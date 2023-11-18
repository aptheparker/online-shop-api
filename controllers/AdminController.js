exports.getAdminPage = (req, res) => {

  res.render("admin/admin", {
    pageTitle: "Admin Page",
    logoImg: "assets/jam-logo.png",
    userName: ''
  });
}