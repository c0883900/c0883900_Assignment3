# Creating Docker Image from node+express application

### Create node express application https://github.com/c0883900/c0883900_Assignment3
## Create Dockerfile in the project and copy the following code in the file
```
# syntax=docker/dockerfile:1
FROM node:18-alpine
LABEL maintainer "dheepasri01@gmail.com"
LABEL build_date "2024-02-17"
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
EXPOSE 3000
```
### Create Docker image using folleing command
``` 
docker build --tag c0883900-node-assignment3 .  
docker images  
```
### Run the image using below commands
```
docker run --detach --publish 3000:3000 c0883900-node-assignment3:latest
docker run --detach --publish 3001:3000 c0883900-node-assignment3:latest
docker ps  
```
### Stop container using below commands
```
docker stop lucid_rosalind  
docker stop 682493b0e35d  
docker ps  
docker ps -a  
```
### Remove xeisting container using below commands
```
docker rm 1061817f4325  
docker rm great_stonebraker  
docker ps -a  
```
### Run the container using environment variable 
```
docker run --detach --publish 3000:80 -e PORT=80 c0883900-node-assignment3:latest
docker run --detach --publish 3000:80 -e PORT=80 NAME=C1 c0883900-node-assignment3:latest
docker run --detach --publish 3001:8080 -e PORT=80 -e NAME=C1 c0883900-node-assignment3:latest
```
### Run the container using environment variable using file
```
docker run --detach --publish 3000 --env-file my-env.txt c0883900-node-assignment3:latest
```