import BaseModel from './BaseModel';
import uuid from 'uuid';

class GalleryItemModel extends BaseModel {
    constructor() {
        super();
        this.schema = {
            name: 'GalleryItem',
            primaryKey : 'id',
            properties: {
                ...this.baseFields,
                type: {type: 'string'},
            }
        }
    }

}

export let GalleryItems = new GalleryItemModel();
