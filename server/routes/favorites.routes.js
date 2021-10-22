const express = require("express");
const auth = require("../middleware/auth.middleware");
const router = express.Router();
const {
  addFavorite,
  deleteFavorite,
  byUserId,
} = require("../models/favorites.models");

router.post("/add", auth, (req, res) => {
  const hero = {
    url: req.body.url,
    user_id: req.user.id,
    hero_id: req.body.hero_id,
    name: req.body.name,
  };
  console.log(hero);

  if (!hero.name || !hero.url || !hero.hero_id) {
    return res.send({
      success: false,
      error: "Invalid information",
      data: null,
    });
  }
  addFavorite(res, hero);
});

router.delete("/delete/:id", auth, (req, res) => {
  deleteFavorite(res, req.params.id, req.user.id);
});

router.get("/user", auth, (req, res) => {
  byUserId(res, req.user.id);
});
module.exports = router;
