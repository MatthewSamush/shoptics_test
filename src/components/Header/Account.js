import Cart from "../../assets/icons/cart.svg";
import Chat from "../../assets/icons/message.svg";
import Call from "../../assets/icons/phone.svg";
import React from "react";

export default function Account() {
    return (
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
    )
}