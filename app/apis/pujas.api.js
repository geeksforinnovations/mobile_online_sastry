import {API} from 'aws-amplify';

export const getAll = async () => {
  return await API.get('dev', 'pujas');
};
