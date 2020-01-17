import React, { Component } from 'react';
import {
  Container,
  Text,
  Button,
  Content,
  H3,
  View,
  Item,
  Input,
  Textarea,
  Icon,
  Picker,
  Footer,
  FooterTab,
  Toast,
} from 'native-base';
import { G4IHeader } from '../header/appHeader';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Booking } from '../../app/models';
import { connect } from 'react-redux';
import { updateNewBooking } from '../../app/actions/bookings.action';
import { sendOTP } from '../../app/services/otp.service';

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    const { selectedPuja } = this.props;
    this.state = {
      isPickerVisible: false,
      date: null,
      booking: Booking.newBooking(
        null,
        selectedPuja.id,
        selectedPuja.defaultLanguageId,
        null,
        null,
        null,
        null,
        Booking.Type.Online,
        null,
      ),
      availableCountries: [{ name: 'IN', val: '+91' }, { name: 'US', val: '+1' }],
      selecedCountry: '+1',
    };
  }

  showDateTimePicker = () => {
    this.setState({ isPickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isPickerVisible: false });
  };

  handleDatePicked = date => {
    console.log('A date has been picked:ddd ', date);
    const { booking } = this.state;
    booking.bookingDate = date;
    this.updateBooking(booking, false);
  };

  updateBooking = (booking, isPickerVisible = false) => {
    this.setState({ booking, isPickerVisible });
  };

  updatePujaType = pujaType => {
    const { booking } = this.state;
    booking.pujaType = pujaType;
    this.updateBooking(booking);
  };
  updatePhoneNumber = phoneNumber => {
    // alert(phoneNumber);
    const { booking } = this.state;
    booking.phoneNumber = phoneNumber;
    this.updateBooking(booking);
  };
  updateSkypeId = videoCallUsername => {
    // alert(phoneNumber);
    const { booking } = this.state;
    booking.videoCallUsername = videoCallUsername;
    this.updateBooking(booking);
  };
  updateAddress = address => {
    // alert(phoneNumber);
    const { booking } = this.state;
    booking.address = address;
    this.updateBooking(booking);
  };
  onLanguageSelect = languageId => {
    const { booking } = this.state;
    booking.languageId = languageId;
    this.updateBooking(booking);
  };
  updateName = name => {
    const { booking } = this.state;
    booking.name = name;
    this.updateBooking(booking);
  };

  showToaster = () => {
    Toast.show({
      text: 'OTP Sent to your phone',
      buttonText: 'Okay',
      type: 'success',
    });
  };

  onConfirmBooking = async () => {
    this.props.updateNewBooking(this.state.booking);
    const response = await sendOTP(
      this.state.selecedCountry + this.state.booking.phoneNumber,
    );
    console.log('otp response :', response)
    this.showToaster();
    //console.log('OTP send resp', response)
    this.props.navigation.push('OTP', { countryCode: this.state.selecedCountry });
  };

  onCountrySelect = val => {
    this.setState({ selecedCountry: val });
  };
  render() {
    const { booking } = this.state;
    const { selectedPuja } = this.props;
    const { languages } = selectedPuja;
    return (
      <Container>
        <G4IHeader
          left={'back'}
          right={null}
          title={'Booking'}
          {...this.props}
        />

        <Content style={{ margin: 10 }}>
          <H3 style={{ marginVertical: 10 }}> Puja Date</H3>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button
              style={{ flex: 4, justifyContent: 'flex-start' }}
              bordered
              onPress={this.showDateTimePicker}>
              <Icon
                type="MaterialCommunityIcons"
                name="calendar-check-outline"
              />
              <Text>
                {booking.bookingDate
                  ? booking.bookingDate.toDateString()
                  : 'Select Date'}
              </Text>
            </Button>
            <Button
              bordered
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e69b3a',
              }}
              onPress={() => this.props.navigation.push('Calendar')}
              iconLeft
              transparent>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{ color: '#e69b3a' }}
                  type="MaterialCommunityIcons"
                  name="calendar"
                />
                <Text style={{ fontSize: 10, color: '#e69b3a' }}>Check days</Text>
              </View>

              {/* <Text>Check days</Text> */}
            </Button>
            {/* <Text>Check daysssss</Text> */}
          </View>

          <DateTimePicker
            isVisible={this.state.isPickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />

          <H3 style={{ marginVertical: 10 }}> Language</H3>
          <Item regular style={{ borderWidth: 1, borderColor: '#e69b3a' }}>
            <Icon
              active
              type="FontAwesome5"
              style={{ color: '#e69b3a' }}
              name="language"
            />
            <Picker
              style={{ color: '#e69b3a' }}
              note
              mode="dropdown"
              selectedValue={booking.languageId}
              onValueChange={this.onLanguageSelect}>
              {languages.map((language, i) => {
                return (
                  <Picker.Item
                    key={`lang_${i}`}
                    label={language.name}
                    value={language.id}
                  />
                );
              })}
            </Picker>
          </Item>

          <H3 style={{ marginVertical: 10 }}> Full Name</H3>
          <Item regular style={{ borderWidth: 1, borderColor: '#e69b3a' }}>
            <Icon
              active
              style={{ color: '#e69b3a' }}
              type="MaterialCommunityIcons"
              name="contacts"
            />
            <Input
              placeholderTextColor="#e69b3a"
              style={{ color: '#e69b3a', borderColor: '#e69b3a' }}
              value={booking.name}
              placeholder="Name"
              onChangeText={this.updateName}
            />
          </Item>

          <H3 style={{ marginVertical: 10 }}> Phone Number</H3>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ flex: 1 }}>Country:</Text>
            <Picker
              style={{
                color: '#e69b3a',
                width: 30,
                borderColor: 'red',
                borderWidth: 1,
                flex: 1,
              }}
              note
              mode="dropdown"
              selectedValue={this.state.selecedCountry}
              onValueChange={this.onCountrySelect}>
              {this.state.availableCountries.map((country, i) => {
                return (
                  <Picker.Item
                    key={`lang_${i}`}
                    label={country.name}
                    value={country.val}
                  />
                );
              })}
            </Picker>
            <Text style={{ flex: 2 }} />
          </View>
          <Item regular style={{ borderWidth: 1, borderColor: '#e69b3a' }}>
            <Icon active style={{ color: '#e69b3a' }} name="call" />
            <Text style={{ color: '#e69b3a' }}>{this.state.selecedCountry}</Text>
            <Input
              maxLength={10}
              placeholderTextColor="#e69b3a"
              style={{ color: '#e69b3a', borderColor: '#e69b3a' }}
              value={booking.phoneNumber}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              onChangeText={this.updatePhoneNumber}
            />
          </Item>

          <H3 style={{ marginVertical: 10 }}> Puja Location</H3>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              bordered={booking.pujaType !== Booking.Type.Online}
              onPress={() => this.updatePujaType(Booking.Type.Online)}
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                borderRadius: 5,
                marginHorizontal: 2,
              }}>
              <Icon active type="Ionicons" name="globe" />
              <Text>Online</Text>
            </Button>
            <Button
              bordered={booking.pujaType !== Booking.Type.AtHome}
              onPress={() => this.updatePujaType(Booking.Type.AtHome)}
              style={{
                flex: 1,
                // alignSelf: 'flex-start',
                justifyContent: 'flex-start',
                borderRadius: 5,
                marginHorizontal: 2,
              }}>
              <Icon active type="Ionicons" name="home" />
              <Text>At Home</Text>
            </Button>
          </View>

          {booking.isAtOnline() ? (
            <>
              <H3 style={{ marginVertical: 10 }}> Skype ID</H3>
              <Item regular>
                <Icon active name="logo-skype" />
                <Input
                  onChangeText={this.updateSkypeId}
                  autoCompleteType="username"
                  placeholder="Skype Id"
                />
              </Item>
            </>
          ) : (
              <>
                <H3 style={{ marginVertical: 10 }}> Home Address</H3>
                <Item regular>
                  {/* <Icon active name="address" /> */}
                  <Textarea
                    style={{ flex: 1 }}
                    rowSpan={5}
                    bordered
                    onChangeText={this.updateAddress}
                    placeholder="Enter address for puja"
                  />
                </Item>
              </>
            )}

        </Content>
        <Footer>
          <FooterTab>
            <Button
              disabled={!this.state.booking.isValidToBook()}
              full
              onPress={this.onConfirmBooking}>
              <Text>Confirm</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedPuja: state.pujas.selectedPuja,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNewBooking: pujas => dispatch(updateNewBooking(pujas)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookingScreen);
