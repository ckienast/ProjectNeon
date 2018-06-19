import React from 'react'

import {
  Image,
  StyleSheet
} from 'react-native';

import {
  Icon,
  Right,
  Text,
  View
} from 'native-base'

import Colors from '../constants/Colors';

export default class Tweet extends React.Component {
  tweetStyle = () => (
    this.props.lastTweet ? styles.lastTweet : styles.tweet
  )

  hashAndHandleHighlighter(text) {
    const pattern = /[@|#]+[A-Za-z0-9-_]+/g
    const noMatch = text.split(pattern)
    const match = text.match(pattern)

    if (match) {
      let newString = []

      for (let i = 0; i < noMatch.length; i++) {
        newString.push(
          <Text key={`noMatch_${i}`}>{noMatch[i]}</Text>,
          <Text style={{ color: Colors.accentBlue }} key={`match_${i}`}>{match[i]}</Text>
        )
      }

      return newString
    }

    return text
  }

  render() {
    const { tweet } = this.props

    return (
      <View style={styles.container}>
        <View style={this.tweetStyle()}>
          <Image
            style={styles.image}
            source={{ uri: tweet.image }}
          />
          <View style={styles.tweetHeader}>
            <Image
              style={styles.authorImage}
              source={{ uri: tweet.authorImage }}
            />
            <View style={styles.authorContainer}>
              <View style={styles.authorText}>
                <Text style={styles.accountName}>
                  {tweet.author}
                </Text>
                <Icon
                  style={styles.verifiedIcon}
                  type='Octicons'
                  name='verified'
                />
                <Right>
                  <Icon
                    style={styles.twitterIcon}
                    type='FontAwesome'
                    name='twitter'
                  />
                </Right>
              </View>
              <Text style={styles.text}>
                {tweet.account}
              </Text>
            </View>
          </View>
          <View style={styles.tweetBody}>
            <Text style={styles.tweetText}>
              {this.hashAndHandleHighlighter(tweet.message)}
            </Text>
            <Text style={styles.tweetDate}>
              {tweet.date}
            </Text>
            <View style={styles.likesAndRetweets}>
              <Icon
                style={styles.heartIcon}
                type='EvilIcons'
                name='heart'
              />
              <Text style={styles.likes}>
                {tweet.likes}
              </Text>
              <Icon
                style={styles.bubbleIcon}
                type='SimpleLineIcons'
                name='bubble'
              />
              <Text style={styles.retweets}>
                {tweet.retweets}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 375,
  },
  tweet: {
    backgroundColor: Colors.white,
    marginBottom: 10,
  },
  lastTweet: {
    backgroundColor: Colors.white
  },
  image: {
    height: 250,
    width: 375
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  authorImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  authorContainer: {
    padding: 10,
    width: 300
  },
  authorText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  accountName: {
    fontFamily: 'BloggerSans',
    color: Colors.textColor,
    fontWeight: 'bold',
    fontSize: 16
  },
  verifiedIcon: {
    color: Colors.twitterBlue,
    fontSize: 14,
    marginLeft: 5,
    marginBottom: 3,
  },
  twitterIcon: {
    color: Colors.twitterBlue,
    fontSize: 20,
    marginRight: -10,
    marginBottom: 3
  },
  text: {
    fontFamily: 'BloggerSans',
    color: Colors.textColor
  },
  tweetBody: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  tweetText: {
    fontFamily: 'BloggerSans',
    color: Colors.textColor
  },
  tweetDate: {
    fontFamily: 'BloggerSans',
    paddingTop: 10,
    color: Colors.textColor
  },
  likesAndRetweets: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    color: Colors.textColor
  },
  bubbleIcon: {
    color: Colors.textColor,
    fontSize: 20
  },
  likes: {
    marginLeft: 3,
    marginRight: 15,
    fontFamily: 'BloggerSans',
    color: Colors.textColor
  },
  retweets: {
    marginLeft: 5,
    fontFamily: 'BloggerSans',
    color: Colors.textColor
  }
})
