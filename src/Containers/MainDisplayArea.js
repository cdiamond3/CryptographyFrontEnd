import React from 'react'
import CoinCards from '../Components/CoinCards'

export default function MainDisplayArea({ allCoinData, handleChange, handleClick, setMyCoins, myCoins }) {


    const renderCoinCard = () => {
        return allCoinData.map(coin => {
            return <CoinCards coin={coin} key={coin.name}  handleChange={handleChange} handleClick={handleClick} setMyCoins={setMyCoins} myCoins={myCoins}/>
        })
    }

    return (
        <div>
            {renderCoinCard()}
        </div>
    )
}
