const express = require("express");
const app = express();

// Middleware 
app.use(express.json());

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is starting on ${PORT}, Server is listening....`);
})