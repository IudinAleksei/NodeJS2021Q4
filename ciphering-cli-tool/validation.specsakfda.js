import { validateConfig } from './validation.js';
// // Applies to all tests in this file
// beforeEach(() => {
//   return initializeCityDatabase();
// });

test('C1-R1-A must be valid', () => {
  expect(() => validateConfig('C1-R1-A')).not.toThrow();
});

test('C2 must throw error', () => {
  expect(() => validateConfig('C2')).toThrow();
});

test('Empty config must throw error', () => {
  expect(() => validateConfig()).toThrow();
});

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

// describe('matching cities to foods', () => {
//   // Applies only to tests in this describe block
//   beforeEach(() => {
//     return initializeFoodDatabase();
//   });

//   test('Vienna <3 veal', () => {
//     expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//   });

//   test('San Juan <3 plantains', () => {
//     expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//   });
// });
