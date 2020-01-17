import {getAllFAQs} from './faqs.api';
import {getAll as getAllPujas} from './pujas.api';
import {send as sendOTP, verify as verifyOTP} from './otp.api';
import {payment} from './payments.api';

export {getAllFAQs, getAllPujas, sendOTP, verifyOTP, payment};
