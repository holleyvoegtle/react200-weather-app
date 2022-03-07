//import { render } from "less";
import React from "react";

// need to import all those action creators
import {
    citySearch,
    getWeather

} from './searchActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleCityName = this.handleCityName.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this); 
    }
    
    // get city name
    handleCityName(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(citySearch(value));
    }
    
    // get weather
    handleGetWeather(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(getWeather(value));
    }
    
    render() {
        const { name } = this.props;
        return (
            <div id = 'searchbar' >
            
        </div>
    )
}
}

