import getRelativeDate from 'libs/getRelativeDate';

export default (items, hideDone) => {
  const result = {};

  items.map(item => {
    if (hideDone && item.isDone) return;

    const key = getRelativeDate(item.added);
    if (typeof result[key] === 'undefined') result[key] = [];
    result[key].push(item);
  });

  return result;
};
