import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class AppHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <Header transparent androidStatusBarColor={'#e69b3a'}>
                <Left>
                    {this.props.left == 'menu'
                        ? <Button transparent onPress={() => this.props.navigation.toggleDrawer()} >
                            <Icon style={{ color: 'black' }} name='menu' />
                        </Button>
                        : <Button transparent onPress={() => this.props.navigation.goBack(null)} >
                            <Icon style={{ color: 'black' }} name='arrow-back' />
                        </Button>
                    }
                </Left>
                <Body>
                    <Title style={{ color: 'black' }} >{this.props.title}</Title>
                </Body>

                <Right>
                    {this.props.right ?
                        <Button transparent>
                            <Icon name='menu' style={{ color: 'black' }} />
                        </Button> : null}
                </Right>

            </Header>
        );
    }
}