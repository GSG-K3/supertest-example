const { users } = require('../models');
const getUsers = (req, res) => {
	// this function is same as res.send()
	// but it explicitly tells the reader we are sending a JSON string/object
	res.json(users);
};

module.exports = getUsers;
