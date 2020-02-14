import {getAllFAQs} from './faqs.api';
import {getAll as getAllPujas} from './pujas.api';
import {
  getAll as getAllBookings,
  getByPhone,
  createBooking,
  cancelBooking,
  updateBooking,
} from './bookings.api';
import {send as sendOTP, verify as verifyOTP} from './otp.api';
import {payment} from './payments.api';

export {
  createBooking,
  getAllBookings,
  getByPhone,
  cancelBooking,
  updateBooking,
  getAllFAQs,
  getAllPujas,
  sendOTP,
  verifyOTP,
  payment,
};
