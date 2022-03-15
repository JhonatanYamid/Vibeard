import Appointment from "../Components/appointment";
import BookedAppointment from "../Components/bookedAppointment";
import MobileHeader from "../Components/mobileHeader";
import Shop from "../Components/shop";
import Sidebar from "../Components/sidebar";
const Home = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen w-screen items-center md:items-center justify-left">
            <div className="h-auto w-[8%] hidden md:block">
                <Sidebar />
            </div>
            <div className="flex md:hidden h-[12%] pt-3 w-full">
                <MobileHeader />
            </div>
            <div className="flex flex-col w-full md:w-[91%] h-[88%] md:h-[95%] bg-indigo-50 rounded-b-none rounded-t-2xl md:rounded-2xl px-5 md:px-14 py-7 font-bold text-slate-900">
                <div className="flex flex-row justify-center md:justify-between items-center h-[10%] pb-7">
                    <img src="images/logo_negro.png" className="hidden md:block w-14" alt="logo_negro" />
                    <div className="flex flex-row items-center space-x-3">
                        <img src="images/perfil.jpg" className="w-10 h-10 md:w-7 md:h-7 object-cover rounded-full object-center shadow-md" alt="foto_perfil" />
                        <div className="flex flex-row items-center space-x-1">
                            <p className="text-lg">Hola, Jhonatan!</p>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className="flex flex-row space-x-5 h-[90%]">
                    <div className="flex flex-col w-full md:w-1/2 h-full">
                        <h1 className="h-[8%] flex items-center text-sm">Reservar Cita</h1>
                        <div className="rounded-2xl md:shadow-2xl h-[76%] md:h-[92%] md:bg-white">
                            <Appointment />
                        </div>
                        <h1 className="h-[5%] flex items-center text-sm md:hidden">Mis Citas</h1>
                        <div className="shadow-2xl h-[14%] bg-white block md:hidden rounded-xl">
                            <BookedAppointment />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-full hidden md:block">
                        <h1 className="h-[8%] flex items-center text-sm">Catálogo</h1>
                        <div className="flex rounded-lg shadow-2xl bg-white h-[63%]">
                            <Shop />
                        </div>
                        <h1 className="h-[10%] flex items-end text-sm pb-1">Mis Citas</h1>
                        <div className="rounded-lg shadow-2xl h-[19%] bg-white">
                            <BookedAppointment />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;