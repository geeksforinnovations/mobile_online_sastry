import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import PujaDetails from '../../screens/pujaDetails/pujaDetails'
import Pujas from '../../screens/pujas/pujas'
import UserDetails from '../../screens/userDetails/userDetails'
import SuccessPage from '../../screens/success/success'
import BookingScreen from '../../screens/booking/booking'
import OtpScreen from '../../screens/booking/otpScreen'
import SuccessScreen from '../../screens/booking/successScreen'
import FilterScreen from '../../screens/pujas/filterScreen'
import CalendarScreen from '../../screens/booking/calendarScreen'
import PaymentScreen from '../../screens/payment/payment'


export const HomeStack = createStackNavigator({
    Home: {
        screen: Pujas,

    },
    Filter:{
        screen: FilterScreen
    },
    Booking:{
        screen: BookingScreen
    },
    Calendar:{
        screen:CalendarScreen
    },
    OTP:{
        screen:OtpScreen
    },
    Payment:{
        screen:PaymentScreen
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
