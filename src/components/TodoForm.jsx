import useMyState from "../hooks/useMyState";
import useAutoFocus from "../hooks/useAutoFocus";
import Filter from "./Filter";

const TodoForm = ({addTodo, search, setSearch}) => {
  const [text, setText] = useMyState("");
  const inputRef = useAutoFocus(null);
  const [isClicked, setIsClicked] = useMyState(false);

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
    <div className="flex justify-between items-start w-full mt-2">
    {/** Section 01  */}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Add a new todo..."
        className="focus:outline-blue-500 border border-blue-500 p-2 
         "
      />
      <button className="disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-red-500 hover:bg-blue-200 hover:text-white rounded-xl p-2 rounded border border-blue-500 text-lg font-semibold ml-0.5"
        disabled={!text}>Add Todo
      </button>  
    </form>

    {/** Section 02  */}
    <div>
      <button
        className="hover:bg-blue-200 hover:text-white rounded-xl p-2 rounded border border-blue-500 text-lg font-semibold"
        onClick={()=>setIsClicked(!isClicked)}>
        Filter
      </button>
      {isClicked && <Filter />}
    </div>

    {/** Section 03  */}
    <div className="flex justify-between items-start gap-0.5">
      <div className="rounded-xl border border-blue-500 rounded p-2">
        <label>🔍</label>
        <input
          type="text"
          role="text-box"
          placeholder="Search..."
          vlaue={search}
          onChange={(e)=>setSearch(e.target.value)} 
          className="outline-none font-semibold text-gray-900 rounded"
        />
      </div>
      <button className="hover:bg-blue-200 hover:text-white rounded-xl p-2 rounded border border-blue-500 text-lg font-semibold">Search</button>
      </div>
    </div>
    </>
  );
}; export default TodoForm;