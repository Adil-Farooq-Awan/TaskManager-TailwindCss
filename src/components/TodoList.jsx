import Todo from './Todo';

const TodoList = ({ todo, delTodo, message, editingId, setEditingId, editText, setEditText, startEdit, saveEdit, cancelEdit, toggleTodo }) => {
 return(
  <>
  <ul className = "bg-gray-200 rounded w-content">
    {
    todo.length > 0 ? (

      todo.map((item, index) => (
     <Todo key={index} todo={item} delTodo={delTodo} 
        editingId={editingId} setEditingId={setEditingId} 
        editText={editText} setEditText={setEditText}
        startEdit={startEdit} saveEdit={saveEdit} cancelEdit={cancelEdit} toggleTodo={toggleTodo}  /> ))) :

     (<p className="text-lg text-gray-500 font-semibold mt-2">No todos yet. Add one 👆</p>)
    }
    
    {todo.length === 1  && 
    <p className="text-lg text-gray-500 font-semibold mt-2">You have {todo.length} Todo |    </p>}
    
    {todo.length > 1 &&
    <p className="text-lg text-gray-500 font-semibold mt-2">You have {todo.length} Todos... Keep it up</p>}
  </ul>
    <p className="text-lg text-gray-500 font-semibold mt-2">{message}</p>
  </>
 )
}; export default TodoList;