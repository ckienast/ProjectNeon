import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native'

import { Container, Header, Body, Title } from 'native-base';

import Colors from '../constants/Colors'

export default class EmptyScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={styles.header}
          androidStatusBarColor={Colors.darkBlue}
          iosBarStyle='light-content'
        >
          <Body>
            <Title style={styles.title}>
              RuhrJS
            </Title>
          </Body>
        </Header>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.veryDarkBlue,
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  },
  header: {
    backgroundColor: Colors.darkBlue,
    borderBottomColor: 'transparent'
  },
  title: {
    color: Colors.title,
    fontFamily: 'BloggerSans',
    fontSize: 30,
    ...Platform.select({
      ios: {
        marginTop: 12
      }
    })
  }
})
