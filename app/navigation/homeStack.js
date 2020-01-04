import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import PujaDetails from '../../screens/pujaDetails/pujaDetails'
import Pujas from '../../screens/pujas/pujas'
import UserDetails from '../../screens/userDetails/userDetails'
import SuccessPage from '../../screens/success/success'
import BookingScreen from '../../screens/booking/booking'
import OtpScreen from '../../screens/booking/otpScreen'
import SuccessScreen from '../../screens/booking/successScreen'


export const HomeStack = createStackNavigator({
    Home: {
        screen: Pujas,

    },
    Booking:{
        screen: BookingScreen
    },
    OTP:{
        screen:OtpScreen
    },
    Success: {
        screen: SuccessScreen
    },
    PujaDetails: {
        screen: PujaDetails,

    },
    Checkout: {
        screen: UserDetails
    },
    // Success: {
    //     screen: SuccessPage
    // }
},
    {
        headerMode: 'none', //TODO: enable this if we need react-navigation header for this stack
        navigationOptions: {
            headerVisible: false,
        }
    }
)
