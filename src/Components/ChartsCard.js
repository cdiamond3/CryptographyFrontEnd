import React from 'react'
import { Line, Bar } from 'react-chartjs-2';

export default class ChartsCard extends React.Component {

log = () => {
    console.log(this.props.coin)
}
debugger
    state = {
        marketCoin: {},
        prices: {
            labels: [],
            datasets: [
                {
                    label: 'Price:',
                    // fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 1,
                    data: [this.props.coin.current_price]
                }
            ]
        },
        volumes: {
            labels: [],
            datasets: [
                {
                    label: 'Price:',
                    // fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    color: 'rgba(0,0,0,1)',
                    borderWidth: 1,
                    data: [this.props.coin.current_price]
                }
            ]
        }
    }

    componentDidMount() {
        fetch(`https://api.coingecko.com/api/v3/coins/${this.props.coin.id}/market_chart?vs_currency=usd&days=7&interval=daily`)
            .then(res => res.json())
            .then(marketCoin => {
                this.setState({ marketCoin })
                const priceLabels = marketCoin.prices.map(price => {
                    return new Date(price[0]).getDate()
                })
                const priceData = marketCoin.prices.map(price => price[1])
                const volumeLabels = marketCoin.total_volumes.map(volume => {
                    return new Date(volume[0]).getDate()
                })
                const volumeData = marketCoin.total_volumes.map(volume => volume[1])
                this.setState({
                    prices: {
                        labels: priceLabels,
                        datasets: [{
                            label: 'Price:',
                            // fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: priceData
                        }]
                    },
                    volumes: {
                        labels: volumeLabels,
                        datasets: [{
                            label: 'Volume:',
                            // fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(178, 201, 0, 0.7)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: volumeData
                        }]
                    }
                })
            })
    }




    // new Date(datenumber)

    //make a function to go through price array, this.state.marketCoin.prices

    // Math.floor(new Date().getTime()/1000.0) The getTime method returns the time in milliseconds.
    //this above function will turn regular time into unix time. interp that into fetch url.
    // take current date as from and current date - 90days as to

    // savePrice = () => {
    //     if(this.props.coin.current_price !== this.props.coin.current_price + 1)
    //         this.state.datasets.data.push(this.props.coin.current_price)
    // }


    render() {
        return (
            <div>
                <Line
                    data={this.state.prices}
                    options={{
                        title: {
                            display: true,
                            text: 'Price Change Over 1 Year',
                            fontSize: 16
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
                <Bar
                    data={this.state.volumes}
                    options={{
                        title: {
                            display: true,
                            text: 'Price Change Over 1 Year',
                            fontSize: 16
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}
