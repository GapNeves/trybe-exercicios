import './index.css';
import { useState } from 'react';

function App() {
  // const [name, setName] = useState('');
  // const [year, setYear] = useState(0);
  // const [city, setCity] = useState('');
  const [subject, setSubject] = useState('');

  // const handleName (event) => {
  //   setName (event.target.value);
  // }
  const [input, setInput] = useState({
    username: '',
    age: 0,
    city: '',
    // subject: '',
  })

  const handleChange = ({target}) => {
    setInput({...input, [target.name]: target.value})
  }
  const handleSubject = (event) => {
    setSubject(event.target.value)
  }

  return (
    <div>
      <h1>Exercicios</h1>
      <form>
        <input
          value={input.username}
          name="username"
          type="text"
          placeholder="Nome Completo"
          onChange={handleChange}
          />
        <input
          value={input.age}
          name="age"
          type="number"
          placeholder="Idade"
          onChange={handleChange}
          />
        <input
          value={input.city}
          name="city"
          type="text"
          placeholder="Cidade"
          onChange={handleChange}
          />

          <br/>
        <label>
        <input
          value="Fundamentos"
          checked={subject === 'Fundamentos'}
          name="radio"
          type="radio"
          onChange={handleSubject}
          />
          Fundamentos
        </label>
        <br/>
        <label>
        <input
          value="Front-end"
          checked={subject === 'Front-end'}
          name="radio"
          type="radio"
          onChange={handleSubject}
          />
          Front-end
        </label>
        <br/>
        <label>
        <input
          value="Back-end"
          checked={subject === 'Back-end'}
          name="radio"
          type="radio"
          onChange={handleSubject}
          />
          Back-end
        </label>
        <br/>
        <label>
        <input
          value="Cs"
          checked={subject === 'Cs'}
          name="radio"
          type="radio"
          onChange={handleSubject}
          />
          Cs
        </label>
        <br/>
        <button>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
