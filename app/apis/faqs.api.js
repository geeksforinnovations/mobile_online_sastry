import {API} from 'aws-amplify';

export const getAllFAQs = async () => {
  return await API.get('dev', 'faqs');
};
