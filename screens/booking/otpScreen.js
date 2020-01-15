import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Button,
  Input,
  Item,
  View,
  CardItem,
  Card,
} from 'native-base';
import { G4IHeader } from '../header/appHeader';
import { isNullOrEmpty } from '../../app/utils/validator';
import { verifyOTP } from '../../app/services/otp.service';

class OtpScreen extends Component {
  constructor(props) {
    super(props);
    // timer = null
    this.state = {
      otp: null,
      successMessage: null
    }
  }
  componentWillUnmount() {
    // this.timer != null ? clearTimeout(this.timer) : null;

    this.setState({
      otp: null,
      successMessage: null
    })
  }

  isValidOtp = () => {
    return !isNullOrEmpty(this.state.otp)
  }

  setOtp = (otp) => {
    this.setState({ otp })
  }

  isValidateActionDisabled = () => {
    return !this.isValidOtp()
  }
  showSuccess = (successMessage) => {
    this.setState({ successMessage })
  }

  onConfirmPress = async () => {
    const {data} = await verifyOTP(this.props.navigation.state.params.countryCode+this.props.newBooking.phoneNumber, this.state.otp)
    if(data!= undefined){
      this.setState({ successMessage: 'OTP Verified' })
      this.props.navigation.push('Payment')
    }
    else{
      alert('OTP Not verified. But still you can be continue to payment for now')
      this.props.navigation.push('Payment')
    }
  }

  skip=()=> {
    this.props.navigation.push('Payment')
  }
  render() {
    return (
      <Container>
        <G4IHeader left={'back'} right={null} title={'OTP'} {...this.props} />
        {/* <Text>hello</Text> */}
        <Content style={{ margin: 10 }}>
          <Card>
            <CardItem header>
              <Text>Enter OTP </Text>
            </CardItem>
            <CardItem>
              <Item regular>
                <Input keyboardType="phone-pad" onChangeText={this.setOtp} bordered placeholder="OTP" />
              </Item>
            </CardItem>
            <CardItem footer>
              <Text>Wait for 60 sec for OTP</Text>
            </CardItem>
          </Card>
          <View style={{ marginTop: 20 }}>
            <Button disabled={this.isValidateActionDisabled()} onPress={this.onConfirmPress} full>
              <Text> Confirm OTP</Text>
            </Button>
          </View>
          <View style={{ marginTop: 20 }}>
            <Button disabled={this.isValidateActionDisabled()} onPress={this.skip} full>
              <Text> Skip for now</Text>
            </Button>
          </View>
          <Text>{this.state.successMessage}</Text>
          {/* <Text>{JSON.stringify(this.props.newBooking)}</Text>
          <Text>OTP:{JSON.stringify(this.state.otp)}</Text>
          <Text>OTP:{JSON.stringify(this.props.navigation.state.params.countryCode)}</Text> */}
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  newBooking: state.bookings.newBooking,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   updateNewBooking: pujas => dispatch(updateNewBooking(pujas)),
// });

export default connect(
  mapStateToProps,
  null,
)(OtpScreen);