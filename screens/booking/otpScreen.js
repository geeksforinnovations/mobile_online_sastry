import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Body,
  Right,
  Button,
  Icon,
  Input,
  Item,
  View,
  CardItem,
  Card,
} from 'native-base';
import {G4IHeader} from '../header/appHeader';

export default class OtpScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <G4IHeader left={'back'} right={null} title={'OTP'} {...this.props} />
        {/* <Text>hello</Text> */}
        <Content style={{margin: 10}}>
          <Card>
            <CardItem header>
              <Text>Enter OTP </Text>
            </CardItem>
            <CardItem>
              <Item regular>
                <Input bordered placeholder="OTP" />
              </Item>
            </CardItem>
            <CardItem footer>
              <Text>Wait for 60 sec for OTP</Text>
            </CardItem>
          </Card>
          <View style={{marginTop: 20}}>
            <Button onPress={() => this.props.navigation.push('Payment')} full>
              <Text> Confirm OTP</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
