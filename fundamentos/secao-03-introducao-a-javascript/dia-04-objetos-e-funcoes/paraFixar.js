//Atividade para fixar-JavaScript-Objetos
let player = {
    nome : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 },
}

console.log('A jogadora ' + player.nome + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player['nome'] + ' ' + player['lastName'] + ' foi eleira a melhor do mundo por 6 vezes nestes anos ' + player['bestInTheWorld'] + '!');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata' + '!');

//Atividade para fixar-JavaScript-for/in-for/of
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for(let nome in names){
    console.log('Olá ' + nome, names[nome]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for(let store in car){
    console.log(store, car[store]);
    
}