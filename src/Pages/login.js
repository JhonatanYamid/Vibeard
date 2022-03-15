import LoginForm from "../Components/loginForm";

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen items-center justify-center p-7 md:p-5 md:pl-0">
            <div className="flex justify-center">
                <img src="images/logo_blanco.png" className="w-3/5" alt="logo_blanco" />
            </div>
            <div className="flex flex-col bg-white rounded-lg mt-8 md:mt-0 justify-center items-center w-full md:w-[80%] h-[70%] md:h-full space-y-3 text-gray-700">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;