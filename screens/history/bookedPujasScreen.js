import React from 'react';
import {ScrollView} from 'react-native';

import {G4IHeader} from '../header/appHeader';
import HistoryPujaCard from './hostoryPujaCard';
import {Text, Tab, Tabs, Container} from 'native-base';

export default class BookedPujasScreen extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [1, 2, 2, 45, 46, 56, 56];
  }

  onCancleClick = () => {
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
                {this.arr.map(a => {
                  return <HistoryPujaCard onCancle={this.onCancleClick} />;
                })}
              </ScrollView>
            </Tab>
            <Tab heading="History">
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                {this.arr.map(a => {
                  return <HistoryPujaCard onCancle={this.onCancleClick} />;
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
