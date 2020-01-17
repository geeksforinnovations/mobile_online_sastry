import {API} from 'aws-amplify';

export const send = phNumber => {
  return API.get('dev', `veify/${phNumber}`);
};

export const verify = (phoneNumber, otp) => {
  const req = {
    body: {
      phoneNumber,
      code: otp,
    },
  };
  return API.post('dev', 'veify', req);
};
