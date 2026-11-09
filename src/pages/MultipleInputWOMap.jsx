import { useState } from "react";

const MultipleInput = () => {
    const [formData, setFormData] = useState({ UserName: "", UserEmail: "" });
    // Change 'data' from an empty array [] to a null object 
    const [lastEntry, setLastEntry] = useState(null);  

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!formData.UserName || !formData.UserEmail) return;

        alert(`Name: ${formData.UserName}\nEmail: ${formData.UserEmail}`);
        
        // Save a clone of the current form data as the last entry
        setLastEntry({ ...formData });
        
        // Reset the typing form
        setFormData({ UserName: "", UserEmail: "" });
    }
    
    function handleChange(e) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  
    return (
        <div>
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
                <h2 className="text-xl font-bold mt-4">Live Typing Preview:</h2>
                {/* Check if the user is typing before displaying the preview */}
                {formData.UserName || formData.UserEmail ? (
                    <div className="p-4 border border-gray-300 rounded mt-2">
                        <p className="text-lg font-semibold">Name: {formData.UserName}</p>  
                        <p className="mt-1">Email: {formData.UserEmail}</p>
                    </div>
                ) : (
                <p className="text-gray-500 mt-2">Waiting for user input...</p>
                )}
            
            
                <h2 className="text-xl font-bold mt-4">Last Submitted Entry:</h2>
                
                {/* Check if a submission exists before trying to display it */}
                {lastEntry ? (
                    <div className="p-4 border border-gray-300 rounded mt-2">
                        <p className="text-lg font-semibold">Name: {lastEntry.UserName}</p>  
                        <p className="mt-1">Email: {lastEntry.UserEmail}</p>
                    </div>
                ) : (
                    <p className="text-gray-500 mt-2">No submissions yet.</p>
                )}
            </div>
        </div>
    );
}; export default MultipleInput;