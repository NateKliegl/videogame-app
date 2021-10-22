const query = require("../config/mysql.conf");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

async function signup(res, username, password) {
  try {
    const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
      username,
    ]);
    if (user) {
      return res.send({
        success: false,
        error: "Username taken",
        data: null,
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const uuid = uuidv4();
    await query(
      "INSERT INTO users (username, password, uuid) VALUES (?, ?, ?)",
      [username, hash, uuid]
    );
    return res.send({
      success: true,
      error: null,
      data: "You're signed in!",
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong try again later",
      data: null,
    });
  }
}

async function login(res, username, password) {
  try {
    const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
      username,
    ]);
    if (!user) {
      return res.send({
        success: false,
        error: "Wrong Username",
        data: null,
      });
    }
    let matches = await bcrypt.compare(password, user.password);
    if (!matches) {
      return res.send({
        success: false,
        error: "Wrong Password",
        data: null,
      });
    }
    const payload = { uuid: user.uuid };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "7 days",
    });
    return res.cookie("jwt", token, { httpOnly: true, maxAge: 360000 }).send({
      success: true,
      error: null,
      data: { username: user.username },
    });
  } catch (e) {
    return res.status(500).send({
      success: false,
      error: "Something went wrong try again later",
      data: null,
    });
  }
}

module.exports = { signup, login };
