import React, {useEffect, useRef, useState} from "react";
import Card from "./SliderCard";

const RadioButtons = ({slides, onChange, currentElement}) => {

    return (
        <div className="radioButtonBox">
                {slides.map(slide =>
                    <div className="radioSelector">
                    <label className="radioLabels">
                    <input key={slide.id} value={slide.id} checked={currentElement === slide.id} onChange={onChange} type="radio"
                           className="radioButton radioDisplayNone"/>
                           <span className="radioValueText">{slide.id + 1}</span>
                    </label>
                    </div>
                )}
        </div>
    )
}

export default function Slider(slides) {

    const cards = slides.slides;

    const slidesCount = cards.length
    let [currentCard, setCurrentCard] = useState(0);
    const cardBox = useRef();

    useEffect(() => {
        cardBox.current.style.marginLeft = -(100 * (currentCard + 1)) + "%";
    }, [currentCard]);

    const handleRadioChange = (event) => {
        setCurrentCard(parseInt(event.target.value));
    }
    const handleNextClick = () => {
        if (currentCard === slidesCount - 1) {
            setCurrentCard(0);
        } else {
            setCurrentCard(currentCard + 1);
        }
    }
    const handleBackClick = () => {
        if (currentCard === 0) {
            setCurrentCard(slidesCount - 1);
        } else {
            setCurrentCard(currentCard - 1);
        }
    };



    return (
        <>
            <div className="sliderWrapper">
                <div className="sliderWrapper__contentBox">
                    <div ref={cardBox} className="sliderWrapper__contentSlidesBox">
                            <Card key={cards.length-1} content={cards[cards.length-1].content} name={cards[cards.length-1].name}/>
                                {cards.map(card => (
                                    <Card
                                        key={card.id}
                                        content={card.content}
                                    />
                                ))}
                            <Card key={0} content={cards[0].content} name={cards[0].name}/>
                    </div>
                    <div className="welcomeTextBlock">
                        <p className="first-line">Get The Best</p>
                        <p className="second-line">PERFOMANCE <br/> SUNGLASSES</p>
                        <p className="shop-now">SHOP NOW</p>
                    </div>
                    <div className="slider-navigation">
                        <div className="sliderWrapper__buttonBox">
                            <button className="sliderWrapper__button" onClick={handleBackClick}>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 3.24249e-05L9 11.2L9 14L-3.41715e-07 7.00003L9 3.24249e-05Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div className="radioWrapper">
                            <RadioButtons slides={cards} onChange={handleRadioChange} currentElement={currentCard}/>
                        </div>
                        <div className="sliderWrapper__buttonBox" onClick={handleNextClick}>
                            <button className="sliderWrapper__button">
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-2.44784e-06 14L-4.89567e-07 2.8L0 0L9 7L-2.44784e-06 14Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}