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
            <form>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary me-1" onClick={() => this.handleGetWeather("San Diego")}>San Diego</button>
                    <button type="button" className="btn btn-primary me-1" onClick={() => this.handleGetWeather("Mammoth Lakes")}>Mammoth Lakes</button>
                    <button type="button" className="btn btn-primary me-1" onClick={() => this.handleGetWeather("Makawao")}>Makawao</button>
                    <button type="button" className="btn btn-primary me-1" onClick={() => this.handleGetWeather("London")}>London</button>
                    <button type="button" className="btn btn-primary me-1" onClick={() => this.handleGetWeather("Hagatna")}>Hagatha</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search City"
                        aria-label="Search"
                        value = {name}
                        onChange={this.handleCityName}
                    />
                    <button type="button" className="btn btn-outline-secondary" onClick={() => this.handleGetWeather(this.props.name)}>Go!</button>

                </div>
            </div>
            </form>
    )
    }
}

