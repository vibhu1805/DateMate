import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Find from "../components/Find";
import Countdown from "../components/Countdown";
import Steps from "../components/Steps";
const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Find/>
            <Countdown/>
            <Steps/>
            
            
        </div>
    )
}
export default Home;