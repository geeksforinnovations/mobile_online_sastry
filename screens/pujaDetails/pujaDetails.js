import React, { Component } from 'react';
import {
    Container, Text, Button, H2, Content, Card,
    CardItem, Body, Right, Left, Thumbnail, Icon, H3, View
} from 'native-base';
import {Image} from 'react-native';
import { G4IHeader } from '../header/appHeader';


export default class PujaDetails extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const img = {
            uri:
                'https://picsum.photos/200',
        };
        return (
            <Container>
                <G4IHeader left={'back'} right={null} title={'Puja Details'} {...this.props}></G4IHeader>
                {/* <Text>hello</Text> */}
                <Content style={{ margin: 10, }}>

                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                            <Thumbnail square large source={img} />
                                <Body>
                                    <H3>Annaprasanna</H3>
                                    <Text note>Time: 2.30 Hrs</Text>
                                    <Text note>Price: $23</Text>
                                    
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem  >
                           <Button block bordered onPress={()=> this.props.navigation.push('Booking')} style={{flex:1}} >
                               <Text >Book It</Text>
                           </Button>
                        </CardItem>
                        <CardItem header>
                            <H3>About</H3>
                        </CardItem>
                        
                        <CardItem>
                            <Body>
                                {/* <Image source={img} style={{ height: 200, width: 200, flex: 1,  alignSelf:'center' }} /> */}
                                <Text>
                                Separator component is a separator usually used in list, which can be used for grouping list items. Though it is used with List, you can use it anywhere in your app.
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem header>
                            <H3>Description</H3>
                        </CardItem>
                        
                        <CardItem>
                            <Body>
                                {/* <Image source={img} style={{ height: 200, width: 200, flex: 1,  alignSelf:'center' }} /> */}
                                <Text>
                                Separator component is a separator usually used in list, which can be used for grouping list items. Though it is used with List, you can use it anywhere in your app.
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem header>
                            <H3>Required Items</H3>
                        </CardItem>
                        
                        <CardItem>
                            <Body>
                                {/* <Image source={img} style={{ height: 200, width: 200, flex: 1,  alignSelf:'center' }} /> */}
                                <Text>
                                    1. Pasupu - 200 GM
                                </Text>
                                <Text>
                                    2. Kumkuma - 200 GM
                                </Text>
                                <Text>
                                    3. Coconuts - 2 Pc
                                </Text>
                            </Body>
                        </CardItem>
                        
                    </Card>

                </Content>

            </Container>
        );
    }
}
