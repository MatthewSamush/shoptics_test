import React from "react";

// PNG
import AllDeals from "../../assets/all-deals.png";
import Logo from "../../assets/logo.png";
// SVG
import Box from "../../assets/icons/box.svg";
import Learn from "../../assets/icons/Lr.svg";

export default function Delivery(){
    return(
        <div className="logoSection">
            <div className="logo-section-grid">
                <div className="grid-section-menu section-left grid-inline">
                    <a href="#home">
                    <img src={Logo} alt="Shoptics"/>
                    </a>
                </div>
                <div className="grid-section-menu">
                    <div className="section-2-col-1 grid-inline">
                        <img src={Box} alt="Delivery"/>
                    </div>
                    <div className="section-2-col-2 grid-inline">
                        <h2 className="free-text">Free shipping on orders over $29.99</h2>
                    </div>
                    <div className="section-2-col-3 grid-inline">
                        <a href="#abot-free-shipping">Learn more <img src={Learn} alt=""/></a>
                    </div>
                </div>
                <div className="grid-section-menu section-right">
                    <div className="section-3-col-1 grid-inline">
                        <a href="#abot-best-deals">
                            <img src={AllDeals} alt="All-Deals"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}