import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from "react";
// import GameList from './components/GameList';
import Game from './components/Game';



const GameList = () => {
  let [apiData, setApiData] = useState([]);

  //fetch defaults to GET requests
  useEffect(() => {
    fetch("https://apis.wilders.dev/wild-games/games/")
    .then((response) => response.json())
    .then((data) => {
      setApiData(data);
    })
  }, [])
  
    return (
  <div className="GameList">
      <p>This is the GameList comp</p>
      <p>This is the name of the first game</p>
      <div>
      {apiData.map((e, index) => {
        return (
          <Game key={index} name={e.name} img={e.background_image} rating={e.rating} released={e.released} />
        )
      }
        )}
      </div>
  </div> 
  );
}

function App() {

  return (
    <div className="App">
      <Header webname="Game Rater" />
      <GameList />
    </div>
  );
}

export default App;
