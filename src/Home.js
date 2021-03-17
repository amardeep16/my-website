import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/soft.jpg"
import Common from "./Common";

const Home = () => {
    return (
        <>
        <Common name="Welcome Thanks For Visiting  "
         imgsrc={web} visit="/service"
          btnName="Get Started"
          brand="AP Group"/>
        </>
        
    )
}
export default Home;