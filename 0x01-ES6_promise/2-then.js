function handleResponseFromAPI(promise) {
  return promise
    .then((value) => ({
      status: 200,
      body: 'success',
    }))
    .catch((err) => Error)
    .finally((item) => console.log('Got a response from the API'));
}
