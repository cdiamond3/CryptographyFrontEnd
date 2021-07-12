import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default function CoinCards({ coin, handleClick, handleChange, setMyCoins, myCoins }) {

    const [isFlipped, setIsFlipped] = useState(false)

    const flipCard = (e) => {
        e.preventDefault()
        setIsFlipped(!isFlipped)
        console.log("clicked")
    }

    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

                <CardFront flipCard={flipCard} coin={coin} handleClick={handleClick} handleChange={handleChange} setMyCoins={setMyCoins} myCoins={myCoins}/>
                
                <CardBack flipCard={flipCard} coin={coin} handleClick={handleClick} handleChange={handleChange} setMyCoins={setMyCoins} myCoins={myCoins}/>
                
            </ReactCardFlip>
        </div>
    )
}
