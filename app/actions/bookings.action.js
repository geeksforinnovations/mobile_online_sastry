import { BookingActions } from "./constants";

export const updateNewBooking = (booking) => ({
    type: BookingActions.SET_NEW_BOOKINGL,
    booking
});

export const updateAvailableBookings = (availableBookings) => ({
    type: BookingActions.SET_ALLBOOKINGS,
    availableBookings
})

export const clearNewBooking = () => {
    return updateNewBooking(null)
}