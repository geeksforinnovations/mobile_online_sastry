import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import { G4IHeader } from '../header/appHeader';
import { Puja } from '../../models';
import PujaCard from './pujaCard';
import { getAllPujas } from '../../aws/apis';
import { Spinner } from 'native-base';
import { updateAllPujas, updateSelectedPuja } from '../../app/actions/pujas.actions'
import { connect } from 'react-redux'

class Pujas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false
    };

  }
  async componentDidMount() {
    this.showLoader(true)
    const x = await getAllPujas();
    this.props.updateAllPujas(x.data)
    this.setState({
      // availablePujas: x.data,
      showLoader: false
    })

  }

  showLoader(show) {
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
              {this.props.availablePujas.map((puja, i) => {
                return (
                  <PujaCard
                    onCardClick={() =>
                      {
                        this.props.updateSelectedPuja(puja)
                        this.props.navigation.push('PujaDetails')
                      }
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

const mapStateToProps = (state, ownProps) => ({
  availablePujas: state.pujas.availablePujas
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateAllPujas: (pujas) => dispatch(updateAllPujas(pujas)),
  updateSelectedPuja: (puja) => dispatch(updateSelectedPuja(puja))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pujas);
