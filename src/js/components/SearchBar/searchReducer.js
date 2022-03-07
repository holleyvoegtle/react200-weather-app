const defaultState = {
    
    latitude: '', 
    longitude: '', 
    temperature: 0, 
    pressure: 0,
    humidity: 0,
    lowestTemp: 0,
    highestTemp: 0,
    windSpeed: 0, 
    cityName: '',
    searchHistory: []

};

export default function searchBar (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                latitude: payload.data.coord.latitude,
                longitude: payload.data.coord.longitude,
                temperature: payload.data.main.temperature,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                lowestTemp: payload.data.main.lowestTemp,
                highestTemp: payload.data.main.highestTemp,
                windSpeed: payload.data.main.windSpeed,
                cityName: payload.data.name,
                searchHistory: [
                    ...state.searchHistory,
                    {
                        
                    }
                ]


            }
        }
    }
}