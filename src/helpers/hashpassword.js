const bcrypt = require('bcryptjs');

module.exports = async (password) => {
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT, 10));
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
