import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import {G4IHeader} from '../header/appHeader';
import {Puja} from '../../models';
import PujaCard from './pujaCard';
import {getAllPujas} from '../../aws/apis';
import { Spinner } from 'native-base';

export default class Pujas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availablePujas: [],
      showLoader: false
    };
    this.pujas = [
      new Puja(1, 'Annaprasanna'),
      new Puja(11, 'Kalyanam'),
      new Puja(12, 'Vinayaka Chaviti'),
      new Puja(152, 'Annaprasanna'),
      new Puja(14, 'Annaprasanna'),
    ];
  }
 async componentDidMount() {
  this.showLoader(true)
    const x = await getAllPujas();
    this.setState({
      availablePujas: x.data,
      showLoader: false
    })
   
  }

  showLoader(show){
    this.setState({
      showLoader: show
    })
  }
  OnBookClick = puja => {
    // alert(1)
    this.props.navigation.push('Booking');
  };
  OpenFilter = () => {
    this.props.navigation.push('Filter');
  };
  render() {
    return (
      <>
        <SafeAreaView>
          <G4IHeader
            left={'menu'}
            right={'filter'}
            title={'Pujas'}
            {...this.props}
            onRightClick={this.OpenFilter}
          />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
              {this.state.showLoader ? <Spinner color="#e69b3a"></Spinner> : null}
              {this.state.availablePujas.map((puja, i) => {
                return (
                  <PujaCard
                    onCardClick={() =>
                      this.props.navigation.push('PujaDetails')
                    }
                    onBook={this.OnBookClick}
                    key={`puja${i}`}
                    puja={puja}
                  />
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
