const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) {
    res.send({ message: "email already exists...", status: 409 });
  } else {
    if (name && email && password) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        console.log(hashPassword);
        await User.create({
          name,
          email,
          password: hashPassword,
        });
        res.send({message:"user is succesfully registerd...", status:201});
      } catch (error) {
        res.send({message:"User is unable to register..."});
      }
    } else {
      res.send({message:"All fields are required...", status:400});
    }
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email: email } });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (user.email === email && isMatch) {
          const token = jwt.sign({ userId: user.id }, "tanu", {
            expiresIn: "1h",
          });
          console.log(token);
          res.send({ message: "Login is successfull...", status: 200, token });
        } else {
          res.send({
            message: "either email or password incorrect...",
            status: 400,
          });
        }
      } else {
        res.send({ message: "You are not regunster user...", status: 400 });
      }
    } else {
      res.send({ message: "all fields are required...", status: 400 });
    }
  } catch (error) {
    console.log(error);
    res.send({ message: "Unable to login...", status: 400 });
  }
};
const loggedUser = async (req, res) => {
  res.send({ user: req.userId, message: "success", status: 200 });
};
module.exports = { userSignup, userLogin, loggedUser };
