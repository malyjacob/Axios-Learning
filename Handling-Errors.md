# Handling Errors
```javascript
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```
Using the `validateStatus` config option, you can define HTTP code(s) that should throw an error.
```javascript
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  }
})
```
Using `toJSON` you get an object with more information about the HTTP error.
```javascript
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```
