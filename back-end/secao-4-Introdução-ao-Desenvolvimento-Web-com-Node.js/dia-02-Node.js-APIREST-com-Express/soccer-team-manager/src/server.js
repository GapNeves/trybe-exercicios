const express = require('express');

const app = express();

// app.use(express.json());

// app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}));

app.get('/teams', (req, res) => {
  const teams = [
    {
      id: 1,
      name: 'Cruzeiro Esporte Clube',
      initials: 'CEC',
    },
  ];

  res.send(teams);
  // res.status(201).json({ teams: newTeam })
});

app.listen(3001, () => {
  console.log('Start on port 3001');
});
