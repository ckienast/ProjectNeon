import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Text, View } from 'native-base';

import Colors from '../constants/Colors'

export default class ScheduleListItem extends React.Component {
  talkTextStyle = () => (this.props.talk.speaker ? styles.talkText : styles.talkTextAlternate)

  render() {
    const { talk: { start_time, end_time, speaker, talk } } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.time}>
          <Text style={styles.timeText}>
            {start_time}
          </Text>
          {
            end_time ?
              <View>
                <Text style={styles.timeDivider}>
                  -
                </Text>
                <Text style={styles.timeText}>
                  {end_time}
                </Text>
              </View>
              : null
          }
        </View>
        <View style={styles.talk}>
          <Text style={this.talkTextStyle()}>
            {talk}
          </Text>
          {
            speaker ?
              <Text style={styles.speakerText}>
                by {speaker}
              </Text>
              : null
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: Colors.white,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    borderBottomWidth: 1,
  },
  time: {
    marginRight: 15,
  },
  timeText: {
    lineHeight: 20,
    fontFamily: 'BloggerSans',
    color: Colors.darkBlue
  },
  timeDivider: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'BloggerSans',
    color: Colors.darkBlue
  },
  talk: {
    flex: 1,
  },
  talkText: {
    lineHeight: 20,
    fontFamily: 'BloggerSansBold',
    color: Colors.accentBlue,
  },
  talkTextAlternate: {
    lineHeight: 20,
    fontFamily: 'BloggerSans',
    color: Colors.darkBlue,
  },
  speakerText: {
    lineHeight: 20,
    fontFamily: 'BloggerSansItalic',
    color: Colors.darkBlue
  }
})
