import useMyState from "../hooks/useMyState";
import useAutoFocus from "../hooks/useAutoFocus";

const TodoForm = ({addTodo, search, setSearch}) => {
  const [text, setText] = useMyState("");
  const inputRef = useAutoFocus(null);

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
    <div>
    {/** Section 01  */}
    <form onSubmit={handleSubmit} className="inline">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Add a new todo..."
        className="focus:outline-blue-500 border border-blue-500 rounded p-2 mt-4 "
      />
      <button className="disabled:bg-gray-300 disabled:text-gray-500 font-semibold bg-blue-500 text-white rounded p-2 mt-4 ml-0.5"
        disabled={!text}>Add Todo
      </button>  
    </form>

    {/** Section 02  */}
    <div className="inline">
      <button className="ml-30 font-semibold bg-blue-500 text-white rounded p-2 mt-4">Filter</button>
    </div>

    {/** Section 03  */}
    <div className="rounded-xl ml-100 inline border border-blue-500 rounded p-3 mt-4">
      <label>🔍</label>
      <input
        type="text"
        placeholder="Search..."
        vlaue={search}
        onChange={(e)=>setSearch(e.target.value)} 
        className="outline-none ml-0.5 font-semibold text-gray-900 rounded p-2 mt-4"
      />
    </div>
      <button className="rounded-xl ml-0.5 p-2 rounded border border-blue-500 text-lg font-semibold">Search</button>
    </div>
    </>
  );
}; export default TodoForm;