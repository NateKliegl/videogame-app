const query = require("../config/mysql.conf");

async function addFavorite(res, hero) {
  try {
    await query("INSERT INTO favorites SET ?", hero);
    return res.send({
      success: true,
      error: null,
      data: hero,
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong",
      data: null,
    });
  }
}

async function deleteFavorite(res, id, user_id) {
  try {
    await query(
      "DELETE FROM favorites WHERE favorites.hero_id = ? AND favorites.user_id = ?",
      [id, user_id]
    );
    return res.send({
      success: true,
      error: null,
      data: id,
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong",
      data: null,
    });
  }
}

async function byUserId(res, user_id) {
  try {
    const favorites = await query(
      "SELECT * FROM favorites WHERE favorites.user_id = ?",
      [user_id]
    );
    return res.send({
      success: true,
      error: null,
      data: favorites,
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong",
      data: null,
    });
  }
}

module.exports = { addFavorite, deleteFavorite, byUserId };
