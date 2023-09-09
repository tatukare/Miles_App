const getUserById = (users, id) => {
  const user = users.filter((el) => el.id === +id);

  return user[0];
};

const getIndexOfUser = (users, id) => {
  return users.findIndex((el) => el.id === +id);
};

module.exports = { getUserById, getIndexOfUser };
