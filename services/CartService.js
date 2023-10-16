const getCartPage = async (req, res) => {
  return res.render("cart/cart", {
    pageTitle: "Cart Page",
    logoImg: "assets/jam-logo.png",
  });
};

const getCartItem = async (req, res) => {
  return;
};

const addCartItem = async (req, res) => {
  return;
};

const deleteCartItem = async (req, res) => {
  return;
};

const updateCartItem = async (req, res) => {
  return;
};

module.exports = {
  getCartPage,
  getCartItem,
  addCartItem,
  deleteCartItem,
  updateCartItem,
};
