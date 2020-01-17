import { AppActions } from './../actions/constants'

const initialState = {
  spinner:{
      show: false,
      message:''
  }
};

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case AppActions.SET_SPINNER:
      return { ...state, spinner: action.spinner }
    default:
      return state;

  }
}
