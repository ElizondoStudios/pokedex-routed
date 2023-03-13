import { nanoid } from "nanoid";

function Table({tableBody, tableHead, displayInfo}) {

    const tableHeadJSX= tableHead.map(e => <th key={nanoid()}>{e}</th>)

    const tableBodyJSX= tableBody.map(e => <tr key={nanoid()}><td>{e}</td></tr>)

    return ( 
        <div className="container-md">
            <table className="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        {tableHeadJSX}
                    </tr>
                </thead>
                <tbody>
                        {tableBodyJSX}
                </tbody>
            </table>
        </div>
     )
}

export default Table;