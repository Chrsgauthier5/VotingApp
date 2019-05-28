const db = require("../models");

exports.register = async (req, res, next) => {
  try {
    const user = await db.User.create(req.body);
    console.log("register route hit");
    console.log(user);
    const { id, username } = user;
    res.json(id, username);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log("hitting login route");
    const user = await db.User.findOne({ username: req.body.username });
    const { id, username } = user;
    const valid = await user.comparePassword(req.body.password);

    if (valid) {
      res.json({
        id,
        username
      });
    } else {
      throw new Error("a");
    }
  } catch (err) {
    next(err);
  }
};
