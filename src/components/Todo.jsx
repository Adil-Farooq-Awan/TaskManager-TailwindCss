import useMyRef from "../hooks/useMyRef";
const Todo = ({ todo, delTodo, editingId, editText, setEditText, startEdit, saveEdit, cancelEdit, toggleTodo }) => {
  
  const inputRef = useMyRef(null, editingId, todo.id);
  
  return (
    <>
    <li className="inline-block p-1 border rounded mt-2">
    {editingId === todo.id ? (
      <input
        value={editText}
        ref={inputRef}
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={(e) => {
         if (e.key === "Enter") {
          saveEdit(todo.id);
         }
         else if (e.key === "Escape") {
          cancelEdit();
         }
        }}
        />
      ) : (
       
      <p className="overflow-hidden p-1 text-lg semi-bold inline"
          disabled={editingId}
          onClick={()=>toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          }}
        > {todo.text} </p>
      
      )}

      {
        editingId === todo.id ? (
        <button 
          onClick={() => saveEdit(todo.id)}
          className="bg-green-500 text-white rounded-xl p-1 ml-0.5 cursor-pointer">🔖
        </button>
        ) : (
        <button 
         onClick={()=>{startEdit(todo)}}
         className="bg-green-500 text-white rounded-xl p-1 ml-0.5 cursor-pointer">✏️
        </button>
        )
      }

      {/* button was used to toggle completed but droped afterwards
      todo.completed ? (
        <button 
         onClick={()=>{toggleTodo(todo.id)}}
         className="disabled-bg-orange-300 bg-orange-500 text-white rounded-xl p-1 ml-0.5 cursor-pointer"
         disabled={editingId}>✅
        </button> ) :
        (
        <button 
         onClick={()=>{toggleTodo(todo.id)}}
         className="disabled-bg-orange-300 bg-orange-500 text-white rounded-xl p-1 ml-0.5 cursor-pointer"
         disabled={editingId}>⚙️
        </button>
        )
      */}
      <button 
        onClick={()=>delTodo(todo.id)}
        className="disabled:bg-red-300 bg-red-500 text-white rounded-xl p-1 ml-0.5 cursor-pointer" 
        disabled={editingId}>🗑️
      </button>
      
    </li>
    </>
  );
};

export default Todo;