const InputSearch = () => {
    return (  
        <div className="flex flex-row w-full h-3/4">
                <input
                    className="shadow appearance-none border rounded-full rounded-r-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Encuentra tratamientos, minoras y más" />
                <button
                    className='rounded-full rounded-l-none bg-indigo-500 text-white px-2 shadow' >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
    );
}
 
export default InputSearch;