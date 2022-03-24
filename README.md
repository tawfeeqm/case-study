
# Case-Study

A RESTful API with a single endpoint that fetches the records data.




## Run Locally

Go to a directory

```bash
  cd /myDirectory
```
Clone the project

```bash
  git clone https://github.com/tawfeeqm/case-study.git
```

Go to the project directory

```bash
  cd case-study
```

Install dependencies

```bash
  npm install
```
To run tests, run the following command

```bash
  npm test
```
Start the server

```bash
  npm start
```


## API Reference

#### Get List of Records

```http
  POST /v1/api/records
```
#### Request
| Request Payload | Type     | Format                |Description                |
| :-------- | :------- | :------------------------- | :------------------------- |
| `startDate` | `str` | `Date YYYY-MM-DD` |**Required** |
| `endDate` | `str` |  `Date YYYY-MM-DD` |**Required** |
| `minCount` | `int` |  |**Required** 
| `maxCount` | `int` |  |**Required** |


#### Successful Response
| Response Payload | Type     | Description                |
| :-------- | :------- | :------------------------- | 
| `code` | `int` | `0` |
| `msg` | `str` |  `Success` |
| `records` | `array of objects` | `[{"key":"TAKwGc6Jr4i8Z487","createdAt":"2017-01-28T01:22:14.398Z","totalCount":2800}]` | 


#### Failed Response
| Response Payload | Type     | Description                |
| :-------- | :------- | :------------------------- | 
| `code` | `int` | `HTTP error code` |
| `msg` | `str` |  `Error message` |
