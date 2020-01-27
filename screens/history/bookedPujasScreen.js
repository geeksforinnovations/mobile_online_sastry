import React from 'react';
import {ScrollView, Alert} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import {G4IHeader} from '../header/appHeader';
import HistoryPujaCard from './hostoryPujaCard';
import {Text, Tab, Tabs, Container} from 'native-base';
import {getAllByPhone, cancleBooking} from '../../app/services';
import {updateUser} from '../../app/actions/user.action';
import {
  updateAvailableBookings,
  removeBooking,
} from '../../app/actions/bookings.action';
import {showSpinner, hideSpinner} from '../../app/actions/app.actions';

class BookedPujasScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const user = this.props.user;
    this.props.showSpinner('loading Pujas..');
    const bookings = await getAllByPhone('9700944994');
    this.props.updateAvailableBookings(bookings);
    this.props.hideSpinner();
  }

  cancleBooking = async id => {
    // Enable once API is Up
    this.props.showSpinner('cancel puja');
    const response = await cancleBooking(id);
    console.log('cancle resp', response);
    this.props.removeBooking(id);
    this.props.hideSpinner();
  };

  onCancleClick = id => {
    Alert.alert(
      'Booking History',
      'Do you want to cancle selected Booking',
      [
        {text: 'Yes', onPress: () => this.cancleBooking(id)},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
    //this.props.navigation.push('UpdateBooking');
  };

  render() {
    const {spinner} = this.props;
    return (
      <>
        <Container>
          <G4IHeader
            left={'menu'}
            title={'Booked Puja Hostory'}
            {...this.props}
          />

          <Tabs>
            <Tab heading="Upcoming">
              <Spinner
                textContent={spinner.message}
                visible={spinner.show}
                color="#e69b3a"
              />

              <ScrollView contentInsetAdjustmentBehavior="automatic">
                {this.props.availableBookings.map((booking, i) => {
                  return booking.status == 'Active' ? (
                    <HistoryPujaCard
                      key={`hostory_${i}`}
                      booking={booking}
                      onCancle={() => this.onCancleClick(booking.id)}
                    />
                  ) : null;
                })}
              </ScrollView>
            </Tab>
            <Tab heading="History">
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                {[1].map((a, i) => {
                  return <HistoryPujaCard key={`history_${i}`} />;
                })}
              </ScrollView>
            </Tab>
            <Tab heading="Cancled">
              <Text>Booked puja screen</Text>
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user.user,
  availableBookings: state.bookings.availableBookings,
  spinner: state.app.spinner,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateAvailableBookings: bookings =>
    dispatch(updateAvailableBookings(bookings)),
  removeBooking: id => dispatch(removeBooking(id)),
  showSpinner: message => dispatch(showSpinner(message)),
  hideSpinner: () => dispatch(hideSpinner()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookedPujasScreen);
