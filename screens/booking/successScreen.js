import React, { Component } from 'react';
import { Container, Content, Text, Body, Right, Button, Icon, Input, Item, View, CardItem, Card } from 'native-base';
import { G4IHeader } from '../header/appHeader';
import LottieView from 'lottie-react-native';

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

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <LottieView style={{ width: 300, height: 300 }} resizeMode="cover" source={require('./animation.json')} autoPlay loop />

                    </View>
                    <Button onPress={() => this.props.navigation.navigate('Home')} style={{ justifyContent: 'center', alignItems: 'center' }} bordered>
                        <Icon name='home' />
                        <Text>Home</Text>
                    </Button>
                </Content>

            </Container>

        );
    }
}
