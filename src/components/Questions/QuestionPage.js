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
            <ScrollView>
                <View style={styles.container}>
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
        )
    }

}

QuestionPage.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 65,
        padding: 16,
        justifyContent: 'space-between',
        flexDirection: 'column'
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