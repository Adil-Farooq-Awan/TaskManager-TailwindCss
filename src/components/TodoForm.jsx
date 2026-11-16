import useMyState from "../hooks/useMyState";
import useMyRef from "../hooks/useAutoFocus";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useMyState("");
  const inputRef = useMyRef(0);
  console.log(inputRef.current);
  console.log(inputRef);


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
     <h1 className="rounded bg-blue-500 text-white text-lg font-semibold text-center p-4">Todo List</h1>   
  
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Add a new todo..."
        className="focus:outline-blue-500 border border-blue-500 rounded p-2 mt-4 "
      />
      <button className="disabled:bg-gray-300 disabled:text-gray-500 font-semibold bg-blue-500 text-white rounded p-2 mt-4 ml-0.5" disabled={!text}>Add Todo</button>
    </form>
    </>
  );
}; export default TodoForm;