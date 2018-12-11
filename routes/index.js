const express = require("express");
const router = express.Router();

// router.use('/products', require(`./products`));
// router.use('/headerslides', require(`./header-slides`));
// router.use('/partnersslides', require(`./partners-slides`));
router.use('/auth', require(`./auth`));

module.exports = router;