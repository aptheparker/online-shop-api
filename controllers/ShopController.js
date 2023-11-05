const getShopPage = (req, res, next) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      return res.redirect("/");
    } else {
      const products = JSON.parse(data);
      return res.render("shop/shop", {
        pageTitle: "Shop Page",
        logoImg: "assets/jam-logo.png",
        products: products,
        imgUrl: "assets/online-shop.jpeg",
      });
    }
  });
};


const getShopItem = (req, res, next) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.log(err);
      return res.redirect("/");
    } else {
      const products = JSON.parse(data);
      const product = products.find((p) => p.id === req.params.id);
      return res.render("shop/shop-detail", {
        pageTitle: product.title,
        product: product,
      });
    }
  });
};

module.exports = {
  getShopPage,
  getShopItem,
};
