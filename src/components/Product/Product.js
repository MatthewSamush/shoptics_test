import React from "react";
import ProductImg from "../../assets/product.png"

export default function Product() {
    return (
        <div className="product-block">
            <img src={ProductImg} alt="Product 1"/>
            <p className="product-description">SOG Specialty Knives & Tools Voodoo Hawk TomahawkSOG Specialty Knives & Tools Voodoo Hawk Tomahawk</p>
            <h3 className="product-price">$9.99</h3>
            <p className="product-new-text">New Product</p>
        </div>
    )
}