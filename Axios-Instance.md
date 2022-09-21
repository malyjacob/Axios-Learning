# The Axios Instance
## Create an instance
You can create a new instance of axios with a custom config.

***axios.create([config])***
```javascript
const ins = axios.create({
    baseURL: "https://some-domain.com/api/",
    timeout: 1000,
    header: {
        "X-Custom-Header": "foobar"
    }
})
```
<br/>

## Instance methods
The available instance methods are listed below. The specified config will be merged with the instance config.

***axios#request(config)***

***axios#get(url[, config])***

***axios#delete(url[, config])***

***axios#head(url[, config])***

***axios#options(url[, config])***

***axios#post(url[, data[, config]])***

***axios#put(url[, data[, config]])***

***axios#patch(url[, data[, config]])***

***axios#getUri([config])***