import React from "react";
const SingleTesimonial = ({ testyData }) => {

    const { img, name, city, details } = testyData

    return (
        <div>
            <div className="card bg-white text-black shadow-xl  border border-secondary ">
                <div className="card-body text-left">
                    <p className="card-title">{details}</p>
                    
                </div>
                <div className="flex flex-row justify-start mb-5 mx-5">
                <div className="avatar">
                    <div className="w-16  rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="ml-5">
                    <h1>{name}</h1>
                    <h2>{city}</h2>

                </div>
                </div>
            </div>

        </div>
    )
}
export default SingleTesimonial