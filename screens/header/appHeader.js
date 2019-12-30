import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class AppHeader extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (

            <Header >
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack(null)} >
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title >Header</Title>
                </Body>
                <Right>
                    <Button transparent >
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        );
    }
}