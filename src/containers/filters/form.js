import { connect }    from 'react-redux';
import serialize      from 'form-serialize';
import FiltersActions from '../../actions/filters';
import FiltersForm    from '../../components/filters/form';

const mapStateToProps = (state) => ({
  q:         state.filters.q,
  offset:    state.filters.offset,
  limit:     state.filters.limit,
  sort:      state.filters.sort,
  substrate: state.filters.substrate,
  view:      state.filters.view
});

const mapDispatchToProps = (dispatch) => ({
  submit(event) {
    event.preventDefault();
    const filters = serialize(event.target, { hash: true });
    dispatch(FiltersActions.update(filters));
  }
});

const FiltersFormContainer = connect(mapStateToProps, mapDispatchToProps)(FiltersForm);

export default FiltersFormContainer;
