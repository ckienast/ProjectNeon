import React from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native'

import {
  Body,
  Button,
  Container,
  Content,
  Header,
  List,
  Text,
  Title
} from 'native-base';

import Colors from '../constants/Colors'
import ScheduleListItem from '../components/ScheduleListItem'
import Talks from '../mockData/talks'

export default class ScheduleScreen extends React.Component {
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
          {
            Platform.OS === 'ios' ?
              <Button transparent>
                <Text style={styles.day}>
                  13.
                </Text>
              </Button>
              : null
          }
          <Body>
            <Title style={styles.title}>
              <Image style={styles.titleImage} resizeMode='contain' source={require('../assets/images/ruhrjs.png')} />
            </Title>
          </Body>
          {
            Platform.OS === 'android' ?
              <Button transparent>
                <Text style={styles.day}>
                  13.
                </Text>
              </Button>
              : null
          }
          <Button transparent>
            <Text style={styles.day}>
              14.
            </Text>
          </Button>
        </Header>
        <Content>
          <List>
            {
              Talks.map((talk, index) => (
                <ScheduleListItem talk={talk} key={`talk_${index}`} />
              ))
            }
          </List>
        </Content>
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
    ...Platform.select({
      android: {
        height: 65,
      },
      ios: {
        height: 75,
      }
    }),
    backgroundColor: Colors.darkBlue,
    borderBottomColor: 'transparent'
  },
  day: {
    color: Colors.white,
    marginTop: 5,
  },
  title: {
    ...Platform.select({
      ios: {
        marginLeft: 10,
        marginTop: 12
      },
      android: {
        marginLeft: 5
      }
    })
  },
  titleImage: {
    ...Platform.select({
      ios: {
        width: 170,
        height: 35
      },
      android: {
        width: 500,
        height: 100
      }
    })
  }
})
