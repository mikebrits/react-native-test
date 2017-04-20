import React from 'react';
import Image from './GalleryImage';
import {GalleryItems} from '../../models/GalleryItems';
import {Actions} from 'react-native-router-flux';

class GalleryItem {

    constructor(type, onFinish){
        this.type = type;
        this.onFinish = onFinish;
    }

    modifiedOnFinish(){
        GalleryItems.create({type : this.type})
    }

    defs = {
        image: React.createFactory(Image),
        // boolean: React.createFactory(BooleanQuestion)
    };

    getGalleryItem(type) {
        switch (type) {
            default:
                return this.defs[type] || null;
                break;
        }
    }

}

export let QuestionFactory = new QuestionFactoryClass();