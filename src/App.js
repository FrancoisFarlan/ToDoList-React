import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {Fragment, useEffect, useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import List from './components/liste';

function App() {

    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('data')) || '[]'
    });

    useEffect(() => {
        saveTodos();
    })

    const addTodo = (todo) => {
        setTodos([...todos, {done:false, description:todo}]);
    }

    const saveTodos = () => {
        const data = JSON.stringify(todos);
        localStorage.setItem("data", data);
    }

    const toggleDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

  return (
    <Fragment>
    
      <Header todos={todos}></Header>

<main>
      <Form todos={todos} addTodo={addTodo}></Form>

      <List todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} setTodos={setTodos}></List>
</main>
    <Footer></Footer>

</Fragment>
  );
}

export default App;
