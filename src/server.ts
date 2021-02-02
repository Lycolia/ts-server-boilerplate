/**
 * Sample server app
 */
let cnt = 0;
setInterval(() => {
  console.log(cnt);
  cnt++;
}, 500);

/**
 * Sample testing target
 */
export const asyncFunc = async () => {
  return new Promise<boolean>((resolve, _) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
