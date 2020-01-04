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
        new Puja(12, 'Vinayaka Chaviti'), new Puja(152, 'Annaprasanna'), new Puja(14, 'Annaprasanna'),]
    }
    OnBookClick =(puja)=>{
        // alert(1)
        this.props.navigation.push('Booking')
    }
    render() {
        
        return (
            <>
                <SafeAreaView>
                    <G4IHeader left={'menu'} right={null} title={'Pujas'} {...this.props}></G4IHeader>
                    <ScrollView contentInsetAdjustmentBehavior="automatic"  >
                        <View >
                            {
                                this.pujas.map((puja, i) => {
                                    return (<PujaCard onBook={this.OnBookClick} key={`puja${i}`} puja={puja}></PujaCard>)
                                })
                            }
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

}
