const crypto = require('node:crypto');
const express = require('express');
const teams = require('./data');

const app = express();
app.use(express.json());

// app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}));

app.get('/teams', (req, res) => {
  res.status(200).json(teams);
});

app.post('/teams', (req, res) => {
  const { name, initials } = req.body;
  const team = {
    id: crypto.randomUUID(),
    name,
    initials,
  };
  teams.push(team);
  res.status(201).json(teams);
});

app.listen(3001, () => {
  console.log('Start on port 3001');
});
