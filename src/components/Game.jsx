

const Game = (props) => (
    <div className="game">
        <h1>The Game is {props.name}</h1>
        <img src={props.img} alt={props.name}/>
        <p>The Rating is {props.rating}</p>
        <p>It was released on {props.released}</p>
    </div>

)

export default Game;