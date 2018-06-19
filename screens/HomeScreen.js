import React from 'react';

import {
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
            Platform.os === 'ios' ?
              <Left>
                <Button transparent>
                  <Icon
                    style={styles.hashIcon}
                    type='Feather'
                    name='hash'
                  />
                </Button>
              </Left>
              : null
          }
          <Body>
            <Title style={styles.title}>
              RuhrJS
            </Title>
          </Body>
          <Right>
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
          </Right>
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
    backgroundColor: Colors.darkBlue,
    borderBottomColor: 'transparent'
  },
  hashIcon: {
    color: Colors.white,
    fontSize: 24
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
  },
  atSignIcon: {
    color: Colors.white
  }
});
