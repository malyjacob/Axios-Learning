# Axios API
## The Axios API Reference
Requests can be made by passing the relevant config to `axios`.

**_axios(config)_**

```javascript
// Send a POST request
axios({
  method: "post",
  url: "./user/12345",
  data: {
    firstName: "Fred",
    lastName: "FlintStone",
  },
});
```

```javascript
// GET request for remote image in node.js
axios({
  method: "get",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
```
<br/>

## Request method aliases
For convenience aliases have been provided for all supported request methods.

***axios.request(config)***

***axios.get(url[, config])***

***axios.delete(url[, config])***

***axios.head(url[, config])***

***axios.options(url[, config])***

***axios.post(url[, data[, config]])***

***axios.put(url[, data[, config]])***

***axios.patch(url[, data[, config]])***

**Note:**

When we using the alias method `url`, `method`, and `data` properties don't need to be specified in config.




