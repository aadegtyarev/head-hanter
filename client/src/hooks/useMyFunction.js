export default function useMyFunction() {
  const cloneObj = (oldObj, newObj) => {
    for (let key in oldObj) {
      newObj[key] = oldObj[key];
    }
  };

  return {
    cloneObj,
  };
}
