import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.css";

class Brand extends React.Component {
    render() {
        return (
            <div className={"brand"}>
                <div as={Link} to={"/home"}>
                    <span>S</span>
                    <span>V</span>
                </div>
            </div>
        );
    }
}

export default Brand;