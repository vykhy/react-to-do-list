import './App.css';
import React,{useState, useEffect} from 'react';
import Form from './components/Form';
import Todo from './components/Todo'

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setToDos] = useState([]);
  const [status, setStatus] =useState('all');
  const [fileterd, setFiltered] = useState([]);

  useEffect(() => {
    getLocal();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFiltered(todos.filter(todo =>todo.completed === true));
        break;
      case 'uncompleted' :
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  const saveLocal = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocal = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      const localTodo = JSON.parse(localStorage.getItem('todos'));
      setToDos(localTodo);
    }
  }
  return (
    <div className="App">
      <h1>My To-do List</h1>
      <Form 
        todos={todos} 
        setToDos={setToDos} 
        inputText={inputText} 
        setInputText={setInputText} 
        setStatus={setStatus}/>
      <Todo 
        todos={todos} 
        setToDos={setToDos}
        filtered = {fileterd} />
    </div>
  );
}

export default App;
