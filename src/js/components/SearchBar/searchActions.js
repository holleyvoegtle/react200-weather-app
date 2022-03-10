import axios from 'axios';
// this is for action creators

export function citySearch(searchedItem) {
    return {
        type: 'CITY_NAME',
        payload: { searchedItem }
    };
}

export function getWeather(searchedItem) {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/search/${ searchedItem }`),
    };
}