/*  
    Android limit
On Android asyncstorage has a limitation of 6 MB per default, you might want to increase it
long size = 50L * 1024L * 1024L; // 50 MB 
com.facebook.react.modules.storage.ReactDatabaseSupplier.getInstance(getApplicationContext()).setMaximumSize(size);
*/


import Datastore from 'react-native-local-mongodb'
import AsyncStorage from '@react-native-async-storage/async-storage'
const db = new Datastore({
    filename: 'asyncStorageKey',
    storage: AsyncStorage,
    autoload: true
});

const doa = {
    addUrl: async (urlDoc) => {
        return db.insertAsync(urlDoc);
    }
    , removeUrl: (urlId) => {
        return db.removeAsync({
            _id: urlId
        });

    }
    , updateUrl: async (urlId, urlDoc) => {
        return db.update({
            _id: urlId
        }, { $set: urlDoc }, {});

    }


}

export { db }
export default doa 