const getRandom = (minn, maxx) => {
  const min = Math.ceil(minn);
  const max = Math.floor(maxx);
  return Math.floor(Math.random() * (max - min)) + min;
};

const isEven = (num) => num % 2 === 0;

export { getRandom, isEven };
