import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BasePage from './BasePage';
import {Reddit} from '../utils/API/RedditAPI';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

@observer
class Subreddit extends BasePage {

    subreddit = this.props.match.params.subreddit;
    @observable subredditInfo;

    componentWillMount() {
        super.componentWillMount();
        Reddit.getSubredditInfo('r/' + this.subreddit).then(
            val => {
                console.log(val);
                this.subredditInfo = val.data;
            }
        );
    }

    render() {
        return (
            <View>
                {
                    this.subredditInfo ?
                    <View>
                        <Text>
                            {this.subredditInfo.display_name}
                        </Text>
                        {super.render()}
                    </View>
                        :
                        null

                }

            </View>

        )
    }

    getContent() {
        super.getContent({subreddit: 'r/' + this.subreddit});
    }

}

const styles = StyleSheet.create({});

export default Subreddit;