import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function CardInput({ coin, myCoins }) {

    const dateLabel = new Date()
    const [amountSpent, setAmountSpent] = useState("")
    

    myCoins = (`${coin.name}: You purchased $${amountSpent}! Purchased On: ${dateLabel}`)
    
    const handleUserInputChange = (e) => {
        setAmountSpent(e.target.value)
    }
    
    const saveCoin = () => {
        fetch('http://localhost:3000/coin_inputs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                user_coin_input: amountSpent,
                dates: dateLabel,
                name: coin.name
            }),
        })
            .then(() => {})
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
                <Button className="buttonClass" variant="primary" size="small" block value={amountSpent} onClick={(e) => saveCoin(e)}>
                    Add To Portfolio
                </Button>
            </Form>
        </div>
    )
}
