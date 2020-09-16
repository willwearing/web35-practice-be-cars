## Cars backend (practice)

| HTTP method | endpoint        |
| ----------: | :-------------- |
|         GET | `/api/cars/`    |
|        POST | `/api/cars/add` |

### GET

The GET method returns the following object:

```js
{
  "_id": "5f627d6e60d20430d24a1f2c",
  "make": "hyundai",
  "model": "santa fe",
  "year": 2018,
  "color": "blue",
  "mileage": 43567,
  "createdAt": "2020-09-16T21:02:38.633Z",
  "updatedAt": "2020-09-16T21:02:38.633Z",
  "__v": 0
}

```

### POST

The POST method requires the following object:

```js
{
	"make": "hyundai",
	"model": "santa fe",
	"year": 2018,
	"color": "blue",
	"mileage": 43567
}
```

POST key:value

| key       | value            | type   | required |
| :-------- | :--------------- | :----- | :------- |
| `make`    | manufacturer     | string | true     |
| `model`   | car model        | string | true     |
| `year `   | manugacture year | number | true     |
| `color`   | car color        | string | false    |
| `mileage` | car mileage      | number | false    |
