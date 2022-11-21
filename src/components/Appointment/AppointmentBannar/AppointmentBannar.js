import React, { useState } from "react";
import bannar from  "../../assates/images/chair.png"
import { DayPicker } from 'react-day-picker';
// import { format } from 'date-fns';

const AppointmentBannar = ({selectedDate,setSelectedDate}) => {



    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannar} className="lg:w-1/3 w-full  rounded-lg shadow-2xl ml-10" />
                <div className="text-black" >
                    <DayPicker
                    mode="single"
                    onSelect={setSelectedDate}
                    selected={selectedDate}
                    />
                </div>
               
                </div>
                
            </div>
        </div>
    )

}
export default AppointmentBannar