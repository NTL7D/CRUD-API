exports.homeRoutes = (req, res) => {
  res.render("index");
};

exports.addProduct = (req, res) => {
  res.render("add_product");
};

exports.editProduct = (req, res) => {
  res.render("edit_product");
};
