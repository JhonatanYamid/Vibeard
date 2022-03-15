import ItemBooked from "./itemBooked";

const BookedAppointment = () => {
    return ( 
        <div className="space-y-4 px-7 py-3 md:py-2 h-full overflow-y-scroll booked">
            <ItemBooked />
            <ItemBooked />
        </div>
     );
}
 
export default BookedAppointment;