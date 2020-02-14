import {BookingActions} from './../actions/constants';

const initialState = {
  newBooking: null,
  availableBookings: [],
  selectedBooking: null,
};

export default function bookings(state = initialState, action = {}) {
  switch (action.type) {
    case BookingActions.SET_NEW_BOOKINGL:
      return {...state, newBooking: action.booking};
    case BookingActions.SET_ALLBOOKINGS:
      return {...state, availableBookings: action.availableBookings};
    case BookingActions.SET_SELECTED_BOOKING:
      return {...state, selectedBooking: action.selectedBooking};
    default:
      return state;
  }
}
