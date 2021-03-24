# walmart-api

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running docker

```bash
# build
$ docker build -t walmart-api .

# run
$ docker run -e host.docker.internal --name walmart-api-v1 -d --rm -p 3000:3000  -e "DB_STR=mongodb://brandDiscountsUser:brandDiscountsPassword@host.docker.internal:27017/desafio_walmart?authSource=admin" walmart-api

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
