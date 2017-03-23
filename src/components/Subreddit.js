import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BasePage from './BasePostPage';
import {Reddit} from '../utils/API/RedditAPI';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';
import { Actions } from 'react-native-router-flux';

@observer
class Subreddit extends BasePage {

    subreddit = this.props.subreddit;
    @observable subredditInfo;

    componentWillMount() {
        console.log("Subreddit",  this.props.subreddit);
        super.componentWillMount();
        Reddit.getSubredditInfo(this.subreddit).then(
            val => {

                this.subredditInfo = val.data;
                this.pageName = this.subredditInfo.display_name;
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
                        {super.render()}
                    </View>
                        :
                        null

                }

            </View>

        )
    }

    getContent() {
        super.getContent({subreddit: this.subreddit});
    }

}

const styles = StyleSheet.create({});

export default Subreddit;