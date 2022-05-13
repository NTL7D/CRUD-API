const axios = require('axios');

exports.homeRoutes = (req, res) => {

  axios.get('http://localhost:3005/api/product')
    .then(function(response){
      res.render('index',{product: response.data});
    })
    .catch(err => {
      res.send(err);
    })
}

exports.add_product = (req, res) => {
  res.render("add_product");
};

exports.edit_product = (req, res) => {
  axios.get('http://localhost:3005/api/product',{params:{id:req.query.id}})
  .then(function(productfromdatabase){
    res.render("edit_product",{product: productfromdatabase.data})
  })
  .catch(err =>{
    res.send(err);
  })
};
