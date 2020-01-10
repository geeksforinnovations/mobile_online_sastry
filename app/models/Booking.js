import validator from 'validator';

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
    return '';
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
    );
  }

  // Static Properties

  static Type = {
    Online: 'Online',
    AtHome: 'AtHome',
  };
}
