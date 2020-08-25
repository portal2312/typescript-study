const awaitReject = async () => {
  await Promise.reject(new Error('error'));
};

awaitReject().catch(err => console.log(err.message));