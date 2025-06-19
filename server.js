const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const users = {};

// POST /users
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Both name and email are required.' });
  }
  if (typeof name !== 'string' || typeof email !== 'string') {
    return res.status(400).json({ error: 'Name and email must be strings.' });
  }

  const id = uuidv4();
  const user = { id, name, email };
  users[id] = user;

  res.status(201).json(user);
});

// GET /user/id
app.get('/user/:id', (req, res) => {
  const user = users[req.params.id];
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  res.status(200).json(user);
});

// Fallback error handler
app.use((err, req, res, next) => { 
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
