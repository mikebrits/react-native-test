import Realm from 'realm';
import models from '../../models/models';
import _ from 'lodash';

const schemas = _.map(models, model => model.schema);
console.log("Schemas", schemas);
export let realm = new Realm({schema : schemas});

_.each(models, model => {
    model.setRealm(realm);
});
