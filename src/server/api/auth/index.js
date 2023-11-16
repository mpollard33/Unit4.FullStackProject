// src/server/api/auth/index.js
const { ServerError } = require("../../errors");
const prisma = require("../../prisma");
const jwt = require("./jwt");
const bcrypt = require("bcrypt");
const router = require("express").Router();
module.exports = router;

/** Creates new account and returns token */
router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    /* Check if username and password provided */
    if (!username || !password) {
      throw new ServerError(400, "Username and password are required.");
    }

    /* Check if account already exists */
    const userExists = await prisma.user.findUnique({
      where: { username },
    });
    if (userExists) {
      throw new ServerError(
        400,
        `An account with the username ${username} already exists.`
      );
    }

    /* Create new user with hashed password */
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { username, password: hashedPassword },
    });

    /* Log the creation of a new user */
    console.log(`New user created with username: ${username}`);

    const token = jwt.sign({ id: newUser.id });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

/** Returns token for account if credentials valid */
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    /* Check if username and password provided */
    if (!username || !password) {
      throw new ServerError(400, "Username and password are required.");
    }

    /* Check if account exists */
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new ServerError(
        400,
        `An account with the username ${username} does not exist.`
      );
    }

    /* Check if password is correct */
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new ServerError(401, "Invalid password.");
    }

    /* Password is correct, generate and send token */
    console.log(`Successful login for username: ${username}`);
    const token = jwt.sign({ id: user.id });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});
