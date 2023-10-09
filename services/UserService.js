const getRecordsFromFile = async (req, res) => {
  return res.render("user/records", {
    pageTitle: "User Records",
    path: "/user/records",
  });
};

module.exports = {
  getRecordsFromFile,
};
