import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Button, Card, Container, ButtonGroup, Form } from 'react-bootstrap'


export default function MyCoins() {

    const [transactionList, setTransactionList] = useState([])
    const [coinUpdate, setCoinUpdate] = useState("")


    useEffect(() => {
        fetch("http://localhost:3000/coin_inputs")
            .then(res => res.json())
            .then(updatedCoins => {
                setTransactionList(updatedCoins)
                console.log()
            })
    }, [])

    const handleTransactionUpdate = (e) => {
        setCoinUpdate(e.target.value)
    }

    const deleteCoinTransaction = (id) => {
        const deleteUrl = `http://localhost:3000/coin_inputs/${id}`
        fetch(deleteUrl,
            {
                method: 'DELETE',
            })
            .then((res) => res.json())
            .then(setTransactionList(transactionList.filter(coin => coin.id !== id)))
    }

    const handleCoinUpdate = (id) => {
        const updateUrl = `http://localhost:3000/coin_inputs/${id}`
        fetch(updateUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_coin_input: coinUpdate,
            }),
        })
        .then(window.location.reload());
    }

    const filterMyCoinsByCoin = () => {
        let sortedCoins = transactionList.sort((a, b) => a.name.localeCompare(b.name))
        sortedCoins = [...sortedCoins]
        setTransactionList(sortedCoins)
    }
    const filterMyCoinsByDate = () => {
        let sortedDateCoins = transactionList.sort((a, b) => a.dates.localeCompare(b.dates))
        sortedDateCoins = [...sortedDateCoins]
        setTransactionList(sortedDateCoins)
    }

    const filterMyCoinsByAmount= () => {
        let sortedAmountCoins = transactionList.sort((a, b) => a.user_coin_input.localeCompare(b.user_coin_input))
        sortedAmountCoins = [...sortedAmountCoins]
        setTransactionList(sortedAmountCoins)
    }


    return (
        <Container fluid className="myCoins">
            <Header />
            <h1> My Portfolio! </h1>
            <ButtonGroup className="filterButtons">
                <Button onClick={() => filterMyCoinsByDate()} >Filter By Date</Button>
                <Button onClick={() => filterMyCoinsByCoin()}>Filter By Coin</Button>
                <Button onClick={() => filterMyCoinsByAmount()}>Filter By Amount</Button>
            </ButtonGroup>
            <div className="my-coins-container">
                {transactionList.map((coin) =>
                    <Card key={coin.id} className="myCoinsCard">
                        <Card.Title> {coin.name}! </Card.Title>
                        <Card.Text> You purchased ${coin.user_coin_input} of {coin.name}! Purchased on {coin.dates} </Card.Text> 
                        <Form.Control onChange={(e) => handleTransactionUpdate(e)}></Form.Control>
                        <Button color="warning" onClick={() => handleCoinUpdate(coin.id)}>Edit Transaction</Button>
                        <Button onClick={() => deleteCoinTransaction(coin.id)}>Delete Transaction</Button>
                    </Card>)}
            </div>
        </Container>
    )
}
