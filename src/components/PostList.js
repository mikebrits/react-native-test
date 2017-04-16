import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    RefreshControl,
    View
} from 'react-native';

import _ from 'lodash';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

import Post from './Post';


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
                    return (
                        <Post post={post} key={index}/>
                    )
                })}
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    view: {
        padding: 5
    }
});

export default PostList;