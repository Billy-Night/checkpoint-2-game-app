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
