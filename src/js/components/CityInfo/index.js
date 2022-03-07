/* eslint-disable no-tabs */
import { connect } from 'react-redux';
import CityInfo from './CityInfo';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
	return {
		cityName: store.search.cityName,
        latitude: store.search.latitude,
        longitude: store.search.longitude,
        temperature: store.search.temperature,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        lowestTemp: store.search.lowestTemp,
        highestTemp: store.search.highestTemp,
        windSpeed: store.search.windSpeed
	};
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.

export default connect(mapStoreToProps)(CityInfo);