import uuid from 'uuid';
class BaseModel {

    setRealm(realm){
        this.realm = realm;
    }

    create(fields) {
        this.realm.write(() => {
            this.realm.create(this.schema.name, {
                id: uuid.v4(),
                ...fields
            });

        });
    }

    delete(id){
        this.realm.write(() => {
            this.realm.delete(
                this.realm.objects(this.schema.name).filtered(`id == "${id}"`)
            )
        })
    }

    clear() {
        this.realm.write(() => {
            this.realm.delete(this.realm.objects(this.schema.name));
        })
    }
}

export default BaseModel;