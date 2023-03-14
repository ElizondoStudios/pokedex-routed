function ChangeButtons(props) {
    return ( 
        <div className="change-buttons">
            {
                props.currentPokemon>1 &&
                <button className="change-buttons--left" onClick={props.prevPokemon}></button>
            }
            <button className="change-buttons--right" onClick={props.nextPokemon}></button>
        </div>
     )
}

export default ChangeButtons;