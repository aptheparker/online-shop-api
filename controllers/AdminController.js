const Product = require("../models/Product");

exports.getAdminPage = (req, res) => {
  const products = Product.findAll().then((products) => {
    res.render("admin/admin", {
      pageTitle: "Admin Page",
      logoImg: "/assets/jam-logo.png",
      products: products,
    });
  });
};

exports.getAddProductPage = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product Page",
    logoImg: "/assets/jam-logo.png",
    userName: "",
  });
};

exports.postAddProduct = async (req, res) => {
  const productName = req.body.name;
  const productPrice = req.body.price;
  const productDescription = req.body.description;
  const productImageUrl = req.body.imageUrl;
  const productCategory = req.body.category;

  await Product.create({
    name: productName,
    price: productPrice,
    description: productDescription,
    imageUrl: productImageUrl,
    category: productCategory,
  })
    .then(() => {
      res.redirect("/admin");
    })
    .catch((err) => {
      console.log(err);
    });
};
