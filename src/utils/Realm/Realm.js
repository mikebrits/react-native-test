import Realm from 'realm';
import models from '../../models/models';
import _ from 'lodash';
import uuid from 'uuid';

const schemas = _.map(models, model => model.schema);
console.log("Schemas", schemas);
export let realm = new Realm({
    schema : schemas,
    schemaVersion: 4,
    migration : () => {}
});

_.each(models, model => {
    model.setRealm(realm);
});
