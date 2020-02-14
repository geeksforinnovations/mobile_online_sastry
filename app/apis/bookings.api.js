import {API} from 'aws-amplify';

export const getAll = () => {
  return API.get('dev', 'bookings');
};

export const getByPhone = phoneNumber => {
  return API.get('dev', `bookings/${phoneNumber}`);
};

export const createBooking = async body => {
  body.addressLine1 = 'test';
  body.addressLine2 = 'test';
  body.language = body.languageId.toString();
  body.requirePujaType = body.pujaType;
  body.videoCallUserName = body.videoCallUsername;
  body.bookingDate = new Date(body.bookingDate).toLocaleDateString();

  let myInit = {
    body,
    headers: {}, // OPTIONAL
  };
  try {
    return await API.post('dev', 'bookings', myInit);
  } catch (er) {
    console.error('err while booking', er);
    throw er;
  }
};

export const cancelBooking = async bookinId => {
  return await API.put('dev', `bookings/cancel/${bookinId}`);
};

export const updateBooking = async booking => {
  const reqBody = {
    body: booking,
  };
  console.log('udate booking req', booking);
  return await API.patch('dev', 'bookings', reqBody);
};
