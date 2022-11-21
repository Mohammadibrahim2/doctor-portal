import React from "react";
import testimonial from "../../../assates/icons/quote.svg"
import testiImg from "../../../assates/images/people1.png"
import SingleTesimonial from "./SingleTestimonial/SingleTesimonial";

const Testimonial=()=>{

    const testimonialData=[
        {
            id:1,
            name:"Winson harry",
            img:testiImg,
            city:"California",
            details:"akone onk review dete hobe cause amder site tar propurarity baraite hobe ..so base base review den .apnerder sobaik congratuse"
        },
        {
            id:2,
            name:"Winson harry",
            img:testiImg,
            city:"California",
            details:"akone onk review dete hobe cause amder site tar propurarity baraite hobe ..so base base review den .apnerder sobaik congratuse"
        },
        {
            id:3,
            name:"Winson harry",
            img:testiImg,
            city:"California",
            details:"akone onk review dete hobe cause amder site tar propurarity baraite hobe ..so base base review den .apnerder sobaik congratuse"
        }
    ]
    return(
        <div className="w-full">
            <div className="flex flex-row justify-between w-full px-10">
                <div className="text-left">
                    <h1 className="text-secondary font-semibold text-xl">Testimonial</h1>
                    <p className="text-black text-3xl">What our patiants says</p>
                </div>
                <div>
                    <img src={testimonial} alt="" className="w-[150px]"></img>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-10">
                {
                testimonialData.map(testyData=>
                <SingleTesimonial
                testyData={testyData}
                key={testyData.id}
                ></SingleTesimonial>)
                }
            </div>
        </div>
    )



}
export default Testimonial