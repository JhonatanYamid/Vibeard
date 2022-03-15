import Sidebar from "../Components/sidebar";

const Register = () => {
    return ( 
        <div className="flex flex-row items-center justify-center h-screen p-4 pl-0">
            <div>
                <Sidebar />
            </div>
            <div className="w-full h-full bg-white rounded-2xl shadow-md p-7">
                <h1>hola mundo</h1>
                <h1>hola undo</h1>
            </div>
        </div>
     );
}
 
export default Register;