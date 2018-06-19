import React from 'react'
import { Platform, StatusBar, StyleSheet } from 'react-native'

import {
  Body,
  Container,
  Content,
  Header,
  List,
  Title
} from 'native-base'

import Colors from '../constants/Colors'
import SpeakerListItem from '../components/SpeakerListItem'
import Speaker from '../mockData/speaker'

export default class SpeakerIndex extends React.Component {
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
        <Content>
          <List>
            {
              Speaker.map((speaker, index) => (
                <SpeakerListItem
                  avatar
                  style={styles.listItem}
                  key={`avatar_${index}`}
                  thumbnailSource={{ uri: speaker.image }}
                  speakerName={speaker.name}
                  speakerTwitter={speaker.twitter}
                  talkTitle={speaker.talkTitle}
                />
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
