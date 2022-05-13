/**
 * @swagger
 * /api/product:
 *  get:
 *      summary: Show all users in database
 *      description: Use to request all users
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/product/{id}:
 *  get:
 *      summary: Show product is found with productId
 *      description: Use to request all product
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/product:
 *  post:
 *      summary: Add new an product
 *      description: Use to request all product
 *      parameters:
 *          - in: body
 *            name: Data
 *            schema:
 *              type: object
 *              required:
 *                  - name:
 *                  - price:
 *                  - status:
 *              properties:
 *                  name:
 *                      type: string
 *                  price:
 *                      type: string
 *                  status:
 *                      type: string
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/product/{id}:
 *  put:
 *      summary: Update exist product in database with productId
 *      description: Use to update a product
 *      responses:
 *          '201':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/product/{id}:
 *  delete:
 *      summary: Delete product
 *      description: Use to delete exist product in database
 *      responses:
 *          '200':
 *              description: A successful response
 */