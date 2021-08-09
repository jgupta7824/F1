import TRANSLATIONS from '../utils/translations'


const List = (props) => {

    function generateRows(data, index) {
        const tableRows = []
        if (props.tableHeaders.length) {
            tableRows.push(<td key={index}>{index + 1}</td>)
            for (let i = 0; i < props.tableHeaders.length; i++) {
                if (i > 0 && !props.tableHeaders[i]['inputType']) {
                    tableRows.push(<td key={`${props.tableHeaders[i].value}_${i}`}>{data[props.tableHeaders[i].value]}</td>)
                } else if (props.tableHeaders[i]['inputType'] === 'button') {
                    //this also can be dynamic . but making hardcoded now 
                    // can be take input from parent component
                    tableRows.push(<td key={`${props.tableHeaders[i].value}_${i}`}><button className="btn" onClick={() => {
                        props.tableHeaders[i].onClick(data, index)
                    }}>
                        <i className="far fa-eye"></i> View</button></td>)
                }
            }
        }
        return tableRows
    }

    return (
        <div className="content-layout">
            {!props.showLoading && props.rowData.length && <div><table id="customers">
                <thead>
                    <tr>
                        {props.tableHeaders.map((header, i) => {
                            return (<th key={i}>{TRANSLATIONS[header['name']]}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.rowData.map((data, index) => {
                        return (
                            <tr key={index} className={data['isHighLightRequired'] ? 'highlight' : null}>
                                {generateRows(data, index)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>}
            { props.showLoading && <div className="grey-out">
                <div className="loading-text">Please wait while we load data.</div></div>}
            { !props.showLoading && !props.rowData.length && <div className="grey-out">
                <div className="loading-text">No data available.</div></div>}
        </div>
    )
}

export default List