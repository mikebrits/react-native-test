import BaseModel from './BaseModel';
import uuid from 'uuid';

class ImagesModel extends BaseModel {
    constructor() {
        super();
        this.schema = {
            name: 'Image',
            properties: {
                id: {type: 'string'},
                path: {type: 'string', optional: true},
                notes: {type: 'string', optional: true},
                lat: {type: 'double', optional: true},
                lon: {type: 'double', optional: true},
                timestamp: {type: 'date'}
            }
        }
    }

    create(options) {
        super.create({
            ...options,
            timestamp : new Date()
        });
    }

}

export let Images = new ImagesModel();
