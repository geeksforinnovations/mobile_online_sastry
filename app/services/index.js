import { getAllPujas } from './pujas.service';
import { createBooking, getAllBookings,  getAllByPhone, cancleBooking, updateBooking } from "./bookings.service";
import {isValidOTP} from './otp.service';
export {
    getAllPujas,
    createBooking, getAllBookings, getAllByPhone, updateBooking, cancleBooking,
    isValidOTP,
};
