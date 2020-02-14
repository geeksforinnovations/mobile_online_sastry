import {BookingActions} from './constants';

export const updateNewBooking = booking => ({
  type: BookingActions.SET_NEW_BOOKINGL,
  booking,
});

export const updateAvailableBookings = availableBookings => ({
  type: BookingActions.SET_ALLBOOKINGS,
  availableBookings,
});

export const clearNewBooking = () => {
  return updateNewBooking(null);
};

export const removeBooking = id => (dispatch, getState) => {
  const bookings = getState().bookings.availableBookings;
  const filterted = bookings.filter(booking => booking.id != id);
  dispatch(updateAvailableBookings(filterted));
};

export const updateSelectedBooking = booking => ({
  type: BookingActions.SET_SELECTED_BOOKING,
  selectedBooking: booking,
});
