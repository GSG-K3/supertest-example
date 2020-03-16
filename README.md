# supertest-example

Basic example and exercise for supertest

### Exercise:

Here we have an app, with a `/users` endpoint. If we call it, it is supposed to return the users from our database. We want to test if the endpoint works correctly.

Take your time to look at the code. We fetch the users array from the models directory and serve it once a request is fired to the `/users` endpoint.

In the test directory, we have a test to see if the name of our first user is `Leanne Graham`.

Take a moment to look at the code, then write a test for the endpoint `/posts`.

- The test is going to fire a fake `get` request and see if it returns a status of `200`.
- The test will check if the returning JSON object is an `Array`
- The test will check if the first object inside the array has a `userId` key.

If you find yourself spending more than 20 mins on it, talk to me quickly.

If you feel like writing more tests, create new files in the models directory using data from [JSON Placeholder](https://jsonplaceholder.typicode.com/), write their controllers and tests and see how it goes.
