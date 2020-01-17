import { UserActions } from './../actions/constants'

const initialState = {
  user: null
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case UserActions.SET_USER:
      return { ...state, user: action.user }
    default:
      return state;

  }
}
