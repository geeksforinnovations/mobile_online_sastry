import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {G4IHeader} from '../header/appHeader';
import {
  Button,
  Container,
  Content,
  Footer,
  Text,
  FooterTab,
  H3,
} from 'native-base';

export default class UpdateBookingScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Container>
          <G4IHeader left={'menu'} title={'Update Booking'} {...this.props} />
          <Content style={{margin: 8}}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <View>
                <Text>Do you want to change Date ?</Text>

                <Text> Do you want to cancel ?</Text>
              </View>
            </ScrollView>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <H3>Cancel</H3>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </>
    );
  }
}
