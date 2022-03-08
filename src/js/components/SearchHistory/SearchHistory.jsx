import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { searchHistory } = this.props;
        return (
            <div>
                <div className='card border-info mb-3'>
                    <div className='card-header text-white bg-info'>Search History</div>
                        <div className='card-body'>
                            <ul className='list-group'>
                            {
                                searchHistory.map(searchItem => (
                                    <li className='list-group-item' key={searchItem.time}>
                                        {searchItem.searchedCity},
                                        {searchItem.date},
                                        {searchItem.time}
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                </div>



            </div>
        )
    }
}