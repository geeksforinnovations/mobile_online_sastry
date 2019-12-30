import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import PujaDetails from '../../screens/pujaDetails/pujaDetails'
import Pujas from '../../screens/pujas/pujas'
import UserDetails from '../../screens/userDetails/userDetails'
import SuccessPage from '../../screens/success/success'


export const HomeStack = createStackNavigator({
    Home: {
        screen: Pujas,

    },
    PujaDetails: {
        screen: PujaDetails,

    },
    Checkout: {
        screen: UserDetails
    },
    Success: {
        screen: SuccessPage
    }
},
    {
        headerMode: 'none', //TODO: enable this if we need react-navigation header for this stack
        navigationOptions: {
            headerVisible: false,
        }
    }
)
