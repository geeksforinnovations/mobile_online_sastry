import React from 'react';
import {View, Image} from 'react-native';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
} from 'native-base';

export default class PujaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img = {
      uri: 'https://picsum.photos/200',
    };
    const logo = img;
    const {puja} = this.props;

    return (
      <Card>
        <CardItem
          button
          onPress={() => this.props.onCardClick()}
          cardBody
          style={{margin: 5}}>
          <Left>
            <Thumbnail square large source={logo} />
            <Body>
              {/* <Text >GeekyAnts</Text> */}
              <Text>{puja.name}</Text>
              <Text note>{puja.languageString}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Left>
            <Button transparent>
              <Icon active type="MaterialIcons" name="timer" />
              <Text>{puja.timeInHrs} Hrs</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              {/* <Icon type="FontAwesome5" name="dollar-sign" /> */}
              <Text>$ {puja.cost}</Text>
            </Button>
          </Body>
          <Right>
            <Button onPress={this.props.onBook}>
              <Text>Book</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
