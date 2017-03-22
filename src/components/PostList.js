import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    RefreshControl,
    Image,
    View
} from 'react-native';

import _ from 'lodash';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

import { Link } from 'react-router-native'


@observer
class PostList extends Component {

    @observable refreshing;

    render() {
        return (
            <ScrollView style={styles.view}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.props.refreshing}
                                onRefresh={this.props.onRefresh}
                            />
                        }
            >
                {_.map(this.props.posts, (post, index) => {
                    let thumbnail;
                    switch(post.data.thumbnail){
                        case 'self':

                            break;
                        case 'image': break;
                        case 'default' : break;
                        default:
                            thumbnail = post.data.thumbnail;
                            break;
                    }
                    return (
                        <View  key={index}
                               style={styles.post}
                        >
                            {
                                thumbnail &&
                                    <Image
                                        style={{width: '100%', height: 100}}
                                        source={{uri: thumbnail}}
                                    />
                            }

                            <View style={styles.postContent}>
                                <Text style={styles.postTitle}>{post.data.title}</Text>
                                <Link to={post.data.subreddit_name_prefixed}>
                                    <Text>{post.data.subreddit_name_prefixed}</Text>
                                </Link>
                            </View>


                        </View>
                    )
                })}
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    view: {
        padding: 5
    },

    post: {
        marginBottom: 8,
        backgroundColor: 'white',
        borderRadius : 5,
        overflow : 'hidden'
    },

    postTumbnail : {
        //marginBottom: 8
    },

    postContent : {
        padding: 15
    },

    postTitle : {
        fontSize: 13,
    }
});

export default PostList;