import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import './App.css';
import Carousal from './Components/Carousal';
import MainDisplayArea from './Containers/MainDisplayArea';
import Header from './Components/Header';
import Jumbo from './Components/Jumbo';
import MyCoins from './Containers/MyCoins';
import { Route } from "react-router-dom";


function App() {

  const [coinsMain, setCoinsMain] = useState([])
  const [filterString, setFilterString] = useState("")
  const [myCoins, setMyCoins] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/coins")
      .then(res => res.json())
      .then(data => {
        setCoinsMain(data.slice(0, 10))
      })
  }, [])

  const filteredCoins = () => {
    return coinsMain.filter((coin) =>
      coin.name.toLowerCase().includes(filterString.toLowerCase())
    )
  }

  return (
    <div className="App">
      <Container fluid>
        <Route exact path="/" render={(routerprops) => <Jumbo key="jumbo" />} />
        <Route exact path="/" render={(routerprops) => <Header className="searchCoins" setFilter={setFilterString} myCoins={myCoins} key="header" />} />
        <Route path="/mycoins" render={(routerprops) => <MyCoins key="myRenderedCoins" myCoins={myCoins} setMyCoins={setMyCoins} />} />
        <Route exact path="/" render={(routerprops) => <Carousal className="topSectionSlide" key="Carousal" />} />
        <div className="coinDisplayArea">
          <Route exact path="/" render={(routerprops) => <MainDisplayArea allCoinData={filteredCoins()} key="mainDisplay" setMyCoins={setMyCoins} myCoins={myCoins} />} />
        </div>
      </Container>
    </div>
  );
}

export default App;
