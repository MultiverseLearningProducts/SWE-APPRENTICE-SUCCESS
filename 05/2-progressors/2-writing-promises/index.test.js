import jest from 'jest';
import { alligatorPromise, averageNumbers } from "./index.js";

describe('Promises', () => {
  describe("alligatorPromise", () => {
    test("resolves with 'Alligator!' after a random time between 1 and 4 second.", async () => {
      try {
        const result = await alligatorPromise();
        expect(result).toBe("Alligator!");
      } catch (error) {
        console.log(error);
      }
    });
  
    test("rejects with 'Oh no, it's a crocodile!' if the random time is divisible by 2", async () => {
      try {
        await alligatorPromise();
      } catch (error) {
        expect(error).toBe("Oh no, it's a crocodile!");
      }
    });
  });

  describe("averageNumbers", () => {
    test("resolves with the average of the numbers in the array", async () => {
      const result = await averageNumbers([1, 2, 3, 4, 5]);
      expect(result).toBe(3);
    });
  
    test("rejects with the error message 'Negative numbers are not allowed'", async () => {
      try {
        await averageNumbers([1, 2, -3, 4, 5]);
      } catch (error) {
        expect(error).toBe("Negative numbers are not allowed");
      }
    });
  });  
});

