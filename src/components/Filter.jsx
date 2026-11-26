const Filter = () => {
    return (
        <ul className="flex-col text-lg font-semibold">
            <li className="hover:bg-blue-200 hover:text-white w-auto rounded border border-blue-300">All</li>
            <li className="hover:bg-blue-200 hover:text-white w-auto rounded border border-blue-300">Complete</li>
            <li className="hover:bg-blue-200 hover:text-white w-auto rounded border border-blue-300">Active</li>
        </ul>
    );
}; export default Filter;