import { useEffect, useState } from "react";
import List from "../../components/List.component"
import {getRaceListByYear} from '../../actions/AppActions'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const tableHeaders = [
    {
        name: 'SR_NO',
        value: 'index'
    },
    {
        name: 'DRIVER_NAME_HEADER',
        value: 'fullName'
    },
    {
        name: 'RACE_NAME',
        value: 'raceName'
    },
    {
        name: 'CONSTRUCTOR_NAME',
        value: 'constructorName'
    },
    {
        name: 'RACE_LAPS',
        value: 'laps'
    },
    {
        name: 'RACE_GRID',
        value: 'grid'
    },
    {
        name: 'RACE_FINISHED_TIME',
        value: 'finishedTime'
    }

]


const WinnersList =(props)=>{

    const championData = useSelector(state => state.championData)
    const [raceData,setRaceData] = useState([]);
    const [showLoading,setShowLoading] = useState(true);
    const history = useHistory()

    useEffect(()=>{
       if(championData && Object.keys(championData).length){
        getRaceListByYear(onGettingWinnersList,championData)
       }else{
           history.push('/champions')
       }
    },[]);

    function onGettingWinnersList(raceDataBasedOnYear){
       if(raceDataBasedOnYear.length){
           setShowLoading(false)
           setRaceData(raceDataBasedOnYear)
       }
    }

    return(
        <List showLoading={showLoading}
        rowData={raceData}
        tableHeaders={tableHeaders} />
    )

}

export default WinnersList

