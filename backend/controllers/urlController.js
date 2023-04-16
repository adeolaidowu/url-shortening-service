require('dotenv').config()
const { nanoid } = require('nanoid')
const validUrl = require('valid-url')
const { dataStore, addToDataStore } = require('../data/dataStore')


// encode a url
const encode = async (req, res) => {
    const { origUrl } = req.body;
    const baseUrl = process.env.BASE_URL;
    const urlId = nanoid();

    if (validUrl.isUri(origUrl)) {
        try {
            // check that url doesn't already exist in db
            let existingUrl = dataStore[urlId];
            if (existingUrl) {
                res.json(existingUrl);
            } else {
                const shortUrl = `${baseUrl}/${urlId}`;
                urlObject = {
                    origUrl,
                    shortUrl,
                    createdAt: new Date(),
                };
                // add to db
                addToDataStore(urlId, urlObject);

                res.status(200).json(urlObject)
            }
        } catch (error) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
}


const decode = (req, res) => {
    try {
        const url = dataStore[req.params.urlId];
        if (url) {
            return res.status(200).json(url.origUrl);
        } else res.status(404).json('Not found');
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
    }
}

module.exports = { encode, decode }