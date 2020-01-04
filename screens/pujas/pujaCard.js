import React from 'react';
import {

    View,
    Image,
} from 'react-native';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Thumbnail,
    Left,
    Body,
    Right
} from "native-base";





export default class PujaCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const img = {
            uri:
                'https://picsum.photos/200',
        };
        const logo = img
        const {puja} = this.props;
        return (
            <Card  >
                <CardItem button onPress={() => this.props.onCardClick()}  cardBody style={{ margin: 5}}>
                    <Left >
                        <Thumbnail  square large source={logo} />
                        <Body>
                            {/* <Text >GeekyAnts</Text> */}
                            <Text>{puja.name}</Text>
                            <Text note>Telugu, Hindi, Marati</Text>
                        </Body>
                    </Left>
                </CardItem>

               

                <CardItem >
                    <Left >
                        <Button transparent>
                            <Icon active type="MaterialIcons" name="timer" />
                            <Text>2.3 Hrs</Text>
                        </Button>
                    </Left>
                    <Body  >
                        <Button transparent>
                            {/* <Icon type="FontAwesome5" name="dollar-sign" /> */}
                            <Text>$ 4300</Text>
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
