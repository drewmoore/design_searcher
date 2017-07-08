import { connect } from 'react-redux';
import Placeholder from '../components/placeholder';

const mapStateToProps = (state, ownProps) => ({
  message: 'Yo, World!'
});

const PlaceholderContainer = connect(mapStateToProps)(Placeholder);

export default PlaceholderContainer;
