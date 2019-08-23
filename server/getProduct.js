const products = require("../node-1-afternoon/products.json")

const getProduct =  (req, res) => {
    const product = products.find(product => product.id === parseInt(req.params.id))
    if (!product) {
        res.status(500).send("Item not in list")
    } else {
        res.status(200).send(product)
    }
    }

    module.exports = getProduct;