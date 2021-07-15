import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Carousal() {
    return (
        <div className="carousel">
            <Carousel >
                <Carousel.Item >
                    <img
                        className="carouselImage"
                        src="https://i.redd.it/0beov6uj6cz61.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='cText'>
                        <h3>WHO LET THE DOGES OUT?!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="carouselImage"
                        src="https://crixto.com/wp-content/uploads/2020/12/Review-of-Ethereum-Crixto.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='cText'>
                        <h3>Can ETH rebound?!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carouselImage"
                        src="https://cdn.wallpapersafari.com/60/29/LPcCRg.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='cText'>
                        <h3>How Long Will The Crash Go?!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
