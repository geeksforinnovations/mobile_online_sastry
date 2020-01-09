import {API} from 'aws-amplify';

export const getAll = () => {
  return API.get('dev', 'faqs');
};
