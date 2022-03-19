
const Barber = ({id, updateBarberSelected, barberSelected}) => {
    let active = (id === barberSelected) ? 'border-4 border-indigo-300' : ''
    return (
        <div className="flex flex-col items-center">
            <button id={id} onClick={() => updateBarberSelected(id)} className={active+" hover:border-4 hover:border-indigo-300 rounded-full"}>
                <img src="images/perfil.jpg" className="w-16 h-16 md:w-12 md:h-12  object-cover rounded-full object-center" alt="foto_perfil" />
            </button>
            <p className="text-[0.45rem] pt-1 font-bold md:text-white">Pepito Perez</p>
        </div>
    );
}

export default Barber;