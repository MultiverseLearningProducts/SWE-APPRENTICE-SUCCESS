import { default as variables } from './index.js';

const { 
    getStudents,
    getTotal,
    employee,
    averageAge,
    blackHairPercent,
    countryList,
    findFavorite,
    people
} = variables;

describe("getStudents tests", () => {
    const students = {
        "Mariama": 19,
        "Lasana": 18,
        "Wilmer": 22,
        "Fatima": 21,
    }

    test('getStudents returns an array', () => {
        expect(Array.isArray(getStudents(students))).toBe(true);
    })

    test("getStudents returns the key values an array", () => {
        expect(getStudents(students)).toEqual(['Mariama', 'Lasana', 'Wilmer', 'Fatima']);
    })
})

describe("getTotal tests", () => {
    let cart = {
        Chips: 1.99,
        Candy: 0.99,
        Soda: 1.49,
        Beer: 7.99,
        Cigarettes: 7.98,
        EnergyDrink: 2.99,
        IceCream: 2.99,
        LotteryTicket: 3.00,
        Newspaper: 5.00,
        Sandwich: 6.50
    }

    test("getTotal returns a number", () => {
        expect(typeof getTotal(cart)).toBe("number")
    })

    test("getTotal returns the correct total", () => {
        expect(getTotal(cart)).toBe(40.92);
    })
})

describe('Employee shift checker', () => {
    test('weeklyHours returns inital [7,6,7,7]', () => {
        expect(employee.weeklyHours).toEqual([7, 6, 7, 7]);
    });

    test('getTotalHours correctly returns 27', () => {
        expect(employee.getTotalHours()).toBe(27);
    });

    test('addShift can add a new shift to weeklyHours', () => {
        expect(employee.addShift(9)).toBe('Shift added');
        expect(employee.weeklyHours).toEqual([7, 6, 7, 7, 9]);
    });

    test('addShift cannot accept shift that will cause the hours worked to exceed 40', () => {
        expect(employee.addShift(20)).toBe('Shift limit reached');
    });

    test('addShift cannot add a shift that will create more than 5 shifts.', () => {
        expect(employee.addShift(4)).toBe('Shift limit reached');
        expect(employee.weeklyHours).toEqual([7, 6, 7, 7, 9]);
    });
});

describe("people array tests", () => {
    let countries = countryList(people);
    let shows = findFavorite(people)
    test("averageAge should be a number", () => {
        expect(typeof averageAge).toBe("number")
    })

    test("averageAge should return the average rounded to a whole number", () => {
        expect(averageAge).toBe(28)
    })

    test("blackHairPercent should be a number", () => {
        expect(typeof blackHairPercent).toBe("number")
    })

    test("blackHairPercent should return the percent rounded to a whole number", () => {
        expect(blackHairPercent).toBe(24)
    })

    test("countryList should return an object", () => {
        expect(typeof countries).toBe("object")
    })

    test("USA value should be 6", () => {
        expect(countries.USA).toBe(6)
    })

    test("UK value should be 5", () => {
        expect(countries.UK).toBe(5)
    })

    test("findFavorite show return an object", () => {
        expect(typeof shows).toBe("object")
    })

    test("findFavorite counts for Breaking Bad and The Office", () => {
        expect(shows["Breaking Bad"]).toBe(5)
        expect(shows["The Office"]).toBe(4)
    })
})