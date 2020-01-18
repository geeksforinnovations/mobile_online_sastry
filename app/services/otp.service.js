import { sendOTP as send, verifyOTP as verify } from '../apis';

// returns all pujas with modal object
async function sendOTP(phoneNumber) {
  return await send(phoneNumber);
}

async function verifyOTP(phoneNumber, otp) {
  try {
    return await verify(phoneNumber, otp);
  }
  catch (error) {
    return error
  }

}

function isValidOTP(otp) {
  return otp.status === 'approved'

}

export { sendOTP, verifyOTP , isValidOTP};
