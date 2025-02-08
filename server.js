const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", require("./routes/productRoutes"));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
