import React from 'react';
import CityInfo from './components/CityInfo';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory/SearchHistory';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        searchedItem: ''
      }
  }
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4 text-center'>Weather App</h1>
            <p className='lead text-center'>Always know if you'll need an umbrella!</p>
          </div>
          <div className='row'>
            <div className='col-12'>
             <SearchBar />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6 mb-4'>
              <CityInfo />
            </div>
            <div className='col-12 col-md-6 mb-4' >
              <SearchHistory />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
