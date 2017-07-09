import queryString from 'query-string';
import Fetcher     from '../helpers/fetcher';

export default class DesignsActions {
  static get FETCH_DESIGNS() { return 'FETCH_DESIGNS'; }

  static fetch(filters = {}) {
    const self   = this;
    const action = { type: this.FETCH_DESIGNS };
    return (dispatch) => {
      dispatch(action);
      const baseUrl = 'http://search.spoonflower.com/searchv2/designs.json';
      const params  = queryString.stringify(filters);
      return Fetcher.fetch(`${baseUrl}?${params}`)
             .then(response => response.json())
             .then(json => dispatch(self.receive(json)))
             .catch(error => dispatch(self.receive({ error })));
    };
  }

  static receive(json) {
    const action = { type: this.FETCH_DESIGNS };
    if (json.error) {
      action.status = 'error';
    } else {
      action.status  = 'success';
      action.results = json.results || [];
    }
    return action;
  }
};
