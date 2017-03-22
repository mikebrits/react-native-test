import React, {Component} from 'react';
import {StyleSheet, Text, View, RefreshControl} from 'react-native';
import {Reddit} from '../utils/API/RedditAPI';
import PostList from './PostList';
//import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

class BasePage extends Component {

    @observable filter = 'new';
    @observable posts = [];
    @observable refreshing = false;

    componentWillMount() {
        this.getContent();
    }

    render() {
        return (
            <View>
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
                console.log('Val', val);
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

const styles = StyleSheet.create({});

export default BasePage;