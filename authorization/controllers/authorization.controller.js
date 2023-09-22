const jwtSecret = require("../../common/config/env.config.js").jwt_secret,
  jwt = require("jsonwebtoken");
const crypto = require("crypto");
const uuid = require("uuid");

exports.refresh_token = (req, res) => {
  try {
    req.body = req.jwt;
    let token = jwt.sign(req.body, jwtSecret);
    res.status(201).send({ id: token });
  } catch (err) {
    res.status(500).send({ errors: err });
  }
};
