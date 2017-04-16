import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BasePage from './BasePostPage';
import {Reddit} from '../utils/API/RedditAPI';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';
import { Actions } from 'react-native-router-flux';

@observer
class User extends BasePage {

    subreddit = this.props.subreddit;
    @observable subredditInfo;

    componentWillMount() {
        super.componentWillMount();
        Reddit.getPosts({subreddit : this.subreddit, filter : 'about'}).then(
            val => {

                this.subredditInfo = val.data;
                console.log(this.subredditInfo);
                this.pageName = this.subredditInfo.name;
                Actions.refresh({title : this.pageName});

            }
        );
    }

    render() {
        return (
            <View>
                {
                    this.subredditInfo ?
                    <View>
                        <View>
                            <Text>
                                {this.subredditInfo.link_karma} - {this.subredditInfo.comment_karma}
                            </Text>

                        </View>
                        {super.render()}
                    </View>
                        :
                        null

                }

            </View>

        )
    }

    getContent() {
        super.getContent({subreddit: this.subreddit, filter : 'submitted'});
    }

}

const styles = StyleSheet.create({});

export default User;