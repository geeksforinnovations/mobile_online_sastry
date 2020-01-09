export default class Booking {
  constructor(
    id = null,
    pujaId,
    languageId,
    name,
    phoneNumber,
    bookingDate,
    address,
    requiredPujaType,
    videoCallUsername,
  ) {
    this.id = id;
    this.pujaId = pujaId;
    this.languageId = languageId;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.bookingDate = bookingDate;
    this.address = address;
    this.requiredPujaType = requiredPujaType;
    this.videoCallUsername = videoCallUsername;
  }
  isNewPuja() {
    return this.id === null;
  }
  isAddressRequired() {
    return this.requiredPujaType === 'AtHome';
  }
  isUserNameRequired() {
    return this.requiredPujaType === 'Online';
  }

  isValidToBook() {
    return '';
  }
}
