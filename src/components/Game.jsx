import { useNavigate } from 'react-router-dom';


const Game = (props) => {

const navigate = useNavigate();

const handleGame = (id) => {
    console.log("clicked");
    console.log(id);
    navigate('/games/:id');
}

    return (
    <div className="game">
        <h1>The Game is {props.name}</h1>
        <img src={props.img} alt={props.name}/>
        <p>The Rating is {props.rating}</p>
        <p>It was released on {props.released}</p>
        <button onClick={() => handleGame(props.id)}>More info</button>

    </div>
    )
}

export default Game;