import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/DSC_0602.JPG"
const Card = (props) => {
    return (
        <>
          <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
            </div>
                   
        </>
    )
}
export default Card;