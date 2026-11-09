const BasicInput = ({ name, setName }) => {
  return (
    <div>
      <h1 className="rounded bg-blue-500 text-white text-center p-4">Welcome</h1>
      <input 
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
         placeholder="Enter your name"
         className="border border-gray-300 rounded p-2 mt-4 w-full"
        />
        <p className="mt-4">Hello, {name}!</p>  
    </div>
  );
}; export default BasicInput;