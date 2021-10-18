const express = require("express");
const router = express.Router();
const {
  addFavorite,
  deleteFavorite,
  byUserId,
} = require("../models/favorites.models");

router.post("/add", (req, res) => {
  const hero = req.body;

  if (!hero.title || !hero.url || !hero.her0_id) {
    return res.send({
      success: false,
      error: "Invalid information",
      data: null,
    });
  }
  addFavorite(res, hero);
});

router.delete("/delete/:id", (req, res) => {
  deleteFavorite(res, req.params.id);
});

router.get("/user/:user_id", (req, res) => {
  byUserId(res, req.params.user_id);
});
