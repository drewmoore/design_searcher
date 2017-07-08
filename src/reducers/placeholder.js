const defaultState = {
  message: 'Yo, World!'
};

const placeholder = (state = defaultState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default placeholder;
