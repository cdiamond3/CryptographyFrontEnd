import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function CardInput({ coin, setMyCoins, myCoins }) {

    const dateLabel = new Date()

    const [userCoinInput, setUserCoinInput] = useState("")
    


    const handleUserInputChange = (e) => {
        setUserCoinInput(e.target.value)
    }

    const handleUserInputClick = () => {
        return setMyCoins(myCoins + `${coin.name}: $${userCoinInput} ${dateLabel}`)
    }
    // console.log(myCoins)

    

    return (
        <div>
            <Form className="coinForm">
                <Form.Group>
                    <Form.Label  >
                        Amount Spent
                    </Form.Label>
                    <Form.Control onChange={(e) => handleUserInputChange(e)} />
                </Form.Group>
                <Button className="button" variant="primary" size="small" block onClick={(e) => handleUserInputClick(e)}>
                    Add To Portfolio 
                </Button>
                <Button className="button2" variant="primary" size="small" block >
                    See Charts!
                </Button >
            </Form>
        </div>
    )
}
