import React from 'react';
import {ScrollView, Image, StatusBar} from 'react-native';
import {
  Container,
  Header,
  Content,
  Picker,
  H3,
  Button,
  Text,
  View,
} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {G4IHeader} from '../header/appHeader';

export default class FilterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      date: new Date().toLocaleDateString(),
      isDateTimePickerVisible: false,
    };
  }
  onValueChange = value => {
    this.setState({
      selected: value,
    });
  };

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

  render() {
    return (
      <>
        <G4IHeader
          title={'Filter'}
          {...this.props}
          onRightClick={this.OpenFilter}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Container style={{margin: 10}}>
            <Content>
              <H3 style={{marginVertical: 5}}>Language</H3>
              <View style={{borderWidth: 1, borderColor: '#e69b3a'}}>
                <Picker
                  note
                  mode="dropdown"
                  // style={{wi }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Telugu" value="key0" />
                  <Picker.Item label="English" value="key1" />
                  <Picker.Item label="Hindi" value="key2" />
                  <Picker.Item label="Tamil" value="key3" />
                  <Picker.Item label="Malayalam" value="key4" />
                </Picker>
              </View>

              <H3 style={{marginVertical: 5}}>Date</H3>

              <Button bordered onPress={this.showDateTimePicker}>
                <Text>
                  {this.state.date
                    ? this.state.date.toDateString()
                    : 'Select Date'}
                </Text>
              </Button>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
              <View style={{marginTop: 40}}>
                <Button
                  block
                  onPress={() => this.props.navigation.goBack(null)}>
                  <Text>Apply Filter</Text>
                </Button>
              </View>
            </Content>
          </Container>
        </ScrollView>
      </>
    );
  }
}
