const log = (arg1, arg2, arg3) => {
  /* eslint-disable */
  console.log('===================================');
  console.log(arg1);
  if (arg2) console.log(arg2);
  if (arg3) console.log(arg3);
  console.log('===================================');
};

export default log;
