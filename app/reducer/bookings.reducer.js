import { BookingActions } from './../actions/constants'

const initialState = {
  newBooking: null,
  availableBookings:[]
};

export default function bookings(state = initialState, action = {}) {
  switch (action.type) {
    case BookingActions.SET_NEW_BOOKINGL:
      return { ...state, newBooking: action.booking }
      case BookingActions.SET_ALLBOOKINGS:
        return { ...state, availableBookings: action.availableBookings }
    default:
      return state;

  }
}
