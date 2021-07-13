import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function CardInput({ coin, myCoins }) {

    const dateLabel = new Date()
    const [userCoinInput, setUserCoinInput] = useState("")

    myCoins = (`${coin.name}: $${userCoinInput} ${dateLabel}`)
    
    const handleUserInputChange = (e) => {
        setUserCoinInput(e.target.value)
    }
    
    const saveCoin = () => {
        fetch('http://localhost:3000/coin_inputs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                user_coin_input: myCoins,
                dates: dateLabel
            }),
        })
            .then((res) => res.json())
            .then(console.log(myCoins))
    }


    return (
        <div>
            <Form className="coinForm">
                <Form.Group>
                    <Form.Label  >
                        Amount Spent
                    </Form.Label>
                    <Form.Control type="text" onChange={(e) => handleUserInputChange(e)} />
                </Form.Group>
                <Button className="addToPortfolio" variant="primary" size="small" block value={userCoinInput} onClick={(e) => saveCoin(e)}>
                    Add To Portfolio
                </Button>
            </Form>
        </div>
    )
}
