import React from 'react';
import { ScrollView, Alert } from 'react-native';
import { connect } from "react-redux";

import { G4IHeader } from '../header/appHeader';
import HistoryPujaCard from './hostoryPujaCard';
import { Text, Tab, Tabs, Container } from 'native-base';
import { getAllByPhone } from '../../app/services/bookings.service';
import { updateUser } from '../../app/actions/user.action';
import { updateAvailableBookings } from "../../app/actions/bookings.action";

class BookedPujasScreen extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [];
  }

  async componentDidMount() {
    const user = this.props.user
    const bookings = await getAllByPhone(user.phoneNumber)
    this.props.updateAvailableBookings(bookings)
  }

  cancleBooking=(id) =>{
    alert('cancled')

  }

  onCancleClick = (id) => {
    Alert.alert(
      'Booking History',
      'Do you want to cancle selected Booking',
      [
        { text: 'Yes', onPress: () => this.cancleBooking(id) },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        }
      ],
      { cancelable: false },
    );
    this.props.navigation.push('UpdateBooking');
  };

  render() {
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
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                {this.props.availableBookings.map(booking => {
                  return <HistoryPujaCard booking={booking} onCancle={()=>this.onCancleClick(booking.id)} />;
                })}
              </ScrollView>
            </Tab>
            <Tab heading="History">
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                {this.arr.map((a, i) => {
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
  availableBookings: state.bookings.availableBookings
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateAvailableBookings: bookings => dispatch(updateAvailableBookings(bookings))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookedPujasScreen);