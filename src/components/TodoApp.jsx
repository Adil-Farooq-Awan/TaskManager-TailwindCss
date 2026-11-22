import useLocalStorage from "../hooks/useLocalStorage";
import useMyState from "../hooks/useMyState";

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todo, setTodo] = useLocalStorage("todo",[]);

  //edit related states
  const [editingId, setEditingId] = useMyState(null);
  const [editText, setEditText] = useMyState("");

  //filter state
  const [filter, setFilter] = useMyState("all");
  const [search, setSearch] = useMyState("");

  let message = "";

  //service functions
  function addTodo(text) {
    setTodo(prev => [...prev, {id: Date.now(), text, completed:0}])
  }

  function delTodo(id) {
    setTodo((prev) => (prev.filter((item) => item.id !== id)));
  }

  //edit functions

  function startEdit(todo){
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function saveEdit(id){
    setTodo(
      todo.map ( item =>
        item.id === id ? {...item, text:editText} : item 
      )
    )
    setEditingId(null);
    setEditText("");
  }

  const cancelEdit = () => {
  setEditingId(null);
  setEditText("")
  };

  // toggleTdod   
  function toggleTodo(id) {
  setTodo(
    todo.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
  }

  //search


  //set message
  const activeTodo = todo.filter(item => !todo.completed).length;
  if (filter === "all") {
    
    todo.length === activeTodo ? (
    message = `${todo.length} Total Tasks | All Pending | ${todo.length - activeTodo} Completed`) : (
    message = `${todo.length} Total Tasks | ${activeTodo} Pending | ${todo.length - activeTodo} Completed` )

  } else if (filter === "completed" && todo.length - activeTodo !== 0) {

    message = `${todo.length - activeTodo} Tasks Completed`;

  } else if (filter === "active" && activeTodo !== 0) {

    message = `${activeTodo} Tasks Pending`;

  }  



  return (
    <div className="p-2">
       <TodoForm addTodo={addTodo} search={search} setSearch={setSearch} />
       <TodoList todo={todo} delTodo={delTodo} message={message} 
        editingId={editingId} setEditingId={setEditingId} 
        editText={editText} setEditText={setEditText}
        startEdit={startEdit} saveEdit={saveEdit} cancelEdit={cancelEdit} toggleTodo={toggleTodo} 
        />
    </div>
  );
};

export default TodoApp;