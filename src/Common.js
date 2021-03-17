import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/ap.jpg"

const Common = (props) => {
    return (
        <>
        <section id="header" className="df-flex align-item-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-12 max-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0  order-2 order-lg-1">
                        <h1> {props.name}   
                           <strong className="brand-name">{props.brand}</strong></h1>
                        <h4 className="my-3">
                            We are the group of talented Devloper
                        </h4>
                        <div className="mt-3">
                            <NavLink to={props.visit}
                             className="btn-get-started">{props.btnName}</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Common;