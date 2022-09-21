# Getting Started

## What is Axios?

Axios is a **_promise-based_** Http Client for `node.js` and te browser.

On the server side, it uses the native node.js `http` module, while on the client it uses XMLHttpRequests.
<br/>

## Features

- **Make `XMLHttpRequests` from the browser**
- **Make `http` requests from node.js**
- **Suppress the `Promise` API**
- **Intercept requests and response**
- **Transform requests and responses data**
- **Cancel the request**
- **Automatic Transforms for JSON data**
- **Client side support for protecting against XSRF**

## Example

Performing a `GET` request:

```typescript
const axios = require("axios");

axios
  .get("http://localhost:3000/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
```

Performing a `POST` request:

```typescript
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
Performing multiple concurrent requests:
```javascript
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```
