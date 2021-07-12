import React from 'react'
import { Card, Button } from 'react-bootstrap'
import CardInput from './CardInput'

export default function CardFront({coin, handleChange, handleClick, setMyCoins, myCoins, flipCard}) {
    return (
        <div className="container">
            <Card style={{ width: '18rem' }} className="card">
                <Card.Body >
                    <div className="content">
                        <Card.Img className="image" width="300px" src={coin.image} />
                        <Card.Title className="coinName">{coin.name}</Card.Title>
                        <Card.Text >
                            All Time High: {coin.ath}
                            <br></br>
                            All Time Low: {coin.atl}
                            <br></br>
                            Total Supply: {coin.total_supply}
                        </Card.Text>
                    </div>
                    <div className="content2">
                        <Card.Title className="coinName">{coin.name}</Card.Title>
                        <Card.Text className="coinCardText">
                            Price: ${coin.current_price}
                            <br></br>
                            24 Hour High: ${coin.high_24h}
                            <br></br>
                            24 Hour Low: ${coin.low_24h}
                        </Card.Text>
                        <CardInput coin={coin} handleClick={handleClick} handleChange={handleChange} setMyCoins={setMyCoins} myCoins={myCoins} />
                        <Button className="button2" variant="primary" size="small" block  onClick={(e) => flipCard(e)}> 
                            See Charts!
                        </Button >
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
