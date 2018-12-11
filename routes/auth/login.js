const UserController = require(`../../controllers/user`);

module.exports = async (req, res) => {

    const body = req.body;
    const email = body.email;
    const password = body.password;

    const userData = await UserController.getUser(email, password);
    
    res.status(200).send(userData);
};