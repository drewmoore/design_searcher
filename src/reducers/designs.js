const defaultState = {
  items:      [],
  isFetching: false,
  error:      null
};

const placeholder = (state = defaultState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default placeholder;
