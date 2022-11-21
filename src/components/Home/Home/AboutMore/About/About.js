import React from "react";
const About = ({about}) => {
    const {title,des,img,back}=about

    return (
        <div>
            <div className={`card text-White text-center shadow-xl ${back} py-5`}>
                <div className="card-body text-center flex lg:flex-row felx-col items-center justify-evenly ">
                    <img className="w-10" src={img} alt=""></img>
                    <div>
                    <h2 className=" text-center">{title}</h2>
                    <p className="text-center">{des}</p>
                    </div>
                   
                </div>
            </div>
        </div>

    )

}
export default About