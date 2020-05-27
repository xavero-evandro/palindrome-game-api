# Palindrome Game API

## Using Docker -- RECOMMENDED

## Run this to start

```
docker-compose up -d
```

### Just run this command to install all dependencies

```
npm install
```

### and then run this command to start

```
npm run start
```

### Or for watch development

```
npm run start:dev
```

### Endpoints will be on localhost:3333

# Swagger Api Documentation

## Go to `GET /` endpoint to take a look into the API Docs

# Endpoints

### GET - /api/getScores

### Example of a request

```
http://localhost:3333/api/getScores
```

### Should return the TOP 5 Scores

```
[
  {
    "name": "Evandro",
    "points": 27
  },
  {
    "name": "Carolina",
    "points": 20
  },
  {
    "name": "Carolina",
    "points": 15
  },
  {
    "name": "Xavero",
    "points": 10
  },
  {
    "name": "Jose",
    "points": 5
  }
]
```

### POST - /api/submitEntry

### Request Query Params

`name - required - string`

`word - required - string`

### Example of a request

```
http://localhost:3333/api/submitEntry
```

## Example of a request body

```
{
	"name": "Evandro",
  "word": "a man a plan a canal panama"
}
```

### Should return how many point you score if the word is a Palindrome

```
{
  "points": 27
}
```

# Test

## Run test

```
npm run test
```

## Run test with coverage

```
npm run test:coverage
```

## I also added a Insominia import file so you can use it

## Fell free to play and improve it
