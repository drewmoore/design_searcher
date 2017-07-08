export default class DesignsActions {
  static get FETCH_DESIGNS() { return 'FETCH_DESIGNS'; }

  static fetch() {
    const self = this;
    const action = {
      type: this.FETCH_DESIGNS
    };
    return (dispatch) => {
      dispatch(action);

      const resolver = () => {
        return dispatch(self.receive());
      };

      return Promise.resolve(new Promise((res) => {
        setTimeout(() => res(resolver()), 1000);
      }));
    };
  }

  static receive() {
    return {
      type:   this.FETCH_DESIGNS,
      status: 'success',
      items:  { 0: { id: 1 }, 1: { id: 1 }}
    };
  }
};
