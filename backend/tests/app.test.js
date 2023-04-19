const request = require('supertest')
const app = require('../app')

describe("POST /encode", () => {

    describe("given a valid url", () => {
        //should return with a 200 status code
        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/url/encode").send({
                origUrl: "https://indicina.co/"
            })
            expect(response.statusCode).toBe(200)
        })

        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/api/url/encode").send({
                origUrl: "https://google.com"
            })
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
        })
    })

    describe("given an invalid url", () => {
        //should return bad request
        test("should respond with a 400 status code", async () => {
            const response = await request(app).post("/api/url/encode").send({
                origUrl: "httpa:://indicina.co/"
            })
            expect(response.statusCode).toBe(400)
        })
    })
})

describe("POST /encode", () => {

    describe("given a valid url", () => {
        //should return with a 200 status code
        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/url/encode").send({
                origUrl: "https://indicina.co/"
            })
            expect(response.statusCode).toBe(200)
        })

        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/api/url/encode").send({
                origUrl: "https://google.com"
            })
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
        })
    })

    describe("given an invalid url", () => {
        //should return bad request
        test("should respond with a 400 status code", async () => {
            const response = await request(app).post("/api/url/encode").send({
                origUrl: "httpa:://indicina.co/"
            })
            expect(response.statusCode).toBe(400)
        })
    })
})

describe("GET /decode", () => {

    const db = {
        "G2uLI34PKfZnTdkRp6js_": {
            origUrl: "https://facebook.com",
            shortUrl: "http://localhost:8080/G2uLI34PKfZnTdkRp6js_",
            numberOfVisits: 0,
            createdAt: new Date(),
        }
    }

    describe("given a valid short url", () => {
        const urlData = {
            shortUrl: "G2uLI34PKfZnTdkRp6js_"
        }
        const response = db[urlData.shortUrl]
        test("should respond with original url", () => {
            expect(response.origUrl).toBe("https://facebook.com")
        })

        test("should specify json in the content type header", async () => {
            const response = await request(app).get("/api/url/decode").send(urlData)
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
        })
    })

    describe("given an invalid short url", () => {
        const urlData = {
            shortUrl: "G2uLI34PKfZnTdkRp6xyz_"
        }
        const response = db[urlData.shortUrl]
        test("should respond with a 400 status code", () => {
            expect(response).toBeUndefined()
        })
    })
})