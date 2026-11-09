import useMyState from "../hooks/useMyState";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useMyState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent adding empty todos
    addTodo(text);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  
  return(
    <>
     <h1 className="rounded bg-blue-500 text-white text-center p-4">Todo List</h1>   
  
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a new todo..."
        className="border border-gray-300 rounded p-2 mt-4 w-ful"
      />
      <button className="font-semibold bg-blue-500 text-white rounded p-2 mt-4" disabled={text}>Add Todo</button>
    </form>
    </>
  );
}; export default TodoForm;