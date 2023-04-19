## url-shortening-service

A service that shortens url and also returns the original url upon request
### Technologies
JavaScript
Node/Express


#### Testing Steps
Clone the application
cd into url-shortening-service/backend <br>
run npm install <br>
run npm start <br>
Open postman/insomnia/vscode, go to http://localhost:8080/api/url/encode <br>
Make a post request with a sample json data { "origUrl": "https://indicina.co/" } <br>
Make a get request to the endpoint http://localhost:8080/api/url/decode with the short url from the above step as the json body to decode the short url <br>
Visit the http://localhost:8080/api/url/statistic/{shorturlId} in postman or browser(preferrable) to get some basic statistics <br>

