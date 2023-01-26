let player = {
    nome : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 },
}

console.log('A jogadora ' + player.nome + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.nome + ' ' + player.lastName + ' foi eleira a melhor do mundo por 6 vezes nestes anos ' + player.bestInTheWorld + '!');