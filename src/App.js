import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';


function App() {

  return (
    <div className="App">
      <Header webname="Game Rater" />
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;

// Using React Router, when you want to create a Route that uses a URL parameter, you do so by including a : in front of the value you pass to Route's path prop.