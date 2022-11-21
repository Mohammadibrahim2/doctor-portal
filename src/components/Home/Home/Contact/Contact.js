import React from "react";
import Button from "../../../Button/Button";
import "./Contact.css"

const Contact=()=>{

return(
    <div className="contact py-7">
        <div>
            <h1 className="text-secondary font-semibold text-xl">Contact us</h1>
            <h2 className="text-white text-3xl my-5">Stay connected with us</h2>
        </div>
        <div className="md:px-0 px-5 ">
        <input type="text" placeholder="Type here" className="input input-bordered md:w-1/3 w-full" /><br/>
        <input type="text" placeholder="Type here" className="input input-bordered md:w-1/3 w-full mt-5" /><br/>
        <textarea className="textarea textarea-bordered md:w-1/3 w-full my-5" placeholder="write your opinion"></textarea><br/>
        <Button ></Button>
        </div>
    </div>
)

}
export default Contact