import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import AppHeader from '../header/appHeader';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class PujaDetails extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>

                <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
                    <AppHeader {...this.props}></AppHeader>
                    <ScrollView
                        // contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>

                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>


                            <Text style={styles.sectionTitle}>this is puja details</Text>
                            <Button

                                onPress={() => this.props.navigation.navigate('Checkout')}
                            >
                                <Text style={styles.sectionTitle}>Go to Checkout</Text>
                            </Button>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

}


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        borderColor: 'red',
        borderWidth: 1
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,

    },
    sectionContainer: {
        // marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
