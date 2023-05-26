import User from './User';

function App() {
  const user = {
    name: 'Gabriel',
    age: 24
  }
  return(
    <div>
      <User name={User.name} age={user.age} />
    </div>
  )
}

export default App;
