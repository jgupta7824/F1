 export const CHAMPIONS_DATA = [{"season":"2005","round":"19","DriverStandings":[{"position":"1","positionText":"1","points":"133","wins":"7","Driver":{"driverId":"alonso","permanentNumber":"14","code":"ALO","url":"http://en.wikipedia.org/wiki/Fernando_Alonso","givenName":"Fernando","familyName":"Alonso","dateOfBirth":"1981-07-29","nationality":"Spanish"},"Constructors":[{"constructorId":"renault","url":"http://en.wikipedia.org/wiki/Renault_in_Formula_One","name":"Renault","nationality":"French"}]}],"points":"133","fullName":"Fernando Alonso","wins":"7","driverId":"alonso","permanentNumber":"14","code":"ALO","url":"http://en.wikipedia.org/wiki/Fernando_Alonso","givenName":"Fernando","familyName":"Alonso","dateOfBirth":"1981-07-29","nationality":"Spanish"}]
 export const CHAMPIONS_DATA_HEADER=[
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
    }
]

export const RACE_DATA = [{"season":"2007","round":"1","url":"http://en.wikipedia.org/wiki/2007_Australian_Grand_Prix","raceName":"Australian Grand Prix","Circuit":{"circuitId":"albert_park","url":"http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit","circuitName":"Albert Park Grand Prix Circuit","Location":{"lat":"-37.8497","long":"144.968","locality":"Melbourne","country":"Australia"}},"date":"2007-03-18","time":"03:00:00Z","Results":[{"number":"6","position":"1","positionText":"1","points":"10","Driver":{"driverId":"raikkonen","permanentNumber":"7","code":"RAI","url":"http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen","givenName":"Kimi","familyName":"Räikkönen","dateOfBirth":"1979-10-17","nationality":"Finnish"},"Constructor":{"constructorId":"ferrari","url":"http://en.wikipedia.org/wiki/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"},"grid":"1","laps":"58","status":"Finished","Time":{"millis":"5128770","time":"1:25:28.770"},"FastestLap":{"rank":"1","lap":"41","Time":{"time":"1:25.235"},"AverageSpeed":{"units":"kph","speed":"223.978"}}}],"fullName":"Kimi Räikkönen","constructorName":"Kimi Räikkönen","laps":"58","finishedTime":"1:25:28.770","grid":"1 Grid","isHighLightRequired":true}]
export const RACE_DATA_HEADER = 
[
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