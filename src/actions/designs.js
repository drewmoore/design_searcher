import Fetcher from '../helpers/fetcher';

export default class DesignsActions {
  static get FETCH_DESIGNS() { return 'FETCH_DESIGNS'; }

  static fetch() {
    const self   = this;
    const action = { type: this.FETCH_DESIGNS };
    return (dispatch) => {
      dispatch(action);
      // TODO: replace with base url and params from form:
      const tempURL = 'http://search.spoonflower.com/searchv2/designs.json?offset=7&limit=3&sort=freshtastic&substrate=gift_wrap&view=project';
      return Fetcher.fetch(tempURL)
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
