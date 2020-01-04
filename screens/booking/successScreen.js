import React, { Component } from 'react';
import { Container, Content, Text, Body, Right, Button, Icon, Input, Item, View, CardItem, Card } from 'native-base';
import { G4IHeader } from '../header/appHeader';

export default class SuccessScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                <G4IHeader left={'back'} right={null} title={'Success'} {...this.props}></G4IHeader>
                {/* <Text>hello</Text> */}
                <Content style={{ margin: 10 }}>

                    <Card>
                        <CardItem header>
                            <Text>Ref Number : 12345 </Text>
                        </CardItem>
                        <CardItem>
                            <Text>Succssfully booked your puja</Text>
                        </CardItem>
                       
                    </Card>
                    <View style={{marginTop: 20}}>
                        <Button  onPress={() => this.props.navigation.navigate('Home')}>
                            <Text  > Go To Home</Text>
                        </Button>
                    </View>

                </Content>
            </Container>

        );
    }
}
