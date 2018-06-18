import React from 'react'
import { StyleSheet } from 'react-native'

import {
  Body,
  Thumbnail,
  Text,
  View
} from 'native-base';

import Colors from '../constants/Colors'

export default class SpeakerListItem extends React.Component {
  render() {
    const { speakerName, speakerTwitter, talkTitle, thumbnailSource } = this.props

    return (
      <View style={styles.container}>
        <Body style={styles.body}>
          <View style={styles.background} />
          <Thumbnail circle source={thumbnailSource} style={styles.thumbnail} />
          <Text style={styles.speakerName}>
            {speakerName}
          </Text>
          <Text style={styles.speakerTwitter}>
            {speakerTwitter}
          </Text>
          <Text note style={styles.talkTitle}>
            {talkTitle}
          </Text>
        </Body>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.veryDarkBlue,
  },
  body: {
    marginBottom: 30,
    padding: 30
  },
  background: {
    position: 'absolute',
    top: 160,
    backgroundColor: Colors.darkBlue,
    width: '100%',
    height: 285,
    borderRadius: 10
  },
  thumbnail: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderWidth: 5,
    borderColor: Colors.white
  },
  speakerName: {
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'BloggerSans',
    color: Colors.accentBlue
  },
  speakerTwitter: {
    color: Colors.brightGrey,
    marginBottom: 20,
    fontFamily: 'BloggerSans',
    fontSize: 16
  },
  talkTitle: {
    color: Colors.white,
    paddingTop: 7,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 18,
    fontFamily: 'BloggerSans'
  }
})
