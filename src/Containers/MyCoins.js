import React, { useEffect, useState }  from 'react'
import Header from '../Components/Header'
import { Button } from 'react-bootstrap'

export default function MyCoins() {

    const [updatedCoinList, setUpdatedCoinsList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/coin_inputs")
          .then(res => res.json())
          .then(updatedCoins => {
            setUpdatedCoinsList(updatedCoins)
        })
    }, [])

    return (
        <div className="my-coins-container">
            <Header />
            {updatedCoinList.map((coin) => <p>{coin.user_coin_input}</p>, <Button> X </Button> )}
        </div>
    )
}
