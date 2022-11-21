import React from "react";
import img1 from "../../../assates/icons/clock.svg"
import img2 from "../../../assates/icons/marker.svg"
import img3 from "../../../assates/icons/phone.svg"
import About from "./About/About";
const AboutMore=()=>{
    const aboutMore=[
        {
            title:"Abc",
            img:img1,
            des:"this is so nice .really",
            back:"bg-gradient-to-r from-primary to-secondary"

        },
        {
            title:"XYZ",
            img:img2,
            des:"this is so nice .really",
            back:"bg-black",

        },
        {
            title:"DEF",
            img:img3,
            des:"this is so nice .really",
            back:"bg-gradient-to-r from-primary to-secondary"

        }
    ]
return(
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-5 px-5">
        {
            aboutMore.map(about=> <About
            about={about}
            
            ></About> )
        }

    </div>
)
}
export default AboutMore