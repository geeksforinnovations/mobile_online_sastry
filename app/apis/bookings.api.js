import {API} from 'aws-amplify';

export const getAll = () => {
  return API.get('dev', 'Booking');
};

export const getByPhone = phoneNumber => {
  return API.get('dev', `Booking/${phoneNumber}`);
};

export const createBooking = body => {
  (body.addressLine1 = 'test'), (body.addressLine2 = 'test');
  body.language = body.languageId.toString();
  body.requirePujaType = body.pujaType
  body.bookingDate = new Date(body.bookingDate).toLocaleDateString()
  // body.bookingDate = body.bookingDate.toString()
  console.log('Request Body', body);
  let myInit = {
    body,
    headers: {}, // OPTIONAL
  };
  return API.post('dev', 'Booking', myInit);
};
