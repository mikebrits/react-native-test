import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import moment from 'moment';
import Link from './Link';
import {Actions} from 'react-native-router-flux';

class Post extends Component {

    componentWillMount() {
        switch (this.props.post.data.thumbnail) {
            case 'self':

                break;
            case 'image':
                break;
            case 'default' :
                break;
            default:
                this.thumbnail = this.props.post.data.thumbnail;
                break;
        }
    }

    render() {

        const post = this.props.post;
        return (
            <View
                style={styles.post}
            >

                <View style={styles.postDetails}>
                    <Link to="subreddit"
                          data={{subreddit: post.data.subreddit_name_prefixed}}
                          style={styles.subredditLink}
                          text={post.data.subreddit_name_prefixed}
                    />
                    <Link to="user"
                          data={{subreddit: "u/" + post.data.author}}
                          style={styles.authorLink}
                          text={`u/${post.data.author}`}
                    />
                </View>

                <View style={styles.postContent}>
                    <Text style={[styles.postTitle, this.thumbnail && styles.titleWithThumbnail]}>
                        {post.data.title}
                    </Text>
                    {
                        this.thumbnail &&
                        <Image
                            style={styles.postThumbnail}
                            source={{uri: this.thumbnail}}
                        />
                    }
                </View>


            </View>
        )
    }

}

const styles = StyleSheet.create({
    post: {
        marginBottom: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden'
    },

    postTitle: {
        fontSize: 15,
    },

    titleWithThumbnail : {
        maxWidth : '85%'
    },

    postThumbnail: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },

    postContent: {
        padding: 8,
        flexDirection: 'row',
        justifyContent : 'space-between'
    },

    postDetails: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: '#eaeaea',
        padding: 8,
        borderBottomWidth: 1,
    },

    subredditLink: {
        color: '#b1b1b1',
        fontSize : 10,
        marginRight : 8
    },

    authorLink: {
        color: '#b1b1b1',
        fontSize : 10,
    },
});

export default Post;