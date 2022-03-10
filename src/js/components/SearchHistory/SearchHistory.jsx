import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { searchHistory } = this.props;
        console.log(" what kind are you?" , searchHistory)
         
            return (
                <div className='card border-info mb-3'>
                    <div className='card border'>
                        <div className='card-header text-white bg-info'>Search History</div> 
                        <div className='card-body'>
                            <ul className='pl-0 mb-0'>
                                
                                    {/* {searchHistory.map((searchedItem, index) => (
                                        <div key={index}>
                                            <li className='d-flex border-top pt-1'>
                                                <p className='flex-left pl-2'> {searchedItem.searchedItem} </p>
                                                <div className='flex-right ml-auto pr-2'>
                                                    <p className='mb-0'> {searchedItem.date} </p>
                                                    <p className='mb-1'> {searchedItem.time} </p>
                                                </div>
                                            </li>
                                        </div>                                    
                                        ))} */}
                               
                            </ul>
                        </div>
                    </div>
                </div>
            )
    }
}