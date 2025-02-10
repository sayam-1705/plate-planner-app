const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const userRoute = require("./routes/user.route");
const recipeRoute = require("./routes/recipe.route");

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Everything is fine!" });
});

app.use("/user", userRoute);
app.use("/recipe", recipeRoute);

app.listen(PORT, () => {
  console.log(
    `Server started on PORT ${PORT}\nLocal: http://localhost:${PORT}`
  );
});
