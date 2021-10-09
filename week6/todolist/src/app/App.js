import TodoList from '../components/TodoList';
import NewTodo from '../components/AddTodo';
import UserProvider from '../components/context';
import './App.css';

function App() {
  return (
    <UserProvider>
      <h1>Todo List</h1>
      <NewTodo/>
      <TodoList/>
    </UserProvider>
  )
}

export default App;
