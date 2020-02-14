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
    const { booking } = this.props;
    const logo = img;
    return (
      <Card>
        <CardItem
          cardBody
          button
          onPress={this.props.onCardClick}
          style={{ margin: 5 }}>
          <Left>
            <Thumbnail square large source={logo} />
            <Body>
              {/* <Text >GeekyAnts</Text> */}
              <Text>{booking.puja.name}</Text>
              <Text note>Date: {new Date(booking.bookingDate).toLocaleDateString()}</Text>
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
            {booking.status == 'Active' ? <Button onPress={() => this.props.onCancle()}>
              <Text>Cancle</Text>
            </Button> : null}
            {booking.status == 'Completed' ? <Text>Completed</Text> : null}
            {booking.status == 'Cancelled' ? <Text>Cancelled</Text> : null}
          </Right>
        </CardItem>
      </Card>
    );
  }
}
