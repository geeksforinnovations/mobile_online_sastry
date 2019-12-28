import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


class CustomSideBar extends PureComponent {

    render() {

        return (
            <>
                <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Guest user</Text>
                    <Icon type="FontAwesome" name="user" />
                </View>
                <View>

                    <DrawerItems {...this.props} />
                </View>
            </>
        );
    }
}

export default CustomSideBar;