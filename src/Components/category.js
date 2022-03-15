const Category = () => {
    return (
        <div className='flex flex-col justify-center items-center h-16 w-16 mx-6 bg-red-200 rounded-full'>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <p className='font-semibold text-[0.6rem] text-center'>
                Cuidado Capilar
            </p>
        </div>
    );
}

export default Category;