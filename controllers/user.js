const UserModel = require(`../models/user`);
const User = {};

User.getUser = async (email, password) => {

    const userData = await UserModel.list({ email, password });

    return { userData };
}

module.exports = User;