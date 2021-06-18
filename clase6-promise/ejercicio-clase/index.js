function testPromise(status) {
  return new Promise((resolve, reject) => {
      setTimeout(() => status 
        ? resolve('Success')
        : reject('Reject')   
      , 300)        
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

testPromise(true)