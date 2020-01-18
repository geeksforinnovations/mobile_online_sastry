import { API } from 'aws-amplify';

export const getAll = () => {
  return API.get('dev', 'Booking');
};

export const getByPhone = phoneNumber => {
  return API.get('dev', `Booking/${phoneNumber}`);
};

export const createBooking = body => {
  body.addressLine1 = 'test';
  body.addressLine2 = 'test';
  body.language = body.languageId.toString();
  body.requirePujaType = body.pujaType
  body.bookingDate = new Date(body.bookingDate).toLocaleDateString()
  let myInit = {
    body,
    headers: {}, // OPTIONAL
  };
  return API.post('dev', 'Booking', myInit);
};

export const cancelBooking = async (bookinId) => {
  return await API.put('dev', `Booking/cancel/${bookinId}`);
}

export const updateBooking = async (booking) => {
  const reqBody = {
    body: booking
  }
  return await API.patch('dev', `Booking`, reqBody);
}
