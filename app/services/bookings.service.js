import { createBooking as postBooking, getAll, getByPhone, cancelBooking , updateBooking} from "../apis";
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




async function resheduleBooking(booking) {
   return await updateBooking(booking);
}

async function cancleBooking(id) {
    return await cancelBooking(id);
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
        return new Booking(booking.id, Number(booking.pujaId), Number(booking.language), booking.name, booking.phoneNumber, booking.bookingDate, null, booking.pujaType, booking.videoCallUsername, booking.puja)
    })
}



export { createBooking, getAllBookings, resheduleBooking, cancleBooking, confirmBooking, getAllByPhone }