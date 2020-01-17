import React, { Component } from 'react';
import { Container, Content, Text, Body, Right, Badge, Button, Icon, Input, Item, View, CardItem, Card } from 'native-base';
import { G4IHeader } from '../header/appHeader';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class CalendarScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                <G4IHeader left={'back'} right={null} title={'Check Calendar'} {...this.props}></G4IHeader>
                {/* <Text>hello</Text> */}
                <Content style={{ margin: 10 }}>
                    <Calendar
                        // Collection of dates that have to be marked. Default = {}
                        markedDates={{
                            '2020-01-16': { selected: true, marked: true, selectedColor: '#e69b3a' },
                            '2012-05-17': { marked: true },
                            '2020-01-18': { marked: true, dotColor: 'red', activeOpacity: 1 },
                            '2020-01-23': { disabled: true, disableTouchEvent: true }
                        }}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#e69b3a',
                            selectedDayBackgroundColor: '#e69b3a',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#e69b3a',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: '#e69b3a',
                            monthTextColor: '#e69b3a',
                            indicatorColor: '#e69b3a',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '500',
                            textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '500',
                            textDayFontSize: 20,
                            textMonthFontSize: 20,
                            textDayHeaderFontSize: 16
                        }}
                    />

                    <View style={{ marginVertical: 30 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 5, }}>
                            <Badge style={{ marginRight: 5, }}>
                                <Text> .</Text>
                            </Badge>
                            <Text >Good days</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Badge info style={{ marginRight: 5, }}>
                                <Text >. </Text>
                            </Badge>
                            <Text>Not great for pujas</Text>
                        </View>


                    </View>
                    <Button bordered block onPress={() => this.props.navigation.goBack(null)}><Text> Ok </Text></Button>


                </Content>
            </Container>

        );
    }
}
