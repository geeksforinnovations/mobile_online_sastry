import React, {Component} from 'react';
import {
  Container,
  Text,
  Button,
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Thumbnail,
  H3,
} from 'native-base';
import {G4IHeader} from '../header/appHeader';
import {connect} from 'react-redux';

class PujaDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const img = {
      uri: 'https://picsum.photos/200',
    };
    const {puja} = this.props;
    const pujaLanguages = puja.getLanguageString();
    return (
      <Container>
        <G4IHeader
          left={'back'}
          right={null}
          title={'Puja Details'}
          {...this.props}
        />
        {/* <Text>hello</Text> */}
        <Content style={{margin: 10}}>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail square large source={img} />
                <Body>
                  <H3>{puja.name}</H3>
                  <Text note>Time: {puja.timeInHrs} Hrs</Text>
                  <Text note>Price: ${puja.cost}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Button
                block
                bordered
                onPress={() => this.props.navigation.push('Booking')}
                style={{flex: 1}}>
                <Text>Book It</Text>
              </Button>
            </CardItem>
            <CardItem header>
              <H3>About</H3>
            </CardItem>

            <CardItem>
              <Body>
                {/* <Image source={img} style={{ height: 200, width: 200, flex: 1,  alignSelf:'center' }} /> */}
                <Text>{puja.about}</Text>
              </Body>
            </CardItem>

            <CardItem header>
              <H3>Description</H3>
            </CardItem>

            <CardItem>
              <Body>
                {/* <Image source={img} style={{ height: 200, width: 200, flex: 1,  alignSelf:'center' }} /> */}
                <Text>{puja.description}</Text>
              </Body>
            </CardItem>
            <CardItem header>
              <H3>Languages</H3>
            </CardItem>

            <CardItem>
              <Body>
                {/* <Image source={img} style={{ height: 200, width: 200, flex: 1,  alignSelf:'center' }} /> */}
                <Text>{pujaLanguages}</Text>
              </Body>
            </CardItem>

            <CardItem header>
              <H3>Required Items</H3>
            </CardItem>

            <CardItem>
              <Body>
                {/* <Image source={img} style={{ height: 200, width: 200, flex: 1,  alignSelf:'center' }} /> */}
                <Text>1. Pasupu - 200 GM</Text>
                <Text>2. Kumkuma - 200 GM</Text>
                <Text>3. Coconuts - 2 Pc</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  puja: state.pujas.selectedPuja,
});
PujaDetails.defaultProps = {
  puja: {},
};

export default connect(
  mapStateToProps,
  null,
)(PujaDetails);
