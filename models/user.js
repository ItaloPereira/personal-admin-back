const Model = require('../utils/model');

class User extends Model {
    constructor() {
        super('user');
    }

    getUser({ email, password }) {
        const sql = `SELECT * FROM user
                     WHERE email = ? and PASSWORD = ?`;
        const params = [ email, password ];

        return this.query(sql, params);
    }
}

module.exports = new User();