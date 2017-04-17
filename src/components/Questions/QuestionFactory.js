import React from 'react';
import TextQuestion from './QuestionComponents/TextQuestion';
import BooleanQuestion from './QuestionComponents/BooleanQuestion';

class QuestionFactoryClass {

    defs = {
        text: React.createFactory(TextQuestion),
        boolean: React.createFactory(BooleanQuestion)
    }

    getQuestion(type) {
        switch (type) {
            default:
                return this.defs[type] || null;
                break;
        }
    }

}

export let QuestionFactory = new QuestionFactoryClass();