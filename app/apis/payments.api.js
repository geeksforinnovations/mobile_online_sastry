import {API} from 'aws-amplify';

export const payment = async (pujaId, token) => {
  const req = {
    body: {
      pujaId,
      source: token,
    },
  };
  return await API.post('dev', 'payment', req);
};
