import React from "react";
import Bannarimg from "../../../assates/images/chair.png"
import Button from "../../../Button/Button";
const HomeBannars = () => {


    return (
        <div>
            <div className="hero heros text-black ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Bannarimg} className=" md:w-1/2  w-fullrounded-lg shadow-2xl" />
                    <div className="text-left">
                        <h1 className="text-5xl font-bold">
                            
                            Wellcome to Doctor protal
                        </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    )



}
export default HomeBannars