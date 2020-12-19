const express = require("express");
const { body, validationResult, check } = require("express-validator");
const {
  register,
  login,
  //   logout,
  //   currentUser,
} = require("../controllers/authController");
// const authCheck = require("../middlewares/auth/authCheck");

const router = express.Router();
/**
 * @access : Public
 * @desc : Register endpoint
 * @route :Post  /api/auth/register
 */
router.post(
  "/register",
  [
    check("password", "Plase enter a password with 6 and more chars").isLength({
      min: 6,
    }),
    check("email", "Plase email checked").isEmail(),
  ],
  register
);

/**
 * @access : Public
 * @desc : Register endpoint
 * @route :Post  /api/auth/login
 */
router.post(
  "/login",
  [
    check("password", "Plase enter a password with 6 and more chars").isLength({
      min: 6,
    }),
    check("email", "Plase email checked").isEmail(),
  ],
  login
);

module.exports = router;
