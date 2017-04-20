import BaseModel from './BaseModel';
import uuid from 'uuid';

class ImagesModel extends BaseModel {
    constructor() {
        super();
        this.schema = {
            name: 'Image',
            primaryKey : 'id',
            properties: {
                ...this.baseFields,
                path: {type: 'string', optional: true},
                notes: {type: 'string', optional: true},
                lat: {type: 'double', optional: true},
                lon: {type: 'double', optional: true},
            }
        }
    }
}

export let Images = new ImagesModel();
