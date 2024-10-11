const express = require("express");
const cors = require("cors");
const connect = require("./config/db"); 
const prodController = require("./controller/prod.controller");
const userController = require("./controller/user.controller"); 
const cartController = require("./controller/cart.controller"); 
const wishlistController = require("./controller/wishlist.controller"); 
const { authenticate } = require("./middlewares/authenticate"); 

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

// Connect to the database
connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });

// Route handlers
app.use("/courses", prodController);
app.use("/join", userController);
app.use("/cart", cartController);
app.use("/wishlist", wishlistController);

// Auth route
app.post("/auth", authenticate, async (req, res) => {
  try {
    return res.status(200).send({ auth: true, user: req.user });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
