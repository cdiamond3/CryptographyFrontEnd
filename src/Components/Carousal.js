import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Carousal() {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.independent.co.uk/2021/07/01/10/dogecoin%20price%20elon%20musk%20doge.jpg?width=982&height=726&auto=webp&quality=75"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://photographylife.com/wp-content/uploads/2020/03/Dan-Ballard-Landscapes-6.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://photographylife.com/wp-content/uploads/2020/03/Dan-Ballard-Landscapes-6.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
