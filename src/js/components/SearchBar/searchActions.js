import axios from 'axios';
// this is for action creators

export function citySearch(name) {
    return {
        type: 'CITY_NAME',
        payload: { name }
    };
}

export function getWeather(name) {
    return {
        type: 'GET_WEATHER',
        payload: { name }
    };
}