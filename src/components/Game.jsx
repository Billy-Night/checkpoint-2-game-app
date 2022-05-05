import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

//I think that I need to use the id in the url with React Router and the useParams Hook in the GameDetails component, couldn't quite get it in time
//I can retrieve the id of each game from the button click, just need to add it to the URL then retrieve it in the GameDetails component

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