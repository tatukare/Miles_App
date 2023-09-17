const express = require('express');
const router = express.Router();

const { getUserById, getIndexOfUser, getUserByEmail } = require('./helpers');

const usersList = [
  { id: 1, name: 'Carlos', email: 'example@gmail.com', password: '123' },
  { id: 2, name: 'Rigo', email: 'rigonator@gmail.com', password: '123' },
  { id: 3, name: 'Egan', email: 'eganzipa@gmail.com', password: '123' },
];

router.get('/id/:id', (req, res) => {
  const { id } = req.params;

  const user = getUserById(usersList, id);

  if (!user) return res.status(404).json({ message: 'User not Found' });

  res.json({ data: user });
});

router.get('/email/:email', (req, res) => {
  const { email } = req.params;

  const user = getUserByEmail(usersList, email);

  console.log(user);
  if (!user) return res.status(404).json({ message: 'User not Found' });

  res.json({ data: user });
});

router.get('/', (req, res) => {
  if (usersList.length === 0)
    return res.status(404).json({ message: 'Not Users Found' });

  res.json({ data: { ...usersList } });
});

router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ message: 'User, email and password are required' });

  const user = usersList.filter((u) => u.email === email);
  if (user.length > 0)
    return res.status(409).json({ message: 'User already exists' });

  const lastUserIndex = usersList.length - 1;
  const id = lastUserIndex < 0 ? 1 : usersList[lastUserIndex].id + 1;
  usersList.push({ id, name, email, password });
  res.status(201).json({ id, name, email });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const user = getUserById(usersList, id);

  if (!user) return res.status(400).json({ error: "User don't exist" });

  const userIndex = getIndexOfUser(usersList, id);
  usersList.splice(userIndex, 1);
  res.status(202).json(user);
});

router.put('/:id', (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  if (!name || !email)
    return res.status(400).json({ message: 'User and email are required' });

  const user = getUserById(usersList, id);

  if (!user) return res.status(400).json({ error: "User don't exist" });

  const userIndex = getIndexOfUser(usersList, id);

  usersList[`${userIndex}`] = { id: +id, name, email };
  res.status(201).json({ message: 'User modified' });
});

module.exports = router;
