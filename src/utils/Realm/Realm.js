import Realm from 'realm';
import models from '../../models/models';
import _ from 'lodash';
import uuid from 'uuid';

const schemas = _.map(models, model => model.schema);
console.log("Schemas", schemas);
export let realm = new Realm({
    schema : schemas,
    schemaVersion: 2,
    migration: function(oldRealm, newRealm) {
        // only apply this change if upgrading to schemaVersion 1
        if (oldRealm.schemaVersion < 2) {
            var oldObjects = oldRealm.objects('Image');
            var newObjects = newRealm.objects('Image');

            // loop through all objects and set the name property in the new schema
            for (var i = 0; i < oldObjects.length; i++) {
                newObjects[i].id = uuid.v4();
            }
        }
    }
});

_.each(models, model => {
    model.setRealm(realm);
});
