const express = require("express");
const route = express.Router();
const service = require("../service/render");
const controller = require("../controller/controller");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", service.homeRoutes);
/**
 * @description add product
 * @method GET /add_product
 */
route.get("/add_product", service.add_product);
/**
 * @description edit product
 * @method GET /edit_product
 */
route.get("/edit_product", service.edit_product);

route.post('/api/product', controller.create);
route.get('/api/product', controller.find);
route.put('/api/product/:id', controller.edit);
route.delete('/api/product/:id', controller.delete)


module.exports = route;
