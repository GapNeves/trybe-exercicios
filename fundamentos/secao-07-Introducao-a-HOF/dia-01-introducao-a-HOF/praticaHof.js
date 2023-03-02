//Gerador de email para nova pessoa contratada
const emailGeneretor = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@trybe.com`};
};

const newEmployees = (emailGeneretor) => {
    const employees = {
      id1: emailGeneretor('Pedro Guerra'), 
      id2: emailGeneretor('Luiza Drumond'), 
      id3: emailGeneretor('Carla paiva'), 
    }
    return employees;
  };

console.log(newEmployees(emailGeneretor));

//Sorteador de loteria entre 1 e 5
const confereNum = (aposta, number) => aposta === number;

const aleatoryNumber = (aposta, loteria) => {
    const number = Math.floor((Math.random()* 5) + 1);
    return loteria(aposta, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(aleatoryNumber(3, confereNum));

//Corretor automático de exame
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareGabarito = (respostasCorretas, respostaEstudante) => {
    if (respostasCorretas === respostaEstudante) {
      return 1;
    } if (respostaEstudante === 'N.A') {
      return 0;
    }
    return -0.5;
  };
  
const boletim = (respostasCorretas, respostaEstudante, action) => {
    let contador = 0;
    for (let index = 0; index < respostasCorretas.length; index += 1) {
        const actionReturn = action(respostasCorretas[index], respostaEstudante[index]);
        contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
  };
  
console.log(boletim(RIGHT_ANSWERS, STUDENT_ANSWERS, compareGabarito));