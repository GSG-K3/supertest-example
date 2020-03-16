const router = require('express').Router();

const userController = require('./users');

router.get('/users', userController);

// add a route for '/posts' here

module.exports = router;
