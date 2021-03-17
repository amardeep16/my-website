import React from "react";
import Servicesdata from "./Servicesdata";
import Card from "./Card";
const Service = () => {
    return (
        <>
         <div className="my-5">
               <h1 className="text-center">Our Services</h1>
           </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 max-auto">
                        <div className="row gy-4">
                            { Servicesdata.map((val, ind) => {
                                    return <Card
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    />
                                })}
                        </div>
                
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;