# Interceptors
You can intercept request or response before they are handled by `then` or `catch`.

```javascript
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
```
If you need to remove an interceptor later you can:  
```javascript
const myInterceptor = axios.interceptors.request.use(()=>{})

axios.interceptors.request.eject(myInterceptor)
```

You can add interceptor to a custom instance of axios:
```javascript
const ins = axios.create()

ins.interceptor.request.use(()=>{})
```
