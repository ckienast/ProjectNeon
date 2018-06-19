import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet
} from 'react-native';

import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title
} from 'native-base'

import Tweet from '../components/Tweet'
import Tweets from '../mockData/tweets'
import Colors from '../constants/Colors'

export default class HomeScreen extends React.Component {
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
                <Icon
                  style={styles.hashIcon}
                  type='Feather'
                  name='hash'
                />
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
                <Icon
                  style={styles.hashIcon}
                  type='Feather'
                  name='hash'
                />
              </Button>
              : null
          }
          <Button transparent>
            <Icon
              style={styles.atSignIcon}
              type='Feather'
              name='at-sign'
            />
          </Button>
        </Header>
        <ScrollView style={styles.scrollView}>
          {
            Tweets.map((tweet, index) => (
              <Tweet tweet={tweet} lastTweet={index === Tweets.length - 1} key={`tweet_${index}`} />
            ))
          }
        </ScrollView>
      </Container>
    );
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
  scrollView: {
    backgroundColor: Colors.veryDarkBlue
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
  hashIcon: {
    color: Colors.white,
    fontSize: 24
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
  },
  atSignIcon: {
    color: Colors.white
  }
});
