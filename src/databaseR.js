/*  
    Android limit
On Android asyncstorage has a limitation of 6 MB per default, you might want to increase it
long size = 50L * 1024L * 1024L; // 50 MB 
com.facebook.react.modules.storage.ReactDatabaseSupplier.getInstance(getApplicationContext()).setMaximumSize(size);
*/


import Datastore from 'react-native-local-mongodb'
import AsyncStorage from '@react-native-async-storage/async-storage'
const db = new Datastore({
    filename: 'ExpenseX',
    storage: AsyncStorage,
    autoload: true
});
const getData = async () => {
    let d = await db.findAsync({})
    if (d.length < 3) {
        await db.insertAsync(data)
        d = await db.findAsync({})
    }


    return d
}

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

    },


}

const data = [
    {
        date: "09/03/2022", merchant: "Shuttle",
        total: 89.00, status: "Is Progress", comment: "New comment"
    },
    {
        date: "05/03/2022", merchant: "Office supplies",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/08/2022", merchant: "Airline",
        total: 100.00, status: "New", comment: "New comment"
    }, {
        date: "07/03/2022", merchant: "Breakfast",
        total: 10, status: "Reimbursed", comment: "Zee"
    }, {
        date: "05/04/2022", merchant: "Electronics",
        total: 50.00, status: "New", comment: "Better comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Reimbursed", comment: "A comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }
    , {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }, {
        date: "05/03/2022", merchant: "Fast food",
        total: 100.00, status: "Is Progress", comment: "New comment"
    }
]
export { db, getData }
export default doa 