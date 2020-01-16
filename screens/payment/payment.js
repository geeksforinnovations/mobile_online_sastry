import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Body,
  Input,
  View,
  H3,
  Footer,
  FooterTab,
  Card,
  CardItem,
  Spinner,
} from 'native-base';
import {G4IHeader} from '../header/appHeader';
import stripe, {PaymentCardTextField} from 'tipsi-stripe';
import {confirmBooking} from '../../app/services/bookings.service';
import {connect} from 'react-redux';
import {updateUser} from '../../app/actions/user.action';
import {User} from '../../app/models';
import {payment} from '../../app/apis';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      valid: false,
      token: null,
      error: null,
      name: '',
      params: {
        number: '',
        expMonth: 0,
        expYear: 0,
        cvc: '',
      },
    };
  }
  onNameChange = name => {
    this.setState({
      name: name,
      showLoader: false,
    });
  };
  async continueToPayment() {
    let params = this.state.params;
    params.name = this.state.name;

    try {
      const token = await stripe.createTokenWithCard(params);
      console.log('token is ', token);
      const res = await payment(
        this.props.navigation.state.params.id,
        token.tokenId,
      );
      console.log('response is', res);
      this.reset();
      return res;

      // console.log('succ', token)
    } catch (error) {
      console.log('err is', error);
      this.toggleLoader(false);
    }
  }
  reset = () => {
    this.setState({
      valid: false,
      token: null,
      error: null,
      name: '',
      params: {
        number: '',
        expMonth: 0,
        expYear: 0,
        cvc: '',
      },
    });
  };

  componentWillUnmount() {
    this.setState({
      showLoader: false,
    });
  }

  toggleLoader(status) {
    this.setState({
      showLoader: status,
    });
  }

  onPaymentPress = async () => {
    this.toggleLoader(true);
    const payment = await this.continueToPayment();

    confirmBooking(this.props.newBooking).then(booking => {
      const user = new User(null, booking.name, booking.phoneNumber);
      this.toggleLoader(false);
      this.props.updateUser(user);
      this.props.navigation.navigate('Success');
    });
  };
  handleFieldParamsChange = (valid, params) => {
    this.setState({
      valid,
      params,
    });
  };

  render() {
    return (
      <Container>
        <G4IHeader
          left={'back'}
          right={null}
          title={'Payment'}
          {...this.props}
        />
        {/* <Text>hello</Text> */}
        <Content style={{margin: 10}}>
          <Card>
            <CardItem header bordered>
              <Text>Enter Card details </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <PaymentCardTextField
                  accessible={false}
                  style={{width: '100%'}}
                  onParamsChange={this.handleFieldParamsChange}
                  numberPlaceholder="XXXX XXXX XXXX XXXX"
                  expirationPlaceholder="MM/YY"
                  cvcPlaceholder="CVC"
                />
                {/* <Text>helo</Text> */}
                <View style={{flex: 1, width: '100%', marginTop: 15}}>
                  <H3>Name on the card</H3>
                  <Input
                    placeholderTextColor="#e69b3a"
                    style={{
                      borderColor: '#e69b3a',
                      color: '#e69b3a',
                      borderWidth: 1,
                      flex: 1,
                      width: '100%',
                    }}
                    type="email-address"
                    placeholder={'Enter Name'}
                    //onChangeText={(text) => { console.log(text) }}
                    onChangeText={text => this.onNameChange(text)}
                    value={this.state.name}
                  />
                </View>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>
                Amount to be paid: {this.props.selectedPuja.localCost}
              </Text>
            </CardItem>
          </Card>

          {this.state.showLoader ? (
            <Spinner style={{marginTop: 30}} color="#e69b3a" />
          ) : null}
        </Content>
        <Footer>
          <FooterTab>
            <Button
              disabled={this.state.showLoader == true}
              onPress={this.onPaymentPress}>
              <Icon type="FontAwesome" name="money" />
              <Text>Pay Amount</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  newBooking: state.bookings.newBooking,
  selectedPuja: state.pujas.selectedPuja,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: user => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentScreen);
