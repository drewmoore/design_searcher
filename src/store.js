import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root  from './reducers/root';

const middleWare = applyMiddleware(thunk);
const store      = createStore(root, {}, middleWare);

export default store;
