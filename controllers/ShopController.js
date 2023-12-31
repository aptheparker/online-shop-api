const { Op } = require("sequelize");
const Product = require("../models/Product");

exports.getShopPage = (req, res, next) => {
  const category = req.query.category;
  const q = req.query.q;

  let productQuery;
  if (category) {
    productQuery = Product.findAll({ where: { category: category } });
  } else {
    productQuery = Product.findAll();
  }

  if (q) {
    productQuery = Product.findAll({
      where: {
        name: {
          [Op.like]: `%${q}%`,
        },
      },
    });
  }

  productQuery
    .then((products) => {
      for (let i = 0; i < products.length; i++) {
        if (products[i].imageUrl === null) {
          products[i].imageUrl = "assets/online-shop.jpeg";
        }
      }
      return res.render("shop/shop", {
        pageTitle: "Shop Page",
        logoImg: "/assets/jam-logo.png",
        products: products,
        isAdmin: req.session.isAdmin,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.redirect("/");
    });
};

exports.getShopItem = (req, res, next) => {
  const productId = req.params.id;
  Product.findByPk(productId)
    .then((product) => {
      console.log(product);
      return res.render("shop/shop-detail", {
        pageTitle: "Shop Detail",
        product: product,
        isAdmin: req.session.isAdmin,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.redirect("/");
    });
};
