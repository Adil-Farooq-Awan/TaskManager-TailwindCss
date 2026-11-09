const MapToday = ({ data }) => {
    return (
    <>
      <h1 className="rounded bg-blue-900 text-white text-center p-4">.map</h1>
        {data.map((item) => ( 
            <div key={item.index} className="p-4 border-b border-gray-300">
            <p className="text-lg font-semibold">Name: {item.UserName}</p>
            <p className="mt-4">Email: {item.UserEmail}</p>
            </div>
        ))}
    </>);
}; export default MapToday;