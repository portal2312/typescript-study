const asyncException = async () => {
  throw new Error('error');
};

asyncException().catch(err => console.log(err.message));