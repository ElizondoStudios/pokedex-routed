import React, { useEffect, useState } from 'react';
import Table from './Table';

function Abilities({abilities}) {

    const [ShowAbilities, setShowAbilities] = useState(false)

    useEffect(() => {
      setShowAbilities(false)
    }, [abilities])

    function toggleTable(){
        setShowAbilities(prevShowAbilities => !prevShowAbilities)
    }

    return (
        <div className="container mt-4">
            <h2 onClick={toggleTable} className="title-toggle">Abilities ⬇</h2>
            {
                ShowAbilities &&
                <Table
                 tableHead={["Abilities:"]}
                 tableBody={[abilities[0].ability.name, (abilities[1] && abilities[1].ability.name)]}
                />
            }
        </div>
     )
}

export default Abilities;