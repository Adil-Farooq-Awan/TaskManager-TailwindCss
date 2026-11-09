const Todo = ({ todo, delTodo }) => {
  
  return (
    <>
    <li className="inline-block p-4 border border-gray-300 rounded mt-2 w-auto">  
      <p className="p-2text-lg semi-bold inline w-200"> {todo.text} </p>
      <button className="bg-red-500 text-white rounded p-1 m-2"
                onClick={()=>delTodo(todo.id)} >
        ❌
      </button>
      <button className="bg-green-500 text-white rounded p-1 m-2">Edit</button>
    </li>
      <br />
    </>
  );
};

export default Todo;