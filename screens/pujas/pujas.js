import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppHeader from '../header/appHeader';


export default class Pujas extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                {/* <StatusBar barStyle="dark-content" /> */}
                <SafeAreaView>
                    <AppHeader {...this.props}></AppHeader>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>

                        <View style={styles.body}>

                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>this is all pujas</Text>
                                <Button

                                    onPress={() => this.props.navigation.navigate('PujaDetails')}
                                >
                                    <Text style={styles.sectionTitle}>Go to PujaDetails</Text>
                                </Button>
                            </View>
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

    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
        // marginTop:50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionContainer: {
        marginTop: 32,
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
