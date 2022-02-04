# NODE.JS-MONGODB FETCH DATA PROJECT

This project includes a RESTFul POST Api that pulls records from database with given filters. 
Endpoint is : /api/records

Sample Request Body:
```javascript
{
    "startDate": "2015-01-26" ,
    "endDate": "2018-02-02",
    "minCount": 2990,
    "maxCount": 3000
}
```
Response:
```javascript
{
    "code": 0,
    "msg": "Success",
    "records": {
        "records": [
            {
                "totalCount": 2993,
                "key": "coDQRdwh",
                "createdAt": "2016-01-16T16:27:15.711Z"
            },
            {
                "totalCount": 2991,
                "key": "bxoQiSKL",
                "createdAt": "2016-01-29T01:59:53.494Z"
            }
        ]
    }
}
```


## Prerequisites
Necessary packages can run with:
##### `npm install`
In the project directory, you can run project with: 
##### `npm start`

For local running, following .env parameters must be provided:
PORT (The port from which the app starts)
DATABASE_URL (For local MongoDB connection)
BASIC_AUTH (Basic Authentication Encoded String(Example: 'Basic Abcd') )

## API Infos

The API expects four inputs which are:
- startDate (YYYY-DD-MM)
- endDate (YYYY-DD-MM)
- minCount (number)
- maxCount (number)