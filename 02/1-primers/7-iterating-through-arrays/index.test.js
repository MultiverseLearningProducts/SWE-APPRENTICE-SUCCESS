import { default as variables } from './index.js';

const { 
    tenDigits,
    reverseTen,
    evenAdds,
    stringExcept,
    levelUp,
    maxMinDiff,
    matrixSum,
    targetPractice,
    arraySameOrdered,
    arraySameUnordered
} = variables;

describe('tenDigits', () => {
  test('tenDigits array contains the numbers 0 through 10 in ascending order', () => {
    expect(tenDigits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(tenDigits.length).toBe(11);
  });
});

describe('reverseTen', () => {
  test('reverseTen array contains the numbers 10 through 0 in descending order', () => {
    expect(reverseTen).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    expect(reverseTen.length).toBe(11);
  });
});

describe('evenAdds', () => {
  test('evenAdds array contains the even numbers from 1 to 20 in ascending order', () => {
    expect(evenAdds).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    expect(evenAdds.length).toBe(10);
  });
});

describe('stringExcept', () => {
    test("returns a string", () => {
        expect(typeof stringExcept([1, 2, 3, 4], 3)).toBe("string")
    });

    test('removes last item and trailing space', () => {
        expect(stringExcept([1,2,3,4], 4)).toBe('1 2 3')
    });

    test('returns a string with input value removed', () => {
        expect(stringExcept([1, 3, 2, 3, 3, 3, 4, 3], 3)).toBe('1 2 4')
    });
})

describe('levelUp', () => {
    test("returns a number", () => {
        expect(typeof levelUp([2, 5])).toBe("number")
    });

    test('Calculates correctly', () => {
        expect(levelUp([1, 2, 3])).toBe(8)
      })
    
    test('should handle zero, negatives and decimals', () => {
        expect(levelUp([1, 0, -5, 1.5])).toBe(-5.5)
    })
})

describe('maxMinDiff', () => {
    test("returns a number", () => {
        expect(typeof maxMinDiff([6, 10, 3])).toBe("number")
    });

    test('maxMinDiff for [-4, -6, 0, 5, 1]', () => {
        expect(maxMinDiff([-4, -6, 0, 5, 1])).toBe(11)
    });

    test('maxMinDiff for [6, 10, 3]', () => {
        expect(maxMinDiff([6, 10, 3])).toBe(7)
    });
})

describe('matrixSum', () => {
    test("returns a number", () => {
        expect(typeof matrixSum([[1, 5], [-2, 9]])).toBe("number")
    });

    test('Matrix Sum ', () => {
        expect(matrixSum([[3, 2], [1, 8], [11, -2]])).toBe(5 + 9 + 9)
    })

    test('Matrix sum for example provided', () => {
        expect(matrixSum([[1, 2, 20], [-2, 10]])).toBe(31)
    });
})

describe('Target practice', () => {

    test('should return a pair that adds to sum', () => {
      const arr = [1, 5, 2, 4, 3]
      const target = 7
      const [i,j] = targetPractice(arr, target)
      expect(arr[i] + arr[j]).toBe(target)
    })
  
    test('should return false if impossible', () => {
      expect(targetPractice([1,2,3], 10)).toBe(false)
    })
  
})

describe('Array same ordered', () => {

    test('should work on empty arrays', () => {
      expect(arraySameOrdered([], [])).toBe(true)
    })
  
    test('should care about types', () => {
      expect(arraySameOrdered(['1'], [1])).toBe(false)
    })
  
    test('should return true if same ordered', () => {
      expect(arraySameOrdered([1, 2, 3], [1, 2, 3])).toBe(true)
    })
  
    test('should return false if same but unordered', () => {
      expect(arraySameOrdered([1, 2, 3], [3, 1, 2])).toBe(false)
    })
  
    test('should return false if not same', () => {
      expect(arraySameOrdered([1, 2, 3], [1, 2, 3, 4])).toBe(false)
    })
  
})

describe('Array same unordered', () => {

    test('should work on empty arrays', () => {
      expect(arraySameUnordered([], [])).toBe(true)
    })
  
    test('should care about types', () => {
      expect(arraySameUnordered(['1'], [1])).toBe(false)
    })
  
    test('should return true if same ordered', () => {
      expect(arraySameUnordered([1, 2, 3], [1, 2, 3])).toBe(true)
    })
  
    test('should return true if same but unordered', () => {
      expect(arraySameUnordered([2, 1, 2], [1, 2, 2])).toBe(true)
    })
  
    test('should return false if not same', () => {
      expect(arraySameUnordered([1, 2, 4], [1, 2, 3])).toBe(false)
    })
  
    test('should be careful of duplicates e.g. [1, 2, 2] compared to [1, 1, 2] is false', () => {
      expect(arraySameUnordered([1, 2, 2], [1, 1, 2])).toBe(false)
    })
  
})