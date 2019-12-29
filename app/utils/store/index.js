import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

export default (reducers, initialState = {}) => createStore(combineReducers(reducers), fromJS(initialState));
