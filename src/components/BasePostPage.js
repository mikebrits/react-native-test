import React, {Component} from 'react';
import {StyleSheet, Text, View, RefreshControl} from 'react-native';
import {Reddit} from '../utils/API/RedditAPI';
import PostList from './PostList';
//import {observer} from 'mobx-react/native';
import {observable} from 'mobx';
import Header from './Header';
import BasePage from './BasePage';

class BasePostPage extends BasePage {

    @observable filter = 'new';
    @observable posts = [];
    @observable refreshing = false;
    pageName = 'Super Reddit App';

    componentWillMount() {
        super.componentWillMount();
        this.getContent();
    }

    render() {
        return (
            <View style={styles.view}>
                {
                    this.posts.length ?
                        <PostList posts={this.posts}
                                  onRefresh={this.refreshContent}
                                  refreshing={this.refreshing}
                        />
                        :
                        <Text>
                            Loading Posts..
                        </Text>
                }
            </View>
        )
    }

    getContent(opts) {
        Reddit.getPosts({filter:this.filter, ...opts}).then(
            val => {
                this.posts = val.data.children;
                this.refreshing = false;
            },
            error => {
                this.error = error;
            }
        )
    }

    refreshContent = () => {
        //this.posts = [];
        this.refreshing = true;
        this.getContent();
    }

}

const styles = StyleSheet.create({
    view : {
        paddingTop : 60,
        // paddingBottom: 60,
        backgroundColor: '#eaeaea',
    }
});

export default BasePostPage;