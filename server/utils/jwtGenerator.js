require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtGenerator  = (id) => {
    const payload = {
        user: id
    }

    return jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "1hr" });
};

module.exports = jwtGenerator;