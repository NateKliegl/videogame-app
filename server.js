require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./server/routes/user.routes");
const favoritesRoutes = require("./server/routes/favorites.routes");

app.use(express.json());
app.use(express.static(__dirname + "/build"));
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoritesRoutes);

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log(`${PORT} is working`));
