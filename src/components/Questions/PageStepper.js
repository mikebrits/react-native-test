import React from 'react';
import {Actions} from 'react-native-router-flux';
import QuestionData from './QuestionData';

class PageStepper {

    constructor(questionSet, onFinish) {
        this.questionSet = questionSet || QuestionData;
        this.currentPage = 1;
        this.onFinish = onFinish;
        this.totalPages = this.questionSet.pages.length;

        this.goToPage(this.currentPage);
    }

    loadPage() {
        const page = this.questionSet.pages[this.currentPage - 1];
        console.log(page);
        Actions['questionPage']({
            title: page.title,
            content: page.content,
            pageNumber : this.currentPage,
            totalPages : this.totalPages,
            nextButtonText: this.currentPage == this.totalPages ? 'Finish' : 'Next',
            onNext: this.goToPage
        })
    }

    goToPage = (page) => {
        this.currentPage = page;
        if (this.currentPage > this.totalPages) {
            this.onFinish();
        }
        else {
            this.loadPage();
        }
    }
}


export default PageStepper;