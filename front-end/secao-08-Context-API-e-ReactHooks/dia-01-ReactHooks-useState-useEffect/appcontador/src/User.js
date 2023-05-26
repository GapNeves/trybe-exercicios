import { useEffect, useState } from 'react';

function User({ age }) {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setName(data.name);
      })
  }, [])
  // sempre quando formos fazer uma chamada a API devemos usar a segunda forma do useEffect, passando um array[] vazio, para que sejá feito um fetch apenas uma vez(apenas no momento em o componente dor montado).
  // par seja feito fetch novamente passe um argumento para o arra
  useEffect(() => {
    const intervalId = setInterval(() =>{
      document.title = (new Date()).toLocaleTimeString()
    },1000)

    // cleanUp function => função de limpeza e quarta forma de usar o useEffect, usamos quando o componente for desmontado.
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <div>
      <h1>Contador:</h1>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
      <hr />
      <div>
        <h1>Dados do usuário:</h1>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
      </div>
    </div>
  );
}

export default User;