import {useLocalStorage} from "../hooks/useLocalStorage";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todo, setTodo] = useLocalStorage("todo",[]);
 
  function addTodo(text) {
    setTodo(prev => [...prev, {id: Date.now(), text}])
  }

  function delTodo(id) {
    setTodo((prev) => (prev.filter((item) => item.id !== id)));
  }

  return (
    <div className="p-2">
      <TodoForm addTodo={addTodo} />
      <TodoList todo={todo} delTodo={delTodo} />
    </div>
  );
};

export default TodoApp;