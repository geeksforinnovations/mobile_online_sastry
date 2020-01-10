import React, {Component} from 'react';
import {Container, Content, Text, Button, Icon, Input, View} from 'native-base';
import {G4IHeader} from '../header/appHeader';
import stripe, {PaymentCardTextField} from 'tipsi-stripe';

export default class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    });
  };
  async continueToPayment() {
    this.toggleLoader(true);
    let params = this.state.params;
    params.name = this.state.name;

    try {
      const token = await stripe.createTokenWithCard(params);
      //   const res = await payment(
      //     this.props.navigation.state.params.id,
      //     token.tokenId,
      //   );
      this.toggleLoader(false);
      console.log('response is', 'res');
      this.reset();
      this.continueToSuccess();

      // console.log('succ', token)
    } catch (error) {
      console.log('err is', error);
      this.toggleLoader(false);
    }
  }
  reset() {
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
  }

  render() {
    return (
      <Container>
        <G4IHeader
          left={'back'}
          right={null}
          title={'Success'}
          {...this.props}
        />
        {/* <Text>hello</Text> */}
        <Content style={{margin: 10}}>
          <View style={{flex: 1}}>
            <PaymentCardTextField
              accessible={false}
              style={{width: '100%'}}
              onParamsChange={this.handleFieldParamsChange}
              numberPlaceholder="XXXX XXXX XXXX XXXX"
              expirationPlaceholder="MM/YY"
              cvcPlaceholder="CVC"
            />
          </View>
          <View>
            <Input
              type="email-address"
              placeholder={'Name on the Card'}
              //onChangeText={(text) => { console.log(text) }}
              onChangeText={text => this.onNameChange(text)}
              value={this.state.name}
            />
          </View>

          <View>
            <Text>Amount to be paid: $10</Text>
          </View>
          <Button
            onPress={() => this.props.navigation.navigate('Success')}
            style={{justifyContent: 'center', alignItems: 'center'}}
            bordered>
            <Icon type="FontAwesome" name="money" />
            <Text>Pay Amount</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
