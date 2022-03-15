import { Link } from 'react-router-dom'
const LoginForm = () => {
    const login = e => {
        e.preventDefault();
        console.log('hola mund')
    }
    return (
        <>
            <h1 className="text-4xl font-semibold ">Hola!</h1>
            <h2 className='text-sm font-normal  my-3'>Ingresa con tu cuenta de Vibeard para continuar</h2><br />
            <form className="flex flex-col md:w-1/2 space-y-3" onSubmit={login}>
                <input type="text" placeholder="Email" name="email" className='input-field' />
                <input type="password" placeholder="Contraseña" name="password" className='input-field' />
                <button className="btn-primary" type="submit">Ingresar</button>
            </form>
            <div className='text-sm font-light justify-center p-3'>
                O ingresa con
            </div>
            <div className="flex flex-row justify-around items-center w-1/2 space-x-3 pb-5">
                <div className="flex justify-center items-center shadow border rounded h-12 w-1/3">
                    <svg className='w-8' viewBox="0 0 25 25" role="img" fill="#3b5998" ><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </div>
                <div className="flex justify-center items-center shadow border rounded h-12 w-1/3 ">
                    <svg className='w-10' viewBox="0 0 27 27" role="img" fill="#008000" ><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" /></svg>
                </div>
                <div className="flex justify-center items-center shadow border rounded h-12 w-1/3">
                    <svg className='w-8' viewBox="49.605 0 2834.65 2834.65" ><circle cx="1466.93" cy="1417.324" r="1417.324" fill="#C13584" /><path d="M1892.128 726.379h-850.395c-147.639 0-265.749 118.11-265.749 265.749v850.394c0 147.639 118.11 265.748 265.749 265.748h850.395c147.638 0 265.749-118.109 265.749-265.748V992.127c0-147.638-118.112-265.748-265.749-265.748zm76.772 159.449h29.527V1122.048h-236.221v-236.22H1968.9zm-696.851 389.765c41.338-59.056 118.11-100.395 194.882-100.395s153.544 41.339 194.882 100.395c29.527 41.338 47.244 88.582 47.244 141.732 0 135.826-112.205 242.126-242.126 242.126-129.922 0-242.126-106.299-242.126-242.126-.001-53.15 17.716-100.394 47.244-141.732zm750.001 566.929c0 70.867-59.056 129.922-129.922 129.922h-850.395c-70.866 0-129.922-59.055-129.922-129.922v-566.929h206.693c-17.717 41.338-29.527 94.488-29.527 141.732 0 206.693 171.26 377.953 377.953 377.953s377.953-171.26 377.953-377.953c0-47.244-11.812-100.395-29.527-141.732h206.692l.002 566.929z" fill="#fff" /></svg>
                </div>
            </div>
            <div className='flex flex-col text-sm font-normal  justify-center items-center'>
                <p>¿Primera vez en Vibeard?</p>
                <p ><Link to={'/register'} className="underline font-semibold">Crea una cuenta</Link></p>
            </div>
        </>
    );
}

export default LoginForm;