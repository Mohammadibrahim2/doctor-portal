import React from "react";
import DoctorUncle from "../Services/Services/MorepartOfservice/Moreserviceoption";
import Services from "../Services/Services/Services";
import AboutMore from "./AboutMore/AboutMore";
import Contact from "./Contact/Contact";
import "./Home.css"
import HomeBannars from "./HomeBannars/HomeBannars";
import HomeBannaer from "./HomeBannars/HomeBannars";
import Testimonial from "./Testimonials/Testimonial";

const Home = () => {

    return (
        <div className="home">
            <HomeBannars></HomeBannars>
            <AboutMore></AboutMore>
            <Services></Services>
            <DoctorUncle></DoctorUncle>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    )
}
export default Home;