# Config Defaults
## Config Defaults
You can specify config defaults that will be applied to every request.
<br/>

## Global axios defaults
```javascript
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```
<br/>

## Custom instance defaults
```javascript
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```
<br/>

## Config order of precedence
Config will be merged with a order of precedence. The order is library defaults found in `lib/defaults.js`, then `defaults` property of the instance, and finally `config` argument for the request. The latter will take precedence over the former.
```javascript
// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
const instance = axios.create();

// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;

// Override timeout for this request as it's known to take a long time
instance.get('/longRequest', {
  timeout: 5000
});
```
