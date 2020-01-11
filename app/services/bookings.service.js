import { createBooking as postBooking, getAll, getByPhone } from "../apis/bookings.api";
import { Booking } from "../models";

// returns all pujas with modal object
async function getAllBookings() {
    const {data} = await getAll();
    return convertBookings(data);
}

async function getAllByPhone(phoneNumber) {
    const {data} = await getByPhone(phoneNumber);
    return convertBookings(data);
}

async function createBooking(booking) {
    const pujas = await postBooking(booking);
    return pujas
}


async function getAllByPhnumber() {
    const pujas = await fetchAll();
}

async function updateBooking() {
    const pujas = await fetchAll();
}

async function cancleBooking() {
    const pujas = await fetchAll();
}

async function confirmBooking(newBooking) {
    const { data } = await createBooking(newBooking)
    console.log('dataaa', data)
    if (data) {
        return data
    }
    else {
        alert("got server exception")
    }
}

function convertBookings(bookings){
    return bookings.map(booking => {
        return new Booking(booking.bind, Number(booking.pujaId), Number(booking.language), booking.name, booking.phoneNumber, booking.bookingDate, null, booking.pujaType, booking.videoCallUsername)
    })
}



export { createBooking, getAllBookings, getAllByPhnumber, updateBooking, cancleBooking, confirmBooking, getAllByPhone }