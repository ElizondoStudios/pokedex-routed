function Table({tableBody, tableHead}) {

    const tableHeadJSX= tableHead.map(e => <th>{e}</th>)

    const tableBodyJSX= tableBody.map(e => <tr><td>{e}</td></tr>)

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