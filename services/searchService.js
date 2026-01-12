const findUserById = (users, id) => {
  return users.find((user) => user.id === parseInt(id));
};

module.exports = { findUserById };
