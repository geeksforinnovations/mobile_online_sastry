import {API} from 'aws-amplify';

export const getAllPujas = async () => {
  // alert(2);
  return await API.get('dev', 'pujas');
};


export const getAllFAQs = async () => {
  return await API.get('dev','faqs')
}