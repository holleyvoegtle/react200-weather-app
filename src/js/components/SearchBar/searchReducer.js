const moment = require('moment');

const defaultState = {
    
    latitude: '', 
    longitude: '', 
    temperature: 0, 
    pressure: 0,
    humidity: 0,
    lowestTemp: 0,
    highestTemp: 0,
    windSpeed: 0, 
    searchInput: '',
    cityName: 'Enter a city',
    searchHistory: [],
    
};

export default function SearchReducer (state = defaultState, action) {
    const { type, payload } = action;
    console.log("what is the payload", payload)
    
    switch (type) {
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                searchedItem: '',
                latitude: payload.data.coord.lat,
                longitude: payload.data.coord.lon,
                temperature: payload.data.main.temp,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                lowestTemp: payload.data.main.temp_min,
                highestTemp: payload.data.main.temp_max,
                windSpeed: payload.data.wind.speed,
                cityName: payload.data.name,
                searchHistory: [
                    ...state.searchHistory,
                    {
                       searchedItem: payload.data.name,
                       date: moment().format('l'),
                       time: moment().format('h:mm:ss a')
                    }
                ]
            }
        }
        case 'CITY_NAME':{
            return{
                ...state,
                searchedItem: payload.data.main.name,
                
            }
        }
        default: {
            return state;
        }
    }
}