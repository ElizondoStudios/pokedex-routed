import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

function Abilities({abilities}) {
    const [ShowAbilities, setShowAbilities] = useState(false)
    const abilitiesURLs= abilities.map( e => e.ability.url)
    const Abilities= useRef([])

    useEffect(() => {
      setShowAbilities(false)
    }, [abilities])

    useEffect(() => {
        const abilitiesData=[]

        const promises=[]
        abilitiesURLs.forEach(element => {
          promises.push(fetch(element))
        })

        Promise.all(promises)
          .then(responses => responses.map(res =>
              res.json().then(data =>
                  abilitiesData.push({name: data.name, description: data.effect_entries[data.effect_entries.length-1].short_effect})
              )
              )
          )
        Abilities.current= abilitiesData
    },[abilities])

    const toggleShowAbilities= () => {
        setShowAbilities(prevShowAbilities => !prevShowAbilities)
    }

    const tableBody= Abilities.current.map(e =>
        <tr>
            <td>{e.name}</td>
            <td>{e.description}</td>
        </tr>
    )


    return (
        <div className="container mt-4">
            <h2 onClick={toggleShowAbilities} style={{cursor: "pointer"}}>Abilities:</h2>
            {
                ShowAbilities &&
                <div className="container-md">
                    <table className="table table-dark table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Name:</th>
                                <th>Description:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                    </table>
                </div>
            }
        </div>
     )
}

export default Abilities;