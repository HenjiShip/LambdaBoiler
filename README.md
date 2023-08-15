# Lambda Boilerplate
A Node Express mySQL boilerplate that runs on AWS Lambda, a service that runs serverless functions on a "pay as needed" model. It's also always free so it's nice to host small demo projects on it. 
### Why?
- I prefer to use express to set my endpoints in VScode and I don't like using Amazon's API gateway interface.
- Serverless functions are great for functions that have short execution times, things that don't take long to compute
### Packages installed
- npm i serverless-http (lets express run on Lambda serverless)
- npm i express
### Sidenotes
- AWS Lambda only runs on CommonJS.
- Lambda has cold starts, run functions periodically for warm starts: https://www.pluralsight.com/resources/blog/cloud/how-to-keep-your-lambda-functions-warm
### Lambda Steps
1. Create Lambda functions, click upload, and place files as zip into functions
2. Go to API Gateway, click create API, and build REST API and create new API
3. Click actions on the API page and create resource
- ![image](https://github.com/HenjiShip/LambdaBoiler/assets/128566052/91de40ed-8a17-4698-a368-0f347910774b)
4. Check "Configure as proxy resource", this will let express be in charge of API endpoints instead of API gateway
- ![image](https://github.com/HenjiShip/LambdaBoiler/assets/128566052/721be2d7-c7ae-459e-bf2a-0a5e48e80d49)
5. Add the intended Lambda functions to this api on the next page, in this case I named my Lambda functions "express"
- ![image](https://github.com/HenjiShip/LambdaBoiler/assets/128566052/6e6b70bb-23b4-4bce-bbc8-2c565ec9d114)
6. Deploy the API from actions dropdown, the url to your API will go as: <br>{AWS generated url}.execute-api.us-east-2.amazonaws.com/{API gateway resource name}/{Express endpoints}
   <br>Ex: "https://111111111.execute-api.us-east-2.amazonaws.com/prod/hello"

