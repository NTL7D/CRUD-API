var ProductDB = require('../model/model');

exports.create = (req,res) => {
 if(!req.body){
    res.status(400).send({message: "No empty content allowed!"});
    return;
 }
 const product = new ProductDB({
    name: req.body.name,
    price: req.body.price,
    status: req.body.status
 })
 product
    .save(product)
    .then(data => {
        res.redirect('add_product');
    })
    .catch(err => {
        res.status(410).send({
            message:err.message||"Error Occurred"
        });
    });
}

exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        ProductDB.findById(id)
        .then(data =>{
            if(!data){
                res.status(420).send({message: "Cannot found product with this id"+id})
            }
            else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(410).send({message: "Error Occurred"})
        })
    }else{
        ProductDB.find()
            .then(product => {
            res.send(product)
        })
        .catch(err => {
            res.status(410).send({message:err.message||"Error Occurred"})
        })
    }
}

exports.edit = (req,res) => {
    if(!req.body){
        return res
        .status(400).send({message: "Cannot update empty value!"})
    }
    const id = req.params.id;
    ProductDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.send(data)            
        }
    })
    .catch(err => {
        res.status(410).send({message: "Error Occurred"})
    })
}
exports.delete = (req,res) => {
    const id = req.params.id;
    ProductDB.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(400).send({message:'Cannot delete non existence product!'})
        }
        else{
            res.send({
                message: "Target deleted successfully"
            })
        }
    })
    .catch(err =>{
        res.status(410).send({
            message: "Error Occurred"
        })
    })
}