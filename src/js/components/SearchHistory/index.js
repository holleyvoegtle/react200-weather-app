import { connect } from 'react-redux';
import SearchHistory from './SearchHistory'

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
	return {
		history: store.search.history
	};
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.

export default connect(mapStoreToProps)(SearchHistory);