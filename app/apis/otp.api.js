import {API} from 'aws-amplify';

export const send = async phNumber => {
  return await API.get('dev', `veify/${phNumber}`);
};

export const verify = async (phoneNumber, otp) => {
  const req = {
    body: {
      phoneNumber,
      code: otp,
    },
  };
  const x= await API.post('dev', 'veify', req);
  return x;
};
