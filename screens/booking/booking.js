import React, {Component} from 'react';
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
} from 'native-base';
import {G4IHeader} from '../header/appHeader';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Booking} from '../../app/models';
import {connect} from 'react-redux';

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    const {selectedPuja} = this.props;
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
    };
  }

  showDateTimePicker = () => {
    this.setState({isPickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isPickerVisible: false});
  };

  handleDatePicked = date => {
    console.log('A date has been picked:ddd ', date);
    const {booking} = this.state;
    booking.bookingDate = date;
    this.updateBooking(booking, false);
  };

  updateBooking = (booking, isPickerVisible = false) => {
    this.setState({booking, isPickerVisible});
  };

  updatePujaType = pujaType => {
    const {booking} = this.state;
    booking.pujaType = pujaType;
    this.updateBooking(booking);
  };
  updatePhoneNumber = phoneNumber => {
    // alert(phoneNumber);
    const {booking} = this.state;
    booking.phoneNumber = phoneNumber;
    this.updateBooking(booking);
  };
  updateSkypeId = videoCallUsername => {
    // alert(phoneNumber);
    const {booking} = this.state;
    booking.videoCallUsername = videoCallUsername;
    this.updateBooking(booking);
  };
  updateAddress = address => {
    // alert(phoneNumber);
    const {booking} = this.state;
    booking.address = address;
    this.updateBooking(booking);
  };
  onLanguageSelect = languageId => {
    const {booking} = this.state;
    booking.languageId = languageId;
    this.updateBooking(booking);
  };
  updateName = name => {
    const {booking} = this.state;
    booking.name = name;
    this.updateBooking(booking);
  };

  render() {
    const {booking} = this.state;
    const {selectedPuja} = this.props;
    const {languages} = selectedPuja;
    return (
      <Container>
        <G4IHeader
          left={'back'}
          right={null}
          title={'Booking'}
          {...this.props}
        />

        <Content style={{margin: 10}}>
          <H3 style={{marginVertical: 10}}> Puja Date</H3>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button
              style={{flex: 4, justifyContent: 'flex-start'}}
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
                  style={{color: '#e69b3a'}}
                  type="MaterialCommunityIcons"
                  name="calendar"
                />
                <Text style={{fontSize: 10, color: '#e69b3a'}}>Check days</Text>
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

          <H3 style={{marginVertical: 10}}> Language</H3>
          <Item regular style={{borderWidth: 1, borderColor: '#e69b3a'}}>
            <Icon
              active
              type="FontAwesome5"
              style={{color: '#e69b3a'}}
              name="language"
            />
            <Picker
              style={{color: '#e69b3a'}}
              note
              mode="dropdown"
              selectedValue={booking.languageId}
              onValueChange={this.onLanguageSelect}>
              {languages.map(language => {
                return (
                  <Picker.Item label={language.name} value={language.id} />
                );
              })}
            </Picker>
          </Item>

          <H3 style={{marginVertical: 10}}> Full Name</H3>
          <Item regular style={{borderWidth: 1, borderColor: '#e69b3a'}}>
            <Icon
              active
              style={{color: '#e69b3a'}}
              type="MaterialCommunityIcons"
              name="contacts"
            />
            <Input
              placeholderTextColor="#e69b3a"
              style={{color: '#e69b3a', borderColor: '#e69b3a'}}
              value={booking.name}
              placeholder="Name"
              onChangeText={this.updateName}
            />
          </Item>

          <H3 style={{marginVertical: 10}}> Phone Number</H3>
          <Item regular style={{borderWidth: 1, borderColor: '#e69b3a'}}>
            <Icon active style={{color: '#e69b3a'}} name="call" />
            <Input
              placeholderTextColor="#e69b3a"
              style={{color: '#e69b3a', borderColor: '#e69b3a'}}
              value={booking.phoneNumber}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              onChangeText={this.updatePhoneNumber}
            />
          </Item>

          <H3 style={{marginVertical: 10}}> Puja Location</H3>
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
              <H3 style={{marginVertical: 10}}> Skype ID</H3>
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
              <H3 style={{marginVertical: 10}}> Home Address</H3>
              <Item regular>
                {/* <Icon active name="address" /> */}
                <Textarea
                  style={{flex: 1}}
                  rowSpan={5}
                  bordered
                  onChangeText={this.updateAddress}
                  placeholder="Enter address for puja"
                />
              </Item>
            </>
          )}

          <View style={{marginTop: 10, flex: 1}}>
            <Button full onPress={() => this.props.navigation.push('OTP')}>
              <Text>Confirm</Text>
            </Button>
          </View>
          {/* <View style={{marginTop: 10, flex: 1}}>
            <Button full onPress={() => this.props.navigation.push('Payment')}>
              <Text>Pay</Text>
            </Button>
          </View> */}
          <View>
            <Text>{JSON.stringify(booking)}</Text>
            <Text>{JSON.stringify(this.props.selectedPuja)}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedPuja: state.pujas.selectedPuja,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   updateAllPujas: pujas => dispatch(updateAllPujas(pujas)),
//   updateSelectedPuja: puja => dispatch(updateSelectedPuja(puja)),
// });

export default connect(
  mapStateToProps,
  null,
)(BookingScreen);
