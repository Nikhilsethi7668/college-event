import { Route, Routes } from "react-router-dom";
import React from 'react'
//import App from "../App";
import About from "../Components/About/About";
import Login from "../Components/Login/Login";
import Events from "../Components/Events/Events";
import Gallary from "../Components/Gallary/gallary";
import Winners from "../Components/winners/Winners";
import Payment from "../Components/Payments/Payment";
import Attendance from "../Components/Attendance/Attendance";
import Calander from "../Components/Calander/Calander";
import Communicate from "../Components/Communicate/Communicate";
import Home from "../Components/Home/Home";
function Routing() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/payments/:option" element={<name />} />

            <Route path="/gallary" element={<Gallary />} />
            <Route path="/winners" element={<Winners />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/payments/:option" element={<dc />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/calander" element={<Calander />} />
            <Route path="/communicate" element={<Communicate />} />


        </Routes>
    )
}

export default Routing