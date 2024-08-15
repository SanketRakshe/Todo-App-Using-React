import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todos'

function App() {

  // const [todos, setTodos] = React.useState([]);

  // fetch('http://localhost:3000/todos')
  // .then(async function(response){
  //   const data = await response.json();
  //   setTodos(data.todos);
  // })

  return (
    <>
      < CreateTodo />
      < Todo />
    </>
  )
}

export default App
