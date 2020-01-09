import React, {Component} from 'react';
import {
  Container,
  Text,
  Button,
  H2,
  Content,
  H3,
  View,
  Item,
  Input,
  Textarea,
  Icon,
} from 'native-base';
import {G4IHeader} from '../header/appHeader';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      date: null,
      location: 'home',
    };
  }
  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  handleDatePicked = date => {
    console.log('A date has been picked:ddd ', date);
    this.setState({date, isDateTimePickerVisible: false});
  };
  CheckLocation = location => {
    this.setState({
      location,
    });
  };
  render() {
    return (
      <Container>
        <G4IHeader
          left={'back'}
          right={null}
          title={'Booking'}
          {...this.props}
        />
        {/* <Text>hello</Text> */}
        <Content style={{margin: 10}}>
          <H3 style={{marginVertical: 10}}> Puja Date</H3>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button
              style={{flex: 5}}
              bordered
              onPress={this.showDateTimePicker}>
              <Text>
                {this.state.date
                  ? this.state.date.toDateString()
                  : 'Select Date'}
              </Text>
            </Button>
            <Button
              bordered
              style={{flex: 1}}
              onPress={() => this.props.navigation.push('Calendar')}
              iconLeft
              transparent>
              <Icon
                type="MaterialCommunityIcons"
                name="calendar-check-outline"
              />
            </Button>
          </View>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />

          <H3 style={{marginVertical: 10}}> Phone Number</H3>
          <Item regular>
            <Input placeholder="Phone Nuber" keyboardType="phone-pad" />
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
              bordered={this.state.location !== 'online'}
              onPress={() => this.CheckLocation('online')}
              style={{flex: 1, borderRadius: 5, marginHorizontal: 2}}>
              <Text>Online</Text>
            </Button>
            <Button
              bordered={this.state.location !== 'home'}
              onPress={() => this.CheckLocation('home')}
              style={{flex: 1, borderRadius: 5, marginHorizontal: 2}}>
              <Text>At Home</Text>
            </Button>
          </View>

          {this.state.location == 'online' ? (
            <>
              <H3 style={{marginVertical: 10}}> Skype ID</H3>
              <Item regular>
                <Input autoCompleteType="username" placeholder="Skype Id" />
              </Item>
            </>
          ) : (
            <>
              <H3 style={{marginVertical: 10}}> Home Address</H3>
              <Item regular>
                <Textarea
                  style={{flex: 1}}
                  rowSpan={5}
                  bordered
                  placeholder="Textarea"
                />
              </Item>
            </>
          )}

          <View style={{marginTop: 10, flex: 1}}>
            <Button full onPress={() => this.props.navigation.push('OTP')}>
              <Text>Confirm</Text>
            </Button>
          </View>
          <View style={{marginTop: 10, flex: 1}}>
            <Button full onPress={() => this.props.navigation.push('Payment')}>
              <Text>Pay</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
