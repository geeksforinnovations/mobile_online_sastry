import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import {G4IHeader} from '../header/appHeader';
import {Puja} from '../../models';
import PujaCard from './pujaCard';
import {getAllPujas} from '../../aws/apis';

export default class Pujas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availablePujas: [],
    };
    this.pujas = [
      new Puja(1, 'Annaprasanna'),
      new Puja(11, 'Kalyanam'),
      new Puja(12, 'Vinayaka Chaviti'),
      new Puja(152, 'Annaprasanna'),
      new Puja(14, 'Annaprasanna'),
    ];
  }
  componentDidMount() {
    console.log('2');
    alert('f');
    const x = getAllPujas();
    alert(x);
    //   .then(
    //     resp => {
    //       alert(1);
    //       this.setState({
    //         availablePujas: resp.data,
    //       });
    //     },
    //     err => {
    //       console.log('err', err);
    //     },
    //   )
    //   .catch(err => {
    //     alert('er');
    //   });
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
            <Text>sd {this.state.availablePujas}</Text>
            <View>
              {this.pujas.map((puja, i) => {
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
