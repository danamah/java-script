// ^^^^^ C. Part3: Bonus  ^^^^^
/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
/**
 * for Example
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

function createCounter(num) {
  let count = num;
  const originValue = num;

  return {
    increment: function () {
      count++;
      //   return count;
      return console.log(count);
    },
    decrement: function () {
      count--;
      //   return count;
      return console.log(count);
    },
    reset: function () {
      count = originValue;
      //   return count;
      return console.log(count);
    },
  };
}

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
