import { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router'
import List from "../../components/List.component"
import { getChampionsList,saveChampionData } from '../../actions/AppActions'


class ChampionsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLoading: false,
            championsData: []
        }
    }
    tableHeaders = [
        {
            name: 'SR_NO',
            value: 'index'
        },
        {
            name: 'SEASON_HEADER',
            value: 'season'
        },
        {
            name: 'DRIVER_NAME_HEADER',
            value: 'fullName'
        },
        {
            name: 'DRIVER_POSITION_HEADER',
            value: 'permanentNumber'
        },
        {
            name: 'DRIVER_MATCHES_WIN_HEADER',
            value: 'wins'
        },
        {
            name: 'DRIVER_POINTS_HEADER',
            value: 'points'
        },
        {
            name: 'VIEW_DETAILS',
            inputType: 'button',
            onClick: (champioData, index) => this.onButtonClicked(champioData, index)
        }
    ]

    //get Events as props from list component
    onButtonClicked = (champioData, index) => {
        if (champioData && Object.keys(champioData).length) {
            this.props.history.push('/champions/' + champioData.season)
            this.props.saveChampionData(champioData);
        }
    }

    //get the list of champions on component mount 

    componentDidMount = () => {
        // Not need to update store here . 
        // can be achieve this by passing callack function to getChampionsList method 
        //starting loading when data loading started .
        this.setState({ showLoading: true }, () => {
            this.props.getChampionsList(this.onChampionsListLoaded)
        })
    }

    //call back when champions list loaded 

    onChampionsListLoaded = (data) => {
        if (data && data.length) {
            this.setState({ showLoading: false, championsData: data })
        }
    }

    render() {
        return (
            <List showLoading={this.state.showLoading}
                rowData={this.state.championsData}
                tableHeaders={this.tableHeaders} />
        )
    }
}

//If redux used can be access champion list like this 
// not required now because champion list used only in this components 
// const mapStateToProps = (state,props) => {
//     return {
//         championsList: state.ChampionsList
//     }
// }

export default withRouter(connect(null, {
    getChampionsList,
    saveChampionData
})(ChampionsList))