const products = [];
const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.getCartPage = async (req, res) => {
  const userId = req.session.userId;
  const carts = await Cart.findAll({ where: { userId: userId } });

  const cartProducts = [];
  for (let i = 0; i < carts.length; i++) {
    const cart = carts[i];
    const product = await Product.findByPk(cart.productId);
    cartProducts.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: cart.quantity,
      imageUrl: product.imageUrl,
    });
  }

  if (!userId) {
    return res.status(404).send("User not found");
  }
  return res.render("cart/cart", {
    pageTitle: "Cart Page",
    logoImg: "/assets/jam-logo.png",
    carts: cartProducts,
    isAdmin: req.session.isAdmin,
  });
};

exports.addCartItem = async (req, res) => {
  const { product } = req.body;
  const productInJson = JSON.parse(product);

  const userId = req.session.userId;

  const cart = await Cart.findOne({
    where: { userId: userId, productId: productInJson.id },
  });

  if (cart) {
    cart.quantity += 1;
    await cart.save();
  } else {
    await Cart.create({
      userId: userId,
      productId: productInJson.id,
      quantity: 1,
    });
  }
  res.redirect("/cart");
};

exports.updateCartItem = async (req, res) => {
  return;
};

exports.deleteCartItem = async (req, res) => {
  const productId = parseInt(req.params.id);

  const userId = req.session.userId;

  console.log(userId, productId);

  const cart = await Cart.findOne({
    where: { userId: userId, productId: productId },
  });

  console.log(cart);

  if (cart) {
    await await cart.destroy();
  } else {
    return res.status(404).send("Cart not found");
  }

  res.redirect("/cart");
};
