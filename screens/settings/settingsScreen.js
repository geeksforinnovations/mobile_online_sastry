import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {G4IHeader} from '../header/appHeader';
import {
  Container,
  Content,
  Accordion,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Right,
  Switch,
} from 'native-base';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container>
          <G4IHeader left={'menu'} title={'How it works'} {...this.props} />
          <Content>
            <ListItem icon>
              <Left>
                <Button style={{backgroundColor: '#FF9501'}}>
                  <Icon active name="airplane" />
                </Button>
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{backgroundColor: '#007AFF'}}>
                  <Icon active name="wifi" />
                </Button>
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{backgroundColor: '#007AFF'}}>
                  <Icon active name="bluetooth" />
                </Button>
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          </Content>
        </Container>
      </>
    );
  }
}
