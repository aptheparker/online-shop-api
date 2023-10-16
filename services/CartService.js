const products = [];

const getCartPage = async (req, res) => {
  return res.render("cart/cart", {
    pageTitle: "Cart Page",
    logoImg: "assets/jam-logo.png",
    products: products,
  });
};

const getCartItem = async (req, res) => {
  
};

const addCartItem = async (req, res) => {
  const { product } = req.body;

  if (product) {
    const productObject = JSON.parse(product);
    products.push(productObject);
    res.redirect("/");
  } else {
    res.status(400).send("Bad Request: Missing product data");
  }
};

const updateCartItem = async (req, res) => {
  return;
};

const deleteCartItem = async (req, res) => {
  const productId = req.params.id; // Corrected the parameter name

  if (productId) {
    const index = products.findIndex((product) => product.id === productId);

    if (index !== -1) {
      products.splice(index, 1);
      res.redirect("/");
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
