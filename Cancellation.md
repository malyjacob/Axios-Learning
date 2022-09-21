# Cancellation
## AbortController
Starting from `v0.22.0` Axios supports `AbortController` to cancel requests in fetch API way:
```javascript
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()
```
