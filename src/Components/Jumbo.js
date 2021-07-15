import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default function Jumbo() {
    return (
        <div>
            <Jumbotron className="jumbo">
                <h1>Welcome To Your Warm Wallet!</h1>
                <p>
                    Your Warm Wallet is a place for you to manage your crypto investments without holding your real money in an app!
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    )
}
