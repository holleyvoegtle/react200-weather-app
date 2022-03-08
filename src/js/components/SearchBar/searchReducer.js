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
    cityName: 'Enter a city',
    searchHistory: [],
    
};

export default function SearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                latitude: payload.data.coord.latitude,
                longitude: payload.data.coord.longitude,
                temperature: payload.data.main.temperature.toFixed(2),
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                lowestTemp: payload.data.main.lowestTemp,
                highestTemp: payload.data.main.highestTemp,
                windSpeed: payload.data.wind.windSpeed,
                cityName: payload.data.name,
                searchHistory: [
                    ...state.searchHistory,
                    {
                       searchedCity: payload.data.name,
                       date: moment().format('l'),
                       time: moment().format('h:mm:ss a')
                    }
                ]
            }
        }
        case 'CITY_NAME':{
            return{
                ...state,
                name: payload.name
            }
        }
        default: {
            return state;
        }
    }
}