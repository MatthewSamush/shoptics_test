//IMPORTS
import React, {useEffect, useRef, useState} from "react";
import './main.scss';

import Slide1 from './assets/image1.jpg';
import Slide2 from './assets/image2.jpg';
import Slide3 from './assets/image3.jpg';
import Slide4 from './assets/image4.jpg';
import Slide5 from './assets/image5.jpg';
import Slide6 from './assets/image6.jpg';

// Components

import Slider from './components/Slider/Slider.js'
import DeliveryHeader from './components/Header/Delivery'
import AccountHeader from './components/Header/Account'

import Banner from './assets/Free.jpg'
import ProductSection from "./components/Product/ProductSection";
import Footer from "./components/Footer/Footer";
import CopyRight from "./components/Footer/CopyRight";

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
            <DeliveryHeader/>
            <AccountHeader/>
            <Slider slides={content}/>
            <ProductSection/>
            <Footer/>
            <CopyRight/>
        </div>
    )
}
