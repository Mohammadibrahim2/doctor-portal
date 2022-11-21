import React from "react";
import serviceImg1 from "../../../assates/images/cavity.png"
import serviceImg2 from "../../../assates/images/fluoride.png"
import serviceImg3 from "../../../assates/images/whitening.png"
import servicebabyimg from "../../../assates/images/treatment.png"
import Service from "./Service/Service";
import Button from "../../../Button/Button";
const Services = () => {
    const serviceoptions = [
        {
            id: 1,
            name: "froride treatment",
            img: serviceImg2,
            details: "onk kicu akon liklam navigator..pore likbo akon time navigator..so bye bye tata."

        },
        {
            id: 2,
            name: "cavity filling",
            img: serviceImg1,
            details: "onk kicu akon liklam navigator..pore likbo akon time navigator..so bye bye tata."

        },
        {
            id: 3,
            name: "teeth whitning",
            img: serviceImg3,
            details: "onk kicu akon liklam navigator..pore likbo akon time navigator..so bye bye tata."

        }
    ]

    return (
        <div className="my-7">
            <h1 className="text-secondary font-bold text-xl mt-5">Our services
            </h1>
            <h3 className="text-black text-4xl">Services we provide</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-5 my-20">
                {
                    serviceoptions.map(service => <Service
                        service={service}
                        key={service.id}

                    ></Service>)
                }
            </div>
            <div className="my-20">
                <div className="hero  bg-white text-black  ">
                    <div className="hero-content flex-col lg:flex-row justify-center">
                        <img src={servicebabyimg} className=" h-[576px] w-[458px]  md:mr-20 rounded-lg shadow-2xl " />
                        <div className="text-left ">
                            <h1 className="text-5xl font-bold ">Exceptional dental care,on your terms</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <Button></Button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>

    )

}
export default Services