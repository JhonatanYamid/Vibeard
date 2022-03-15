const AvailableHours = ({ hour }) => {
    var originalHour = String(hour.toFixed(2)).split('.')
    var hours = (originalHour[0].length === 1) ? 0 + originalHour[0] : originalHour[0]
    var minutes = (originalHour[1] === '50') ? '30' : '00'
    var formatedHour = hours + ':' + minutes
    return (
        <div className="flex justify-center items-center shadow border rounded h-12 w-[22%]">
            {formatedHour} {(hour < 12) ? 'AM' : 'PM'}
        </div>
    );
}

export default AvailableHours;