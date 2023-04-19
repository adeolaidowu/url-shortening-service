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

