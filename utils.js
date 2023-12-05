export const groupBy = (array, callbackFn) => {
  return array.reduce((groups, item, index, array) => {
    (groups[callbackFn(item, index, array)] ||= []).push(item);
    return groups;
  }, {});
};
