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
        this.state ={
            searchedItem: ''
        }
        
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
    handleGetWeather(cityName) {
        const { dispatch } = this.props;
        const { searchedItem } = this.props
        dispatch(getWeather(searchedItem));
    }

    // componentDidMount() {
    //     const { dispatch } = this.props;
    //     dispatch(getWeather('San Diego'));
    // }
    
    render() {
        const { searchedItem } = this.props;
        
        return (
            <form>
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-secondary me-1" onClick={() => this.handleGetWeather("San Diego")}>San Diego</button>
                    <button type="submit" className="btn btn-secondary me-1" onClick={() => this.handleGetWeather("Mammoth Lakes")}>Mammoth Lakes</button>
                    <button type="submit" className="btn btn-secondary me-1" onClick={() => this.handleGetWeather("Makawao")}>Makawao</button>
                    <button type="submit" className="btn btn-secondary me-1" onClick={() => this.handleGetWeather("London")}>London</button>
                    <button type="submit" className="btn btn-secondary me-1" onClick={() => this.handleGetWeather("Hagatna")}>Hagatha</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search City"
                        value = {searchedItem}
                        onChange={this.handleCityName}
                    />
                    <button 
                        type="button" 
                        className="btn btn-outline-secondary" 
                        value={this.state.searchedItem}
                        onClick={this.handleGetWeather}>Go!</button>

                </div>
            </div>
            </form>
    )
    }
}

