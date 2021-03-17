import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/DSC_0602.JPG"
import Common from "./Common";
import Sdata from "./Sdata";
import Card from "./Card";
const About = () => {
    return (
        <>
        <div className="my-5">
               <h1 className="text-center">Our Team</h1>
           </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 max-auto">
                        <div className="row gy-4">
                            { Sdata.map((val, ind) => {
                                    return <Card
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    />
                                })}
                            

                        </div>
                =
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;