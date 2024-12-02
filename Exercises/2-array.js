'use strict';

const array = () => {
  const elements = [];
  const retrieve = (index) => elements[index];
  retrieve.add = (item) => elements.push(item);
  retrieve.remove = () => elements.pop();
  return retrieve;
};

module.exports = { array };
