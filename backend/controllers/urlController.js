require('dotenv').config()
const { nanoid } = require('nanoid')
const validUrl = require('valid-url')
const useragent = require('express-useragent')
const { dataStore, addToDataStore } = require('../data/dataStore')


// encode a url
const encode = (req, res) => {
    const { origUrl } = req.body;
    const baseUrl = process.env.BASE_URL;
    const urlId = nanoid();

    if (validUrl.isWebUri(origUrl)) {
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
                    numberOfVisits: 0,
                    createdAt: new Date(),
                };
                // add to db
                addToDataStore(urlId, urlObject);

                res.status(200).json({
                    origUrl,
                    shortUrl,
                    createdAt: new Date(),
                })
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
        const { shortUrl } = req.body
        const startIndex = 22
        const urlId = shortUrl.substr(startIndex) // extracts id from short url
        const url = dataStore[urlId];
        if (url) {
            url.numberOfVisits += 1;
            return res.status(200).json({
                "original-url": url.origUrl
            });
        } else res.status(404).json('Not found');
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
    }
}

const getStatistic = (req, res) => {
    try {
        const url = dataStore[req.params.url_path];
        const ua = useragent.parse(req.headers['user-agent'])
        if (url) {
            return res.status(200).json({
                "user-agent": ua.browser,
                "version": ua.version,
                "os": ua.os,
                "platform": ua.platform,
                "number of visits": url.numberOfVisits
            });
        } else res.status(404).json('Not found');
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
    }
}

module.exports = { encode, decode, getStatistic }