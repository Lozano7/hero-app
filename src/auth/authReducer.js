import { types } from '../types/types';

const actionOptions = {
  [types.login](action) {
    return {
      ...action.payload,
      logged: true,
    };
  },
  [types.logout](action) {
    return {
      logged: false,
    };
  },
};

export default function authReducer(state = {}, action) {
  if (actionOptions.hasOwnProperty(action.type)) {
    return actionOptions[action.type](action);
  } else {
    return state;
  }
}
