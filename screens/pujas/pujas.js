import React from 'react';
import { SafeAreaView, ScrollView, View , RefreshControl} from 'react-native';
import { connect } from 'react-redux';

// Components
import { G4IHeader } from '../header/appHeader';
import PujaCard from './pujaCard';
// import {Spinner} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
//Methods
import {
  updateAllPujas,
  updateSelectedPuja,
} from '../../app/actions/pujas.actions';
import { getAllPujas } from '../../app/services';
import {showSpinner, hideSpinner} from '../../app/actions/app.actions'

class Pujas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  async componentDidMount() {
    this.props.showSpinner("loading Pujas..")
    const x = await getAllPujas();
    this.props.updateAllPujas(x);
    this.props.hideSpinner()
  }


  OnBookClick = puja => {
    // alert(1)
    this.props.updateSelectedPuja(puja);
    this.props.navigation.push('Booking');
  };
  OpenFilter = () => {
    this.props.navigation.push('Filter');
  };
  showRefresh =() => {
    this.setState({
      // availablePujas: x.data,
      refreshing: true,
    });
  }
  onRefresh = async () => {
    this.showRefresh()
    const x = await getAllPujas();
    this.props.updateAllPujas(x);
    this.setState({
      refreshing: false,
    });
  }
  render() {
    const {refreshing} = this.state;
    const {spinner} = this.props;
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
          <ScrollView contentInsetAdjustmentBehavior="automatic"
          RefreshControl
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
          }
          
          >
            <View>
              <Spinner textContent={spinner.message} visible={spinner.show} color="#e69b3a" />
              {this.props.availablePujas.map((puja, i) => {
                return (
                  <PujaCard
                    onCardClick={() => {
                      this.props.updateSelectedPuja(puja);
                      this.props.navigation.push('PujaDetails');
                    }}
                    onBook={() => this.OnBookClick(puja)}
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
  availablePujas: state.pujas.availablePujas,
  spinner: state.app.spinner
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateAllPujas: pujas => dispatch(updateAllPujas(pujas)),
  updateSelectedPuja: puja => dispatch(updateSelectedPuja(puja)),
  showSpinner: message=> dispatch(showSpinner(message)),
  hideSpinner:() => dispatch(hideSpinner())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pujas);
