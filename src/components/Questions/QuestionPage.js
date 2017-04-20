import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import {QuestionFactory} from './QuestionFactory';

class QuestionPage extends Component {

    componentWillMount() {
        Actions.refresh({
            title: this.props.title || ""
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    (this.props.totalPages && this.props.pageNumber) &&

                    <View style={styles.progress}>
                        <View style={styles.progressBar}>
                            <View
                                style={[
                                    styles.progressBarProgress,
                                    {
                                        width : `${this.props.pageNumber/this.props.totalPages * 100}%`
                                    }
                                ]}>
                            </View>
                        </View>
                        <View style={styles.progressTextContainer}>
                            <Text style={styles.progressText}>
                                {this.props.pageNumber} / {this.props.totalPages}
                            </Text>
                        </View>
                    </View>

                }

                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.questionContainer}>
                        <View>
                            {
                                this.props.content.questions.map((question, index) => {
                                    return QuestionFactory.getQuestion(question.type)({key: index, ...question.options})
                                })
                            }
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.onNext(this.props.pageNumber + 1)}
                            style={styles.nextButton}
                        >
                            <Text style={{color: 'white'}}>
                                { this.props.nextButtonText || "Next" }
                            </Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        )
    }

}

QuestionPage.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    progress: {
        top: 64,
        position: 'absolute',
        zIndex: 10,
    },
    progressTextContainer: {
        right: 0,
        position: 'absolute',
        padding: 4,
        top: -2,
        //paddingLeft: 8,
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor: 'white',
    },
    progressText: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    progressBar: {
        width: '100%',
        height: 5,
        backgroundColor: '#dddddd'
    },
    progressBarProgress: {
        height: 5,
        backgroundColor: '#32CC32'
    },
    scrollContainer: {
        height: '100%'
    },
    container: {
        paddingTop: 65,
        //justifyContent: 'space-between',
        flexDirection: 'column',
    },
    questionContainer: {
        padding: 16
    },
    nextButton: {
        padding: 16,
        marginTop: 16,
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#3498DB',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default QuestionPage;