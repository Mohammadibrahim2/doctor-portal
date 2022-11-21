import React, { useState } from "react";
import AppointmentBannar from "../AppointmentBannar/AppointmentBannar";
import AvailableAppoinment from "../AvailableAppointment/AvailableAppointment";
const Appointment=()=>{
    const [selectedDate,setSelectedDate]=useState(new Date())

return(
    <div>
        <AppointmentBannar
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate}
        ></AppointmentBannar>

        <AvailableAppoinment  
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate}
        
        ></AvailableAppoinment>
    </div>
)

}
export default Appointment