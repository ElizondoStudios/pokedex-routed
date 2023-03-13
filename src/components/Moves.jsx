import React, { useState, useEffect} from 'react';
import Table from "./Table";

function Moves({moves}) {
    const [ShowMoves, setShowMoves] = useState(false)
    const movesArr= moves.map(e => e.move.name)

    useEffect(() => {
        setShowMoves(false)
    }, [moves])

    const toggleShowMoves= () => {
      setShowMoves(prevShowMoves => !prevShowMoves)
    }

    return ( 
        <div className="container mt-4">
            <h2 onClick={toggleShowMoves} style={{cursor: "pointer"}}>Moves:</h2>
            {
                ShowMoves &&
                <Table
                 tableHead={["Name:"]}
                 tableBody={movesArr}
                />
            }
        </div>
     )
}

export default Moves;