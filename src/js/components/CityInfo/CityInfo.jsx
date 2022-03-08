
//import { name } from 'file-loader';
import React from 'react';

export default class CityInfo extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render(){
        const { 
            cityName, // do I call this name or city name?
            latitude, 
            longitude, 
            temperature, 
            pressure,
            humidity,
            lowestTemp,
            highestTemp,
            windSpeed
        } = this.props;
        
        
        return (
            <div className='card border-info mb-3'>
                <div className='card-header text-white bg-info'>City Information</div>
                <div className='card-body'>
                    <h1 className='display-6 text-center'>{cityName}</h1>
                    <h6 className='text-center'>lat/long:<span className='text-success'> {`${latitude}, ${longitude}`}</span></h6>
                    <hr></hr>
                    <div className='row mt-4'>
                        <div className='col'><h6 className='text-center'>Temp {`(F)`}</h6></div>
                        <div className='col'><h6 className='text-center'>Pressure</h6></div>
                        <div className='col'><h6 className='text-center'>Humidity</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col'><h6 className='text-center text-success'>{`${temperature}F`}</h6></div>
                        <div className='col'><h6 className='text-center text-success'>{pressure}</h6></div>
                        <div className='col'><h6 className='text-center text-success'>{`${humidity}%`}</h6></div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col'><h6 className='text-center'>Lowest Temp {`(F)`}</h6></div>
                        <div className='col'><h6 className='text-center'>Highest Temp {`(F)`}</h6></div>
                        <div className='col'><h6 className='text-center'>Wind Speed</h6></div>
                    </div>
                    <div className='row'>
                        <div className='col'><h6 className='text-center text-success'>{`${lowestTemp}F`}</h6></div>
                        <div className='col'><h6 className='text-center text-success'>{`${highestTemp}F`}</h6></div>
                        <div className='col'><h6 className='text-center text-success'>{`${windSpeed}mph`}</h6></div>
                    </div>
                </div>

        </div>
    )
}
}

