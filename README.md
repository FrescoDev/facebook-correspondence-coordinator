# Facebook Correspondence Coordinator

The F.C.C. API is a high level coordinator application responsible for communication coordination between NioBi's system and the Facebook messenger user client.

[Apiary documentation](http://docs.facebookcorrespondencecoordinatorapi.apiary.io/#)

* DEV URL: [https://d-fb-correspondence.herokuapp.com/]
* LIVE URL: [https://fb-correspondence.herokuapp.com/]

[![Build Status](https://travis-ci.org/FrescoDev/facebook-correspondence-coordinator.svg?branch=master)](https://travis-ci.org/FrescoDev/facebook-correspondence-coordinator)

### Prerequisities

* node/npm
* docker
* nodemon
* heroku-cli
* babel

### Install and Run Locally

1. Clone the repo
2. Run: ```npm install``` to install project dependencies
3. Run: ```npm run build``` to transpile and build the application
4. Run: ```npm start``` to kickstart and run the server

### Run as Docker Container

1. Run: ```docker build -t "frescodev/facebook-correspondence-coordinator:latest" .``` to build the container image hosted on port 8888
2. Run: ```docker run -p 8888:8888 -d frescodev/facebook-correspondence-coordinator``` to run the container image and map it to your local 8888 port

### Deploy to Heroku

1. Run: ```heroku login``` and enter credentials
2. Run: ```git push [environment] master``` to activate the deployment
3. Run: ```heroku ps:scale web=1git push heroku master``` to ensure at least one instance of the app is running
4. Run: ```heroku open``` to visit the app's URL
5. Run: ```heroku logs``` to view app logs
6. Run: ```heroku addons:create deployhooks:http --url https://hooks.slack.com/services/{token}``` to add slack deploy hook
7. Run: ```heroku apps:rename [newname]``` to rename the app

## Running the Tests

- ```npm run test```

## Testing the API

Test the API using [Postman](https://www.getpostman.com/collections/{id})

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/{id})

## Request & Response Examples

### API Resources

  - [GET /meta](#get-meta)

### GET /meta

Example: http:/{url}/meta

Response body:

    {
        "description": "facebook-correspondence-coordinator",
        "status": "ok"
    }

## System interaction diagram

![diagram](http://i.imgur.com/CQ0z9H4.png)