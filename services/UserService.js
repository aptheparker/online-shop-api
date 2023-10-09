const getUserRecords = async (req, res) => {
  try {
    res.render("user/records", {
      pageTitle: "User Records",
      path: "/user/records",
    });
  }
  catch (err) {
    console.log(err);
  }
}