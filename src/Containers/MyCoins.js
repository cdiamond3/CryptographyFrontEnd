import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Card, Container, ButtonGroup, Form } from 'react-bootstrap'


export default function MyCoins({ setMyCoins, myCoins, }) {
    const [coinList, setCoinList] = useState([])
    const dateLabel = new Date()

    useEffect(() => {
        fetch("http://localhost:3000/coin_inputs")
            .then(res => res.json())
            .then(updatedCoins => {
                setCoinList(updatedCoins)
                console.log()
            })
    }, [])

    const deleteCoinTransaction = (id) => {
        const deleteUrl = `http://localhost:3000/coin_inputs/${id}`
        fetch(deleteUrl,
            {
                method: 'DELETE',
            })
            .then((res) => res.json())
            .then(setCoinList(coinList.filter(coin => coin.id !== id)))
    }

   const handleCoinUpdate = (id) => {
    const updateUrl = `http://localhost:3000/coin_inputs/${id}`
    fetch(updateUrl, {
        method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                user_coin_input: myCoins,
                dates: dateLabel
        }),
    })
        .then(res => res.json())
        .then(setMyCoins())
   }

const filterMyCoinsByCoin = () => {
    let sortedCoins = coinList.sort((a, b) => a.user_coin_input.localeCompare(b.user_coin_input))
    sortedCoins = [...sortedCoins]
    setCoinList(sortedCoins)
}
const filterMyCoinsByDate = () => {
    let sortedDateCoins = coinList.sort((a, b) => a.dates.localeCompare(b.dates))
    sortedDateCoins = [...sortedDateCoins]
    setCoinList(sortedDateCoins)
}

return (
    <Container fluid className="myCoins">
        <Header />
        <ButtonGroup className="filterButtons">
            <Button >Filter By Amount</Button>
            <Button onClick={() => filterMyCoinsByDate()} >Filter By Date</Button>
            <Button onClick={() => filterMyCoinsByCoin()}>Filter By Coin</Button>
        </ButtonGroup>
        <div className="my-coins-container">
            {coinList.map((coin) =>
                <Card key={coin.id} className="myCoinsCard">
                    <Card.Text>{coin.user_coin_input}</Card.Text>
                    <Form.Control></Form.Control>
                    <Button onClick={() => handleCoinUpdate(coin.id)}>Edit Transaction</Button>
                    <Button onClick={() => deleteCoinTransaction(coin.id)}>Delete Transaction</Button>
                </Card>)}
        </div>
    </Container>
)
}
