import { connect }    from 'react-redux';
import DesignsActions from '../../actions/designs';
import DesignsList    from '../../components/designs/list';

const mapStateToProps = (state, ownProps) => ({
  designs:    Object.values(state.designs.items),
  isFetching: state.designs.isFetching,
  error:      state.designs.error,
  filters:    state.filters
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetch(filters) { dispatch(DesignsActions.fetch(filters)); }
});

const DesignsListContainer = connect(mapStateToProps, mapDispatchToProps)(DesignsList);

export default DesignsListContainer;
