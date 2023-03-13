import Table from "./Table";

function Moves({moves}) {

    const movesArr= moves.map(e => e.move.name)

    return ( 
        <div className="container mt-4">
            <h2>Moves:</h2>
            <Table
             tableHead={["Name:"]}
             tableBody={movesArr}
            />
        </div>
     )
}

export default Moves;