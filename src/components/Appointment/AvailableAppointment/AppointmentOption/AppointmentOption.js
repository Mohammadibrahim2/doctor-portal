import React, { useState } from "react";
import Button from "../../../Button/Button";
const AppointmentOption = ({ option,setTreatment }) => {
    const { name, slots } = option
    
    return (
        <div>
            <div className="card  bg-white text-black shadow-xl">
                <div className="card-body tect-center">
                    <h2 className=" text-secondary text-xl font-semibold">{name}</h2>
                    <h1 className="text-semibold">{slots.length > 0 ? slots[0] : "Try Another Day"}</h1>
                    <h1 className="text-semibold">{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available </h1>
                    <div className="card-actions justify-center">
                        <div className="card-actions justify-end">
                            <label htmlFor="booking-modal"
                            disabled={slots.length===0}
                           
                             className="btn btn btn-secondary text-white"
                             onClick={()=>setTreatment(option)}
                             >Book Appoinment</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )



}
export default AppointmentOption