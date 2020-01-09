import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {G4IHeader} from '../header/appHeader';
import {Container, Content, Accordion} from 'native-base';
import {getAllFAQs} from '../../app/services';

export default class HowWorksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableFAQs: [],
    };
  }

  async componentDidMount() {
    const c = await getAllFAQs();
    this.setState({
      availableFAQs: c.data,
    });
  }

  render() {
    // const dataArray = [
    //   {
    //     title: 'How this works ?',
    //     content: `NativeBase is made from effective building blocks referred to as components. The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.
    //     NativeBase includes components such as anatomy of your app screens, header, input, buttons, badge, icon, form, checkbox, radio-button, list, card, actionsheet, picker, segment, swipeable list, tabs, toast, drawer, thumbnail, spinner, layout, search bar etc. You can style these components with StyleSheet`,
    //   },
    //   {
    //     title: 'How to cancle puja ?',
    //     content: `NativeBase is made from effective building blocks referred to as components. The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.
    //   NativeBase includes components such as anatomy of your app screens, header, input, buttons, badge, icon, form, checkbox, radio-button, list, card, actionsheet, picker, segment, swipeable list, tabs, toast, drawer, thumbnail, spinner, layout, search bar etc. You can style these components with StyleSheet`,
    //   },
    //   {
    //     title: 'What happens if we have n/w issue at puja?',
    //     content: `NativeBase is made from effective building blocks referred to as components. The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.
    //     NativeBase includes components such as anatomy of your app screens, header, input, buttons, badge, icon, form, checkbox, radio-button, list, card, actionsheet, picker, segment, swipeable list, tabs, toast, drawer, thumbnail, spinner, layout, search bar etc. You can style these components with StyleSheet`,
    //   },
    //   {
    //     title: 'What precautions before start puja?',
    //     content: `NativeBase is made from effective building blocks referred to as components. The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.
    //     NativeBase includes components such as anatomy of your app screens, header, input, buttons, badge, icon, form, checkbox, radio-button, list, card, actionsheet, picker, segment, swipeable list, tabs, toast, drawer, thumbnail, spinner, layout, search bar etc. You can style these components with StyleSheet`,
    //   },
    //   {
    //     title: 'will puja items provided ?',
    //     content: `NativeBase is made from effective building blocks referred to as components. The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.
    //     NativeBase includes components such as anatomy of your app screens, header, input, buttons, badge, icon, form, checkbox, radio-button, list, card, actionsheet, picker, segment, swipeable list, tabs, toast, drawer, thumbnail, spinner, layout, search bar etc. You can style these components with StyleSheet`,
    //   },
    // ];

    const data = this.state.availableFAQs.map(faq => {
      return {
        title: faq.question,
        content: faq.answer,
      };
    });
    return (
      <>
        <SafeAreaView>
          <G4IHeader left={'menu'} title={'How it works'} {...this.props} />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Container>
              <Content style={{margin: 5}}>
                <Accordion dataArray={data} icon="add" expandedIcon="remove" />
              </Content>
            </Container>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
