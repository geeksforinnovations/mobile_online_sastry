import { PujaActions } from './../actions/constants'
// const availablePujas = [
//   { id: 1, name: 'qww', price: '2400', description: 'puja description', requiredTime: '5' },
//   { id: 2, name: 'pujsdadd2', price: '2400', description: 'puja description', requiredTime: '15' },
// ];
const initialState = {
  availablePujas: [],
  selectedPuja: {}
};

export default function pujas(state = initialState, action = {}) {
  switch (action.type) {
    case PujaActions.UPDATE_ALL_PUJAS:
      return { ...state, availablePujas: action.pujas }
      case PujaActions.UPDATE_SELECTED_PUJA:
        return { ...state, selectedPuja: action.puja }
    default:
      return state;

  }
}
