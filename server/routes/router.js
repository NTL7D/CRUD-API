const express = require("express");
const route = express.Router();
const service = require("../service/render");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", service.homeRoutes);
/**
 * @description add product
 * @method GET /add_product
 */
route.get("/add_product", service.addProduct);
/**
 * @description edit product
 * @method GET /edit_product
 */
route.get("/edit_product", service.editProduct);

module.exports = route;
