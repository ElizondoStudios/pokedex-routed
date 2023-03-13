import { useEffect, useState } from 'react';
import Table from './Table';

function Abilities({abilities}) {
    const abilitiesNames= abilities.map( e => e.ability.name)
    // const abilitiesURLs= abilities.map( e => e.ability.url)

    return (
        <div className="container mt-4">
            <h2>Abilities:</h2>
            <Table
             tableHead={["Name:"]}
             tableBody={abilitiesNames}
            />
        </div>
     )
}

export default Abilities;