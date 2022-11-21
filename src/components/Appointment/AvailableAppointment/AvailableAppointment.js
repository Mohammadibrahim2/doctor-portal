import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import AppointmentOption from "./AppointmentOption/AppointmentOption";
import BookingModal from "./AppointmentOption/BookingModal/BookingModal";

const AvailableAppoinment=({selectedDate})=>{
    const [appointmentOption,setAppointmentOption]=useState([])
    
    const[treatment,setTreatment]=useState(null)
   
useEffect(()=>{

    fetch('appointmentOptions.json')
    .then(res=>res.json())
    .then(data=>setAppointmentOption(data))



},[])
return(
    <div className="my-10 ">
        <p className="text-secondary font-bold">Available Appointments on :{format(selectedDate,'PP')}</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5 p-10">
            {
                appointmentOption.map(option=><AppointmentOption
                option={option}
                key={option._id}
                setTreatment={setTreatment}
                
                ></AppointmentOption>)
            }

        </div>
        {treatment && 
         <BookingModal treatment={treatment}
         selectedDate={selectedDate}
         setTreatment={setTreatment}
         
         ></BookingModal>
        }
       
    </div>
)









}
export default AvailableAppoinment