import React from 'react'
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native'

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
              <Image style={styles.titleImage} resizeMode='contain' source={require('../assets/images/ruhrjs.png')} />
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
