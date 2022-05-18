# docker-demo-with-docker-compose

## About this Project
1. Create 2 nodejs applications using express servers with GET and POST routes
2. The first application "ui-mock" makes a POST call to the second application "api-mock", which appends the request body to a file.
3. Use docker compose to run the 2 applications simultaneously in individual containers and ccommunicate with each other
4. We have exposed the "api-mock" port as well. Which means, we can also access the "api-mock" as well.
5. ui is exposed in port 3000 and api in post 4000.

## How to run
1. Goto the directory from treminal.
2. Build and run the docker container
```
docker compose up --build
```
3. Use Postman to make request to port 3000
sample curl:
```
curl --location --request POST 'http://localhost:3000/' \
--header 'Content-Type: application/json' \
--data-raw '{
"name":"Monika317 may",
"domain":"backend"
}'
```

## Problems Encountered and solutions
1. Problem :
connect ECONNREFUSED 127.0.0.1:4000
Even when both the servers were up and running in their individual containers, we got this error while "ui" was trying to make a request to "api". This worked well when we run both servers locally.
Solution: configure hostname same as name of the service in docker-compose.yml file.
Previous:
```
const options = {
    hostname: 'localhost',
    port: '4000',
    path: `/`,
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  }; 
 ```

Updated:
```
const options = {
    hostname: 'myapi',
    port: '4000',
    path: `/`,
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  }; 
 ```
