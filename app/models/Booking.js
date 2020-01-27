import validator from 'validator';
import {isNullOrEmpty} from '../utils/validator';
import Puja from './Puja';

export default class Booking {
  constructor(
    id = null,
    pujaId,
    languageId,
    name,
    phoneNumber,
    bookingDate,
    address,
    pujaType,
    videoCallUsername,
    status,
    puja,
  ) {
    this.id = id;
    this.pujaId = pujaId;
    this.languageId = languageId;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.bookingDate = bookingDate;
    this.address = address;
    this.pujaType = pujaType;
    this.videoCallUsername = videoCallUsername;
    this.status = status;
    this.puja = new Puja(
      puja.id,
      puja.name,
      null,
      null,
      puja.timeInHrs,
      null,
      puja.pujaType,
      puja.cost,
      null,
      [],
    );
  }
  isNewPuja() {
    return this.id === null;
  }
  isAddressRequired() {
    return this.isAtHome();
  }
  isUserNameRequired() {
    return this.isAtOnline();
  }

  isAtOnline() {
    return this.pujaType === Booking.Type.Online;
  }

  isAtHome() {
    return this.pujaType === Booking.Type.AtHome;
  }

  isValidToBook() {
    //return validator.isEmail();
    return !(
      isNullOrEmpty(this.name) ||
      isNullOrEmpty(this.phoneNumber) ||
      isNullOrEmpty(this.bookingDate) ||
      isNullOrEmpty(this.videoCallUsername)
    );
  }

  isValidPhone() {
    return validator.isMobilePhone(this.phoneNumber);
  }

  // Static Methods
  static newBooking(
    id = null,
    pujaId = null,
    languageId = null,
    name = null,
    phoneNumber = null,
    bookingDate = null,
    address = null,
    pujaType = null,
    videoCallUsername = null,
    status = 'Active',
    puja = new Puja(),
  ) {
    return new Booking(
      id,
      pujaId,
      languageId,
      name,
      phoneNumber,
      bookingDate,
      address,
      pujaType,
      videoCallUsername,
      status,
      puja,
    );
  }

  // Static Properties

  static Type = {
    Online: 'Online',
    AtHome: 'AtHome',
  };
}
