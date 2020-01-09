export default class Booking {
  constructor(id, pujaId, languageId, name, phoneNumber, bookingDate, address) {
    this.id = id;
    this.pujaId = pujaId;
    this.languageId = languageId;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.bookingDate = bookingDate;
    this.address = address;
  }
}
