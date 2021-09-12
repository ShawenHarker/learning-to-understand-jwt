const router = require("express").Router();
const pool = require("../db");

const bcrypt = require("bcrypt");

const jwtGenerator = require("../utils/jwtGenerator");

router.post("/register", async (req, res) => {
    try {
        // 1. Destructure req.body = {name, email, password}.
        const { fullName, email, password } = req.body;

        // 2. Check if the user exist, if user exist, throw an error.
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length !== 0) {
            return res.status(401).send("User already exist");
        };

        // 3. Bcrypt the user's password.
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);
        
        // 4. Enter the user inside of our database.
        const newUser = await pool.query("INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING *", [fullName, email, bcryptPassword]);

        // 5. Generate a jwt token.
        const token = jwtGenerator(newUser.rows[0].id);
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
})



module.exports = router;