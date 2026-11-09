const FormInput = ({ name, setName }) => {
 function handleSubmit(e) {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  }  
  
   return (
    <div>
      <h1 className="rounded bg-blue-500 text-white text-center p-4">Welcome</h1>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border border-gray-300 rounded p-2 mt-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Submit</button>  
      </form>
        <p className="mt-4">Hello, {name}!</p>
    </div>
  );
}; export default FormInput;