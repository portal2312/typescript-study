Promise.race([Promise.resolve(true), Promise.resolve('hello')])
  .then(value => console.log(value));

Promise.race([Promise.resolve(true), Promise.reject(new Error('hello'))])
  .then(value => console.log(value))
  .catch(error => console.log(error.message));

Promise.race([Promise.reject(new Error('hello')), Promise.resolve(true)])
  .then(value => console.log(value))
  .catch(error => console.log(error.message));

const getRace = <T>(promises: Promise<T>[]) => Promise.race(promises);

getRace<any>([Promise.reject(new Error('hello')), Promise.resolve(true)])
  .then(value => console.log(value))
  .catch(error => console.log(error.message));