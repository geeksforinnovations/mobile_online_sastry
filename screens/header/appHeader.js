import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, connectStyle } from 'native-base';
export default class AppHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <Header >
                <Left>
                    {this.props.left == 'menu'
                        ? <Button transparent onPress={() => this.props.navigation.toggleDrawer()} >
                            <Icon name='menu' />
                        </Button>
                        : <Button transparent onPress={() => this.props.navigation.goBack(null)} >
                            <Icon name='arrow-back' />
                        </Button>
                    }
                </Left>
                <Body>
                    <Title  >{this.props.title}</Title>
                </Body>

                <Right>
                    {this.props.right ?
                        <Button onPress={this.props.onRightClick} transparent>
                            <Icon type="MaterialCommunityIcons" name='filter-outline' />
                        </Button> : null}
                </Right>

            </Header>
        );
    }
}

export const G4IHeader = AppHeader// connectStyle('NativeBase.Header', {})(AppHeader);