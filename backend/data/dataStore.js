const dataStore = {}

const addToDataStore = (id, urlObject) => {
    try {
        if (!dataStore.hasOwnProperty(id)) {
            dataStore[id] = urlObject
        } else {
            throw Error("The URL already exists")
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { dataStore, addToDataStore }