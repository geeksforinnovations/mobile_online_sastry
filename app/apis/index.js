import {getAll as getAllFAQs} from './faqs.api';
import {getAll as getAllPujas} from './pujas.api';
import {send as sendOTP, verify as verifyOTP} from './otp.api'

export {getAllFAQs, getAllPujas, sendOTP, verifyOTP};
