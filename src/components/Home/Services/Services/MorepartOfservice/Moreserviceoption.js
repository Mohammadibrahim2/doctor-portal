import React from "react";
import "./Morepart.css"
import doctorUncle from "../../../../assates/images/doctor-small.png"
import Button from "../../../../Button/Button";

const DoctorUncle = () => {

    return (
        <div>

            <div className="hero  doctor my-20 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctorUncle} className=" md:block hidden mt-[-100px] rounded-lg shadow-2xl" />
                    <div className="text-left">
                        <h1 className="text-secondary my-5 font-semibold">Appointment</h1>
                        <h1 className="text-3xl font-bold text-white">Make an appoinment Today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <Button></Button>
                    </div>
                </div>
            </div>
        </div>

    )


}
export default DoctorUncle