# wa-movies-Backend - Documentation

## Get start

### Dependences needed

- [Nodejs](https://nodejs.org/en/download/) (v16.17 or LTS)
- Npm (8.15)
- MongoDB (6.0 or LTS)( [how insatll container](#How-install-mongo-docker) )

---

## First - Clone project

clone this repository

```
git clone https://github.com/AndersonAndrad/wa-movies-backend.git
```

## Second - Configure enviroments

Copy and past .env.example and rename to .env

you can change app port, past you mongo uri connection and API url

## Third - Install project

```
npm install
```

## Fourth - Run project

```
npm start
```

**OBS** If you want, you can use mock server with this tutorial...

Install json server to run a mock in localhost

```
npm install -g json-server
```

Navigate to src/infra/mock and run this command

```
json-server --watch movies.mock.json --port 3001
```

## How install mongo docker

```
docker run --name databasename -p 27017:27017 -d -t mongo
```

This container don't have password to connect to database
