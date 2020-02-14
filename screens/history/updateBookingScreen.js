import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {G4IHeader} from '../header/appHeader';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  Button,
  Container,
  Content,
  Footer,
  Text,
  FooterTab,
  H3,
  Icon,
} from 'native-base';
import {hideSpinner, showSpinner} from '../../app/actions/app.actions';
import {resheduleBooking} from '../../app/services';

class UpdateBookingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPickerVisible: false,
      selectedBooking: this.props.selectedBooking,
    };
  }
  showDateTimePicker = () => {
    this.setState({isPickerVisible: true});
  };

  hideDateTimePicker = () => {
    this.setState({isPickerVisible: false});
  };
  handleDatePicked = date => {
    const {selectedBooking} = this.state;
    selectedBooking.bookingDate = date;
    this.setState({selectedBooking});
  };

  updateBooking = async () => {
    this.props.showSpinner("re-sheduling puja")
    const a = await resheduleBooking(this.state.selectedBooking);
    console.log('update respo', a);
    this.props.hideSpinner()
    this.props.navigation.goBack(null)
  };

  hasModifiedDate = () => {
    const selectedBooking = this.props;
    const updatedBooking = this.state.selectedBooking;
    return true;
    // return (
    //   new Date(selectedBooking.bookingDate).toDateString() !==
    //   new Date(updatedBooking.bookingDate).toDateString()
    // );
  };
  render() {
    const {spinner} = this.props;
    const {selectedBooking} = this.state;
    return (
      <>
        <Container>
          <G4IHeader  title={'Update Booking'} {...this.props} />
          <Content style={{margin: 8}}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <Spinner
                textContent={spinner.message}
                visible={spinner.show}
                color="#e69b3a"
              />
              <View>
                <Text>Do you want to change Date ?</Text>

                <Button
                  style={{flex: 4, justifyContent: 'flex-start'}}
                  bordered
                  onPress={this.showDateTimePicker}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="calendar-check-outline"
                  />
                  <Text>
                    {selectedBooking.bookingDate
                      ? new Date(selectedBooking.bookingDate).toLocaleDateString()
                      : 'Select Date'}
                  </Text>
                </Button>
                <DateTimePicker
                  minimumDate={new Date()}
                  isVisible={this.state.isPickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                  value={new Date(selectedBooking.bookingDate)}
                />
              </View>
            </ScrollView>
          </Content>
          <Footer>
            <FooterTab>
              <Button full onPress={this.updateBooking}>
                <H3>Update Booking</H3>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedBooking: state.bookings.selectedBooking,
  spinner: state.app.spinner,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  showSpinner: message => dispatch(showSpinner(message)),
  hideSpinner: () => dispatch(hideSpinner()),
  // resheduleBooking: booking => dispatch(resheduleBooking(booking)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateBookingScreen);
