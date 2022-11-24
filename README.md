<h1>Deploy API na AWS EC2: http://18.228.199.33:3333/api-docs/</h1>
This challenge was proposed for a backend developer position, where a simple CRUD should be created, using Typescript, Nest.Js, Swagger and TypeORM.

Access the application requirements [here](https://github.com/MKS-desenvolvimento-de-sistemas/mks-backend-challenge) (pt-BR).

## Stacks used
- (1y exp) Node.Js
- (1y exp) Express
- (6mon exp) Typescript
- (6mon exp) Docker, docker-compose
- (6 mon) TypeORM (PostgreSQL)
# Test local

## Requirements:

Before start, you'l need install: [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) , [NodeJs](https://nodejs.org/en/download/), [Docker](https://docs.docker.com/engine/install/) , [Docker-compose](https://docs.docker.com/compose/install/)

## Runing Local
To run the project, follow the next steps:

## Clone Repository

```bash 
git clone https://github.com/Lucas-Oliveira-Santana/MKS-Backend.git


cd MKS-Backend
```
## Install dependecies 
```bash
 npm install
 
 
 yarn
 ```
Docker up
  ```bash
  sudo docker-compose up -d
  ```
Run Migrations

 ```bash
 npm run typeorm migration:run
 ```
Server up

```bash
 node ./dist/shared/infra/http/server.js
 ```
## API Documentation ( Local )
Once the application is set up, you will be able to access OpenSwagger documentation, all you have to do is browse to http://localhost:3333/api-docs

## not implemented
- Nest
- Redis
