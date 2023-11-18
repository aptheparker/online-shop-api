const products = [];
const Cart = require("../models/Cart");

exports.getCartPage = async (req, res) => {
  const userId = req.params.userId;

  // const carts = await Cart.findOne({ where: { userId: userId } });
  if (!user) {
    return res.status(404).send("User not found");
  }
  console.log(cart);
  return res.render("cart/cart", {
    pageTitle: "Cart Page",
    logoImg: "assets/jam-logo.png",
    carts: carts,
  });
};

exports.addCartItem = async (req, res) => {
  const { product } = req.body;
  console.log(product);
  const productInJson = JSON.parse(product);

  if (
    productInJson &&
    products.find((product) => product.id === productInJson.id)
  ) {
    // If product already exists in cart, increment quantity
    const index = products.findIndex(
      (product) => product.id === productInJson.id
    );
    products[index].productQuantity++;
    res.redirect("/cart");
  } else if (productInJson) {
    // If product does not exist in cart, add it
    productInJson.productQuantity = 1;
    products.push({ ...productInJson, productQuantity: 1 });
    res.redirect("/cart");
  } else {
    // If product does not exist in request body, send error
    res.status(400).send("Bad Request: Missing product data");
  }
};

exports.updateCartItem = async (req, res) => {
  return;
};

exports.deleteCartItem = async (req, res) => {
  const productId = parseInt(req.params.id);

  if (productId) {
    const index = products.findIndex((product) => product.id === productId);

    if (index !== -1) {
      products.splice(index, 1);
      res.redirect("/cart");
    } else {
      res.status(404).send("Product not found");
    }
  }
};
