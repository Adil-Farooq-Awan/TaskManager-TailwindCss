import Todo from './Todo';

const TodoList = ({todo, delTodo }) => {
 return(
  <ul>
    {todo.length > 0 ? (
      todo.map((item) => (
     <Todo key={item.id} todo={item} delTodo={delTodo} /> ))) : 
     (<p className="text-lg text-gray-500 font-semibold mt-2">No todos yet. Add one 👆</p>)
    }
    
    {todo.length === 1  && 
    <p className="text-lg text-gray-500 font-semibold mt-2">You have {todo.length} Todo... Great</p>}
    {todo.length > 1 &&
    <p className="text-lg text-gray-500 font-semibold mt-2">You have {todo.length} Todos... Keep it up</p>}
    
  </ul>
 )
}; export default TodoList;