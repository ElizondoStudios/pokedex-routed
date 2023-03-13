import Table from "./Table";
import { nanoid } from "nanoid";

function Stats({stats}) {
    const statNames=stats.map(e => e.stat.name)
    const statValues= stats.map(e => e.base_stat)

    const getStyleStat= (val) => {
      const num= parseInt(val)
        if(num<40)
            return "danger"
        else if(num<80)
            return "warning"
        return "success"
    }

    const tableEntries= statNames.map((name, i) => 
        <tr key={nanoid()}>
            <td>{name}</td>
            <td className={`table-${getStyleStat(statValues[i])}`}>{statValues[i]}</td>
        </tr>
    )

    return ( 
        <div className="container mt-4">
            <h2>Stats:</h2>
            <div className="container-md">
            <table className="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Value:</th>
                    </tr>
                </thead>
                <tbody>
                    {tableEntries}
                </tbody>
            </table>
        </div>
        </div>
     )
}

export default Stats;