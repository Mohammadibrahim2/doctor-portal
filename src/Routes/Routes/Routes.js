import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../components/Appointment/Appointment/Appointment";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login/Login";
import Footer from "../../components/Shared/Footer/Footer";
import Main from "../../layout/Main";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
       children:[


            {
                path:"/",
                element:<Home></Home>
            },
            {
               path:"/appointment",
               element:<Appointment></Appointment>
            },
            {
                path:"/login",
                element:<Login></Login>
             }
        ]
    }
])