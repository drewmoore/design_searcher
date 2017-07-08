import { combineReducers } from 'redux';

const defaultState = {
  message: 'Yo, World!'
};

const placeholder = (state = defaultState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

const root = combineReducers({ placeholder });

export default root;
