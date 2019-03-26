const bcrypt = require('bcryptjs');

module.exports = async (password, hashedPassword) => {
  try {
    const res = await bcrypt.compare(password, hashedPassword);
    if (!res) {
      throw new Error('password doesn\'t match');
    } else {
      return res;
    }
  } catch (error) {
    throw error;
  }
};
