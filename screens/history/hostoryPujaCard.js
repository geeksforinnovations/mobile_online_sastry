import React from 'react';
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

export default class HistoryPujaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img = {
      uri: 'https://picsum.photos/200',
    };
    const { booking } = this.props
    const logo = img;
    return (
      <Card>
        <CardItem cardBody style={{ margin: 5 }}>
          <Left>
            <Thumbnail square large source={logo} />
            <Body>
              {/* <Text >GeekyAnts</Text> */}
              <Text>{booking.puja.name}</Text>
              <Text note>Date: {booking.bookingDate}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Left>
            <Button transparent>
              <Icon active type="MaterialIcons" name="timer" />
              <Text>{booking.puja.timeInHrs}</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Text>$ {booking.puja.cost}</Text>
            </Button>
          </Body>
          <Right>
            <Button onPress={() => this.props.onCancle()}>
              <Text>Cancle</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
