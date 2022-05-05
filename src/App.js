import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from "react";
// import GameList from './components/GameList';
import Game from './components/Game';



const GameList = () => {
  let [apiData, setApiData] = useState([]);
  let [checkRating, setCheckRating] = useState(false);


  //fetch defaults to GET requests
  useEffect(() => {
    fetch("https://apis.wilders.dev/wild-games/games/")
    .then((response) => response.json())
    .then((data) => {
      setApiData(data);
    })
  }, [])

  const handleClick = () => {
    setCheckRating(!checkRating);
  }
  
    return (
  <div className="GameList">
      <p>This is the GameList comp</p>
      <p>To display all the games over 4.5 press the button</p>
      <button onClick={handleClick}>Press</button>
      
      <div>
      {checkRating === false ?
      apiData.map((e, i) => {
        return (
          <Game key={i} name={e.name} img={e.background_image} rating={e.rating} released={e.released} />
        )
      }) : 
      apiData.filter((e) => e.rating >= 4.5).map((e, i) => {
        return (
          <Game key={i} name={e.name} img={e.background_image} rating={e.rating} released={e.released} />
        )})
        }
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
