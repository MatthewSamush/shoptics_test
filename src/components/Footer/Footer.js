import React from "react";

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="grid-section footer-grid-width">
                <div className="grid-section-left">
                    <div className="newsletter-block">
                        <label>
                            <h3 className="newsletter-title">Sign up for our newsletter</h3>
                            <input className="newsletter-input" type="text"/>
                            <button className="search-button newsletter-button" type="submit">Submit</button>
                        </label>
                        <ul className="footer-learn-menu">
                            <h3 className="newsletter-title">Learn</h3><br/>
                            <li className="footer-learn-item">About Us</li>
                            <li className="footer-learn-item">Policies</li>
                        </ul>
                    </div>
                </div>
                <div className="grid-section-right">
                    <ul className="footer-contact-menu">
                        <h3 className="newsletter-title">Contact Information</h3><br/>
                        <p className="footer-contact-desc">
                            Toll-Free: 123-456-7890 <br/>
                            Intl.: 123-456-7890 <br/>
                            Fax: 123-456-7890 <br/>
                            Email: email@xxx.com
                        </p>
                    </ul>
                    <ul className="footer-work-menu">
                        <h3 className="newsletter-title">Hours of Operation</h3><br/>
                        <p className="footer-work-desc">
                            7AM - 8PM CST Mon - Fri <br/>
                            9AM - 5PM CST Sat - Sun
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    )
}