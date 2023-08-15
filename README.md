# Lambda Boilerplate
A Node Express mySQL boilerplate that runs on AWS Lambda, a service that runs serverless functions on a "pay as needed" model. It's also always free so it's nice to host small demo projects on it. 
### Why?
I prefer to use express to set my endpoints in VScode and I don't like using Amazon's API gateway interface.
### Packages installed
- npm i serverless-http (lets express run on Lambda serverless)
- npm i express
### Sidenotes
- AWS Lambda only runs on CommonJS.
### Lambda Steps
1. Create Lambda functions, click upload, and place files as zip into functions
2. Go to API Gateway, click create API, and build REST API and create API with default settings
3. Click actions on the API page and create resource
- ![image](https://github.com/HenjiShip/LambdaBoiler/assets/128566052/91de40ed-8a17-4698-a368-0f347910774b)
4. Check "Configure as proxy resource", this will let express be in charge of API endpoints instead of API gateway
- ![image](https://github.com/HenjiShip/LambdaBoiler/assets/128566052/8675bb43-bd75-4fe8-ade2-ed161e64d482)
5. Add the intended Lambda functions to this api on the next page, in this case I named my Lambda functions "express"
- ![image](https://github.com/HenjiShip/LambdaBoiler/assets/128566052/c6d16732-2bde-4e5b-ad4a-8226ae935250)

