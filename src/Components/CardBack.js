import React from 'react'
import { Card, Button } from "react-bootstrap"
import ChartsCard from './ChartsCard'

export default function CardBack({ coin, flipCard }) {
    return (
        <div className="containerBack">
            <Card style={{ width: '18rem' }} className="card">
                
                    <div className="content">
                        <ChartsCard coin={coin} />
                    </div>
                    <div className="content2">
                        <Button className="button2" variant="primary" size="small" block onClick={(e) => flipCard(e)}>
                            Back To Coin Info
                        </Button >
                    </div>
                
            </Card>
        </div>
    )
}
