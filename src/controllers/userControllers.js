const User = require("./../models/userModel");

const postUser = async (req, res) => {
  console.log(req.body);
  const elem = new User({
    name: req.body.name,
  });
  await elem.save();
};

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};

module.exports = { postUser, getAllUser };
