const ItemBooked = () => {
    return ( 
        <div className="flex flex-row w-full justify-between items-center text-slate-800">
              <img src="images/perfil.jpg" className="w-14 h-14 object-cover rounded-full object-center" alt="foto_perfil" />
            <div>
                <p className="font-bold text-md">Pepito perez</p>
                <p className="font-medium text-xs">13 Mar 2022 - 02:00 PM</p>
            </div>
            <p className="text-emerald-500">Activa</p>
        </div>
     );
}
 
export default ItemBooked;