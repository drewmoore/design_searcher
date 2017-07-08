import update         from 'immutability-helper';
import DesignsActions from '../actions/designs';

const defaultState = {
  items:      {},
  isFetching: false,
  error:      null
};

const fetchState = (state, action) => {
  let newState;
  switch (action.status) {
    case 'success':
      newState = {
        isFetching: false,
        items:      action.results,
        error:      null
      };
      break;
    default:
      newState = { isFetching: true, error: null };
      break;
  }
  return update(state, { $merge: newState });
};

const placeholder = (state = defaultState, action = {}) => {
  switch (action.type) {
    case DesignsActions.FETCH_DESIGNS:
      return fetchState(state, action);
    default:
      return state;
  }
};

export default placeholder;
