/* We can have multiple inputs using the code
   here for sample we took name and email, you may extend it to any number of inputs
   this caused possible with 
   setFormData((prev)=> {...prev, [e.target.name]: e.target.value});

   .map
   then we treid to use .map but found it that it doesn't work on objects
   thus moved data from fromData to an array defined as data
   and thanks to the syntax
   setdata((prev)=> [...prev, {...formData}]);
   this line of code in handleSubmit made our map to work

   learnt that is crucial to check in handleSubmit
    if (!formData.UserName || !formData.UserEmail) return;
*/

import {useState} from "react";
const MultipleInput = () => {
  {/*To Hold form data*/}    
  const [formData, setFormData] = useState({UserName: "", UserEmail: ""});  
  {/*To Hold all submitted data in an array*/}
  const [data, setData] = useState([]);  

    function handleSubmit(e) {
    e.preventDefault();

    // Don't submit if fields are empty
    if (!formData.UserName || !formData.UserEmail) return;

    alert(`Name: ${formData.UserName}\nEmail: ${formData.UserEmail}`);

    // 2. Spread a fresh clone of formData into the array
    setData((prev) => [...prev, { ...formData }]);

    // 3. Reset form
    setFormData({UserName: "", UserEmail: ""});
    }
    
    function handleChange(e) {
        setFormData({...formData,[e.target.name]: e.target.value});
    }
  
    return (
    <div className="p-4">
      <h1 className="rounded bg-blue-500 text-white text-center p-4">Welcome</h1>
      <form onSubmit={handleSubmit} className="p-4">
      <input 
         type="text"
         name="UserName"
         value={formData.UserName}
         onChange={handleChange}
         placeholder="Enter your name"
         className="border border-gray-300 rounded p-2 mt-4 w-full"
        />
       <input 
         type="text"
         name="UserEmail"
         value={formData.UserEmail}
         onChange={handleChange}
         placeholder="Enter your Email"
         className="border border-gray-300 rounded p-2 mt-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4">Submit</button>
        </form>

      <div className="p-4">
        
        {/* 2. Showing up the live display */}
        <h2 className="text-xl font-semibold mt-4">Live Typing Preview:</h2>
        
        {/* Check if the user is typing before displaying the preview */}
          {formData.UserName && formData.UserEmail ? (
            <div className="p-4 border border-gray-300 rounded mt-2">
              <p className="text-lg font-semibold">Name: {formData.UserName}</p>  
              <p className="mt-1">Email: {formData.UserEmail}</p>
            </div>
            ) : (
              <p className="text-gray-500 mt-2">Waiting for user input...</p>
          )}
    
        <h2 className="text-xl font-semibold mt-4">Submitted Entries:</h2>
        
        {/* 3. Map directly over the 'data' array if data exists*/}
        {!(data.length === 0) ? (
        data.map((item, index) => (
        // Using index as a fallback key, though a unique ID is ideal
        <div key={index} className="p-4 border border-gray-300 rounded mt-2">
          <p className="text-lg font-semibold">Name: {item.UserName}</p>  
          <p className="mt-1">Email: {item.UserEmail}</p>
        </div>
        ))) : (
          <p className="text-gray-500 mt-2">No entries submitted yet.</p>
        )}
        </div>
    </div> ); }; export default MultipleInput;