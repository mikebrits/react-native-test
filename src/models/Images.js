import BaseModel from './BaseModel';

class ImagesModel extends BaseModel{
    constructor(){
        super();
        this.schema = {
            name: 'Image',
            properties: {
                path: 'string'
            }
        }
    }
}

export let Images = new ImagesModel();
