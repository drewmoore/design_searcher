import { connect }    from 'react-redux';
import DesignsActions from '../../actions/designs';
import DesignsList    from '../../components/designs/list';

const mapStateToProps = (state, ownProps) => ({
  designs:    Object.values(state.designs.items),
  isFetching: state.designs.isFetching,
  error:      state.designs.error
});

const mapDispatchToProps = dispatch => ({
  fetch() { dispatch(DesignsActions.fetch()); }
});

const DesignsListContainer = connect(mapStateToProps, mapDispatchToProps)(DesignsList);

export default DesignsListContainer;
