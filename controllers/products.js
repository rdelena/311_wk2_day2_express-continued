const { products } = require("../data");

module.exports = {
  list: (req, res) => res.json(products),
  show: (req, res) =>
    res.json(
      products.find((product) => product._id === parseInt(req.params.id))
    ),
  create: (req, res) => {
    const product = {
      _id: products.length + 1,
      ...req.body,
    };
    products.push(product);
    res.json(product);
  },
};
