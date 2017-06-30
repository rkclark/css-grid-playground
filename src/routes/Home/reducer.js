import { counter as types } from '../../actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
