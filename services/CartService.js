const products = [];

const getCartPage = async (req, res) => {
  return res.render("cart/cart", {
    pageTitle: "Cart Page",
    logoImg: "assets/jam-logo.png",
    products: products,
  });
};

const getCartItem = async (req, res) => {};

const addCartItem = async (req, res) => {
  const { product } = req.body;
  const productInJson = JSON.parse(product);

  console.log(products.find((product) => product.id === productInJson.id));

  if (productInJson && products.find((product) => product.id === productInJson.id)) { // If product already exists in cart, increment quantity
    const index = products.findIndex(
      (product) => product.id === productInJson.id
    );
    products[index].productQuantity++;
    res.redirect("/cart");
  } else if (productInJson) { // If product does not exist in cart, add it
    productInJson.productQuantity = 1;
    products.push({...productInJson, productQuantity: 1});
    res.redirect("/cart");
  } else { // If product does not exist in request body, send error
    res.status(400).send("Bad Request: Missing product data");
  }
};

const updateCartItem = async (req, res) => {
  return;
};

const deleteCartItem = async (req, res) => {
  const productId = req.params.id;

  if (productId) {
    const index = products.findIndex((product) => product.id === productId);

    if (index !== -1) {
      products.splice(index, 1);
    } else {
      res.status(404).send("Product not found");
    }
  } else {
    res.status(400).send("Bad Request: Missing product data");
  }
};

module.exports = {
  getCartPage,
  getCartItem,
  addCartItem,
  deleteCartItem,
  updateCartItem,
};
