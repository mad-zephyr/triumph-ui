// const user = {
//   name: 'Alice',
//   sayHi: () => {
//     console.log(this.name);
//   },
// };

// const user2 = {
//   name: 'Jhone',
// };

// Object.apply(user.sayHi, [user2]);
// user.sayHi.call(user2);

// async function fetchData() {
//   try {
//     const response = await fetch('https://andys.md');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Ошибка:', error);
//   }
// }

// fetchData();

// async function getUserData(id: number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === 0) {
//         reject('Invalid user ID');
//       } else {
//         resolve({ id, name: 'User ' + id });
//       }
//     }, 1000);
//   });
// }

// const userIds = [1, 2, 0, 3];
// const errorMessage = 'Failed to load user: ';

// const fetchAll = async () => {
//   try {
//     const resultsAll = await Promise.allSettled(userIds.map(getUserData));

//     resultsAll.forEach((result) => {
//       if (result.status === 'fulfilled') {
//         console.log(result.value);
//       } else {
//         console.log(errorMessage, result.status);
//       }
//     });
//   } catch (e) {
//     console.log('Error: ', e);
//   }
// };

// fetchAll();

// const resultsAll = Promise.all(userIds.map(getUserData));
// const results = Promise.allSettled(userIds.map(getUserData));

// resultsAll
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log('ERROR: ===', e);
//   });

// results.then((result) => {
//   result.forEach((item) => {
//     if (item.status === 'fulfilled') {
//       console.log(item.value);
//     } else {
//       console.log(errorMessage, item.reason);
//     }
//   });
// });

// const orders = [
//   { id: 1, amount: 120, paid: true },
//   { id: 2, amount: 80, paid: false },
//   { id: 3, amount: 200, paid: true },
//   { id: 4, amount: 50, paid: false },
// ];

// const result = Object.groupBy(orders, (item) =>
//   item.paid ? 'paid' : 'unpaid'
// );

// const paidOrdersIds = result.paid?.map((order) => order.id);
// const total = result.paid?.reduce<number>((acc, cur) => acc + cur.amount, 0);

// const result = orders.reduce<{ total: number; paidIds: number[] }>(
//   (acc, cur) => {
//     if (cur.paid) {
//       acc.paidIds.push(cur.id);
//       acc.total = acc.total + cur.amount;
//     }

//     return acc;
//   },
//   { total: 0, paidIds: [] }
// );

// console.log({ result, paidOrdersIds, total });

// firstDuplicate([2, 1, 3, 5, 3, 2]); // ➜ 3
// firstDuplicate([1, 2, 3, 4]); // ➜ null
// firstDuplicate([4, 5, 6, 7, 4]);

// // function firstDuplicate<T>(arr: Array<T>): T | null {
// //   const map: Record<string, number> = {};

// //   for (const item of arr) {
// //     if (map[`${item}`]) {
// //       return item;
// //     }
// //     map[`${item}`] = 1;
// //   }

// //   return null;
// // }

// // function firstDuplicate<T>(arr: T[]): T | null {
// //   const seen = new Set<T>();

// //   for (const item of arr) {
// //     if (seen.has(item)) return item;
// //     seen.add(item);
// //   }

// //   return null;
// // }

// function firstDuplicate<T>(arr: T[]): T | null {
//   const map = new Map<T, T>();

//   for (const item of arr) {
//     if (map.has(item)) {
//       return item;
//     }
//     map.set(item, item);
//   }

//   return null;
// }

// isAnagram('listen', 'silent'); // true
// isAnagram('hello', 'world');

// function isAnagram(word1: string, word2: string) {
//   if (word1 || word2 || word1.length !== word2.length) {
//     return false;
//   }

//   const optimizeWord = (word: string) =>
//     word
//       .toLowerCase()
//       .split('')
//       .sort((a, b) => a.localeCompare(b))
//       .join('');

//   return optimizeWord(word1) === optimizeWord(word2);
// }

// // flatten([1, [2, [3, 4]], 5]);

// // function flatten<T>(arr: T[]): T[] {
// //   let flat: T[] = [];

// //   for (const item of arr) {
// //     if (Array.isArray(item)) {
// //       const result = flatten(item);
// //       flat = [...flat, ...result];
// //     } else {
// //       flat.push(item);
// //     }
// //   }

// //   return flat;
// // }

// function isAnagramMap(word1: string, word2: string): boolean {
//   if (!word1 || !word2 || word1.length !== word2.length) {
//     return false;
//   }

//   const map = new Map<string, number>();

//   for (const char of word1.toLowerCase()) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }

//   for (const char of word2.toLowerCase()) {
//     if (!map.has(char)) {
//       return false;
//     }

//     map.set(char, map.get(char)! - 1);

//     if (map.get(char) === 0) {
//       map.delete(char);
//     }
//   }

//   return map.size === 0;
// }

// function flattenIterative<T>(input: T[]): T[] {
//   const result: T[] = [];
//   const stack = [...input];

//   while (stack.length) {
//     const current = stack.pop();
//     Array.isArray(current) ? stack.push(...current) : result.push(current);
//   }

//   return result.reverse();
// }
