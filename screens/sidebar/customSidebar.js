import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {isNullOrEmpty, isUndefined} from '../../app/utils/validator'
import {connect} from 'react-redux'


class CustomSideBar extends PureComponent {
    constructor(props) {
        super(props)
    }

    isUserAvailable() {
        return !(this.props.user == null || isNullOrEmpty(this.props.user.name))
    }

    render() {

        return (
            <>
                {this.isUserAvailable()
                    ? <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <Icon type="FontAwesome" name="user" />
                        <Text>{this.props.user.name}</Text>
                        <Text>{this.props.user.phoneNumber}</Text>
                        
                    </View>
                    : <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Guest user</Text>
                        <Icon type="FontAwesome" name="user" />
                    </View>}
                <View>

                    <DrawerItems {...this.props} />
                </View>
            </>
        );
    }
}

// export default CustomSideBar;

const mapStateToProps = (state, ownProps) => ({
    user: state.user.user,
    //availableBookings: state.bookings.availableBookings
});

//   const mapDispatchToProps = (dispatch, ownProps) => ({
//     updateAvailableBookings:bookings => dispatch(updateAvailableBookings(bookings))
//   });

export default connect(
    mapStateToProps,
    null,
)(CustomSideBar);
