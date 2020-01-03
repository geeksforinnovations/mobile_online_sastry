import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    // Text,
    StatusBar,
} from 'react-native';



import { G4IHeader } from '../header/appHeader';
import { Puja } from '../../models'
import PujaCard from './pujaCard'


export default class Pujas extends React.Component {
    constructor(props) {
        super(props)
        this.pujas = [new Puja(1, 'Annaprasanna'), new Puja(11, 'Kalyanam'),
        new Puja(12, 'Vinayaka Chaviti'), new Puja(15, 'Annaprasanna'), new Puja(14, 'Annaprasanna'),]
    }
    render() {
        const img = {
            uri:
                'https://picsum.photos/200',
        };
        const logo = img//require("../../../assets/logo.png");
        const cardImage = img///require("../../../assets/drawer-cover.png");
        return (
            <>
                <SafeAreaView>
                    <G4IHeader left={'menu'} right={null} title={'Pujas'} {...this.props}></G4IHeader>
                    <ScrollView contentInsetAdjustmentBehavior="automatic"  >
                        <View >
                            {
                                this.pujas.map((puja, i) => {
                                    return (<PujaCard keyVal={`puja${i}`} puja={puja}></PujaCard>)
                                })
                            }
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

}
