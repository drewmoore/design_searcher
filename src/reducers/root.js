import { combineReducers } from 'redux';
import filters             from './filters';
import designs             from './designs';

const root = combineReducers({ filters, designs });

export default root;
