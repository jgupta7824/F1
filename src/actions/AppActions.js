// Redux connected action tags
const GET_CHAMPIONS_LIST = 'getChampionsList'
const SAVE_CHAMPION_DATA = 'saveChampionData'

const baseUrl = 'https://ergast.com/api/f1/'


 function getChampionsList(callack) {
    const url = baseUrl + 'driverStandings/1.json?offset=55'
    const championsList=  fetch(`${url}`).then(response => {
        return response.json()
    }).then(data => {
        let championsData = []
        if (data &&
            data.MRData
            && data.MRData.StandingsTable && data.MRData.StandingsTable.StandingsLists.length) {
            for(let champion of data.MRData.StandingsTable.StandingsLists){
                const driverDetails = champion.DriverStandings && champion.DriverStandings.length ? 
                champion.DriverStandings[0] : null
                if(driverDetails.Driver && Object.keys(driverDetails.Driver).length){
                    //converting data into an common format so that can be passed to common list component
                    championsData.push({...{...champion,...{
                        "points":champion.DriverStandings[0].points,
                        "fullName":driverDetails.Driver.givenName + ' ' +driverDetails.Driver.familyName,
                        "wins":champion.DriverStandings[0].wins}},
                    ...driverDetails.Driver})
                }
            }
        }
        callack(championsData)
        return championsData
    }).catch(error => {
        callack([])
        return Promise.reject(error)
    })
    //No needed to store in redux because not required this data to other components 
    // but can be commented . as defined inside mapDispatchToprops so leaving now can be commented.
    return { type: GET_CHAMPIONS_LIST, payload: championsList }
}

//Save champions data for winners list in redux

function saveChampionData(championData){
    return { type: SAVE_CHAMPION_DATA, data: championData }
}

//get list of races based on particular year

function getRaceListByYear (callack,championData){
    const url = baseUrl + championData.season+ '/results/1.json'
    const raceList=  fetch(`${url}`).then(response => {
        return response.json()
    }).then(data => {
        let raceData = [];
        if (data &&
            data.MRData
            && data.MRData.RaceTable && data.MRData.RaceTable.Races.length) {
                for(let race of data.MRData.RaceTable.Races){
                    const raceResult = race.Results && race.Results.length ? race.Results[0] : null
                    const driverName = raceResult.Driver.givenName + " "+raceResult.Driver.familyName
                    raceData.push({...race,...{
                        "fullName":raceResult.Driver.givenName + " "+raceResult.Driver.familyName ,
                        "constructorName":driverName,
                        "laps":raceResult.laps,
                        "finishedTime":raceResult.Time.time,
                        "grid":raceResult.grid + " Grid" ,
                        "isHighLightRequired": championData.fullName && driverName === championData.fullName
                    }})
                }
            }
            console.log(raceData)
        callack(raceData)
        return raceData
    }).catch(error => {
        callack([])
        return Promise.reject(error)
    })
}




/**
 *  Redux connected actions
 * @type {Object}
 */
const AppActionTypes = {
    GET_CHAMPIONS_LIST,
    SAVE_CHAMPION_DATA
}

export {
    AppActionTypes,
    getChampionsList,
    saveChampionData,
    getRaceListByYear
}
