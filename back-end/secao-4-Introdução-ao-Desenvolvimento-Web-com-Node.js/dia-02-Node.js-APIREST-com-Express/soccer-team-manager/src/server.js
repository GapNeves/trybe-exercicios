const crypto = require('node:crypto');
const express = require('express');
let teams = require('./data');

const app = express();
app.use(express.json());

// app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}));

app.get('/teams', (req, res) => {
  res.status(200).json(teams);
});

// Criando um novo time atraves do .post;
app.post('/teams', (req, res) => {
  // Desestruturando chaves para criar um time no Thunder Cliente;
  const { name, initials } = req.body;

  //Verificações para que possa criar corretamente um time;
  if(!name) return res.status(400).json({ message: 'The name is missing :/' })
  if(typeof name !== 'string'){
    return res
      .status(400).json({ message: 'The name ought to be a string' })
  }
  if(!initials) return res.status(400).json({ message: 'The initials is missing :/' })
  if(typeof initials !== 'string'){
    return res
      .status(400).json({ message: 'The initials ought to be a string' })
  }

  //Gerando um id aleatorio;
  const team = {
    id: crypto.randomUUID(),
    name,
    initials,
  };
  teams.push(team);
  res.status(201).json(teams);
});

// Deletando um time;
app.delete('/teams/:id', (req, res) => {
  // Verificação para que ao tentar deletar um time que já foi deletado retorne 404;
  const { id } = req.params;
  const found = teams.find((team) => team.id === id);
  if(!found) return res.status(404).end();

  teams = teams.filter((team) => team.id !== id);
  res.status(204).end();
});

// ATULIZAÇÃO COMPLETA: PUT;
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const{ name, initials } = req.body;
  const found = teams.find((team) => team.id === id)
  if (!found) return res.status(404).end();

  //Verificações para que possa criar corretamente um time;
  if(typeof name !== 'string'){
    return res
      .status(400).json({ message: 'The name ought to be a string' })
  }
  if(!initials) return res.status(400).json({ message: 'The initials is missing :/' })
  if(typeof initials !== 'string'){
    return res
      .status(400).json({ message: 'The initials ought to be a string' })
  }

  teams = teams.map(team => {
    if(team.id === id) {
      return {
        // ...team vai buscar todos as chaves;
        ...team,
        name,
        initials,
      };
    }
    return team;
  })
  res.status(204).end();
});

// ATUALIZAÇÃO PARCIAL: PATCH;
app.patch('/teams/:id/name', (req, res) => {
  const { id } = req.params;
  const{ name } = req.body;
  if (!name) return res.status(404).json({ message: 'The name is missing'});
  if(typeof name !== 'string'){
    return res
      .status(400).json({ message: 'The name ought to be a string' })
  }
  const found = teams.find((team) => team.id === id)
  if (!found) return res.status(404).end();
  teams = teams.map((team) => {
    if (team.id === id) {
      return {
        ...team,
        name,
      };
    }
    return team;
  });
  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Start on port 3001');
});
