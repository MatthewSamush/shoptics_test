import React from "react";
import Banner from "../../assets/Free.jpg";
import Product from "./Product";
import ProductImg from "../../assets/product.png"

export default function ProductSection() {
    return (
        <div className="contentSection">
            <div className="grid-section-right">
                <ul className="sort-menu">
                    <a href="#new-i" className="sort-item-link">
                        <li className="sort-menu-item">New items</li>
                    </a>
                    <a href="#popular-i" className="sort-item-link">
                        <li className="sort-menu-item">Popular items</li>
                    </a>
                    <a href="#top-i" className="sort-item-link">
                        <li className="sort-menu-item">Top Rated</li>
                    </a>
                </ul>
            </div>
            <div className="grid-section-left">
                <ul className="category-menu">
                    <p>Shop by Category</p>
                    <br/>
                    <li className="category-menu-item">Man</li>
                    <li className="category-menu-item">Woman</li>
                    <li className="category-menu-item">Riflescopes</li>
                    <li className="category-menu-item">Other popular stuff</li>
                    <br/>
                    <p>Shop by Brand</p>
                    <br/>
                    <li className="category-menu-item">Barska</li>
                    <li className="category-menu-item">TRIJICON</li>
                    <li className="category-menu-item">Safariland</li>
                    <li className="category-menu-item">Bushnell</li>
                    <br/>
                    <p>Shop by Department</p>
                    <br/>
                    <li className="category-menu-item">Sport & Outdoors</li>
                    <li className="category-menu-item">Electronics</li>
                    <li className="category-menu-item">Jewelry & Watches</li>
                    <li className="category-menu-item">Industrial & Scientific</li>
                    <br/><br/>
                    <img src={Banner} alt="Free Banner"/>
                </ul>
                <div className="product-section">
                    <div className="grid-section-right">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <div className="grid-section-right">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <div className="grid-section-right">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <div className="grid-section-right">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
    )
}
