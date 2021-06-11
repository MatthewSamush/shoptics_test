import React, {useEffect, useRef, useState} from "react";
import './main.scss';

// For BG SLIDER
import Slider from './components/Slider/Slider.js'
import Slide1 from './assets/image1.jpg';
import Slide2 from './assets/image2.jpg';
import Slide3 from './assets/image3.jpg';
import Slide4 from './assets/image4.jpg';
import Slide5 from './assets/image5.jpg';
import Slide6 from './assets/image6.jpg';

//IMPORTS
import AllDeals from './assets/all-deals.png';
import Logo from './assets/logo.png';
import Product from './assets/product.png';
import Banner from './assets/Free.jpg';

//SVG
import Box from './assets/icons/box.svg';
import Learn from './assets/icons/Lr.svg'
import Cart from './assets/icons/cart.svg'
import Chat from './assets/icons/message.svg'
import Call from './assets/icons/phone.svg'

export const App = () => {

    const content = [
        {
            id: 0,
            name: "Sports & Outdoors",
            content: <img src={Slide1} alt={name}/>
        },
        {
            id: 1,
            name: "Cameras & Photo",
            content: <img src={Slide2} alt={name}/>
        },
        {
            id: 2,
            name: "Jewelry & Watches",
            content: <img src={Slide3} alt={name}/>
        },
        {
            id: 3,
            name: "Industrial & Scientific",
            content: <img src={Slide4} alt={name}/>
        },
        {
            id: 4,
            name: "Electronics",
            content: <img src={Slide5} alt={name}/>
        },
        {
            id: 5,
            name: "Tools & Home Improvement",
            content: <img src={Slide6} alt={name}/>
        }
    ]

    return (
        <div className="mainWrapper">
            <div className="logoSection">
                <div className="logo-section-grid">
                    <div className="grid-section-menu section-left grid-inline">
                        <img src={Logo} alt="Shoptics"/>
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
                        <img src={AllDeals} alt="All-Deals"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainHeader">
                <div className="section-grid-layout">
                    <div className="grid-section-menu grid-inline">
                        <select className="menu-select" name="main-menu" id="menu" defaultValue="Shop for">
                            <option value="Sports">Sports & Outdoors</option>
                            <option value="Cameras">Cameras & Photo</option>
                            <option value="Jewelry">Jewelry & Watches</option>
                            <option value="Industrial">Industrial & Scientific</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Tools">Tools & Home Improvement</option>
                            <option value="Clothing">Clothing, Shoes & Accessories</option>
                            <option value="Other">Everything Else</option>
                        </select>
                    </div>
                    <div className="grid-section-menu grid-inline">
                        <input className="search-input" placeholder="Click to search" type="text"/>
                        <button className="search-button" type="submit">Submit</button>
                    </div>
                    <div className="grid-section-menu grid-inline">
                        <ul className="account-menu">
                            <a href="#account-cart">
                                <li className="acc-menu-item">
                                    <img src={Cart} alt="Your Cart"/>
                                    <p>Your cart</p>
                                </li>
                            </a>
                            <a href="#account-live-chat">
                                <li className="acc-menu-item">
                                    <img src={Chat} alt="Your Cart"/>
                                    <p>Live chat</p>
                                </li>
                            </a>
                            <a href="#account-contacts">
                                <li className="acc-menu-item">
                                    <img src={Call} alt="Your Cart"/>
                                    <p>Contacts</p>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider slides={content}/>
            <div className="contentSection">
                <div className="grid-section grid-inline">

                </div>
                <div className="grid-section grid-inline"></div>
            </div>
        </div>
    )
}
