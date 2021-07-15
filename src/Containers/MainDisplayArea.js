import React from 'react'
import CoinCards from '../Components/CoinCards'
import Aos from 'aos'

export default function MainDisplayArea({ allCoinData, handleChange, handleClick, setMyCoins, myCoins }) {

    window.addEventListener("load", function () {
        Aos.init();
    })

    const renderCoinCard = () => {
        return allCoinData.map(coin => {
            return <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="600">
                <CoinCards coin={coin} key={coin.name} handleChange={handleChange} handleClick={handleClick} setMyCoins={setMyCoins} myCoins={myCoins} /></div>
        })
    }

    return (
        <div>
            <h1 className="mainDisplayTitle"> Top 10 Coins </h1>
            {renderCoinCard()}
        </div>
    )

}
