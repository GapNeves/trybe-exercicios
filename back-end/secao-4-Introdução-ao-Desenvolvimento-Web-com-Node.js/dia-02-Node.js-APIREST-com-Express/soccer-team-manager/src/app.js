const express = require('express');
const app = express();

// app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ teams: newTeam })
});

module.exports = app;