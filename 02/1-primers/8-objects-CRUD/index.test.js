import { default as variables } from './index.js';

const { 
    venus,
    earth,
    mars,
    favBooks,
    simonFav,
    brunoFav,
    cargo,
    rocket,
} = variables;

describe('Venus object', () => {
    test('radius property is equal to 6052', () => {
        expect(venus.radius).toBe(6052);
    });
    test('yearLength property is equal to 225', () => {
        expect(venus.yearLength).toBe(225);
    });
    test('surfaceGravity property is equal to 0.91', () => {
        expect(venus.surfaceGravity).toBe(0.91);
    });
    test('moons property is equal to 0', () => {
        expect(venus.moons).toBe(0);
    });
});

describe('Earth object', () => {
    test('radius property is equal to 6378', () => {
        expect(earth.radius).toBe(6378);
    });
    test('yearLength property is equal to 365.25', () => {
        expect(earth.yearLength).toBe(365.25);
    });
    test('surfaceGravity property is equal to 1', () => {
        expect(earth.surfaceGravity).toBe(1);
    });
    test('moons property is equal to 1', () => {
        expect(earth.moons).toBe(1);
    });
});

describe('Mars object', () => {
    test('radius property is equal to 3397', () => {
        expect(mars.radius).toBe(3397);
    });
    test('yearLength property is equal to 687', () => {
        expect(mars.yearLength).toBe(687);
    });
    test('surfaceGravity property is equal to 0.38', () => {
        expect(mars.surfaceGravity).toBe(0.38);
    });
    test('moons property is equal to 2', () => {
        expect(mars.moons).toBe(2);
    });
});

describe('testing getYearLength for each object', () => {
    test('getYearLength method returns "225 (Earth Days)"', () => {
        expect(venus.getYearLength()).toBe('225 (Earth Days)');
    });

    test('getYearLength method returns "365.25 (Earth Days)"', () => {
        expect(earth.getYearLength()).toBe('365.25 (Earth Days)');
    });

    test('getYearLength method returns "687 (mars Days)"', () => {
        expect(mars.getYearLength()).toBe('687 (Earth Days)');
    });
});

describe("favBooks CRUD", () => {
    test("Simon's book should be a string", () => {
        expect(typeof simonFav).toBe("string")
    })

    test("the book should be the same as the one in the object", () => {
        expect(simonFav).toBe("1984")
    })

    test("bruno's book has been updated to 'The Hobbit' from the original", () => {
        expect(brunoFav).toBe("The Hobbit")
    })

    test("Brittney and her favorite book have been added to the favBooks", () => {
        expect(favBooks.Brittney).toBe("The Bluest Eye")
    })

    test("Steven has been removed from favBooks", () => {
        expect(favBooks.Steven).toBe(undefined);
    })
})

describe('cargo', () => {
    test('has property of ship1 with value of 30', () => {
        expect(cargo.ship1).toBe(30);
    });

    test('has property of ship2 with value of 20', () => {
        expect(cargo.ship2).toBe(20);
    });
    test('has property of ship3 with value of 10', () => {
        expect(cargo.ship3).toBe(10);
    });

    test('shareTheLoad method returns an object with balance owed for each person.', () => {
      expect(cargo.shareTheLoad()).toEqual({ ship1: -10, ship2: 0, ship3: 10 });
      cargo.ship1 = 40;
      cargo.ship2 = 80;
      cargo.ship3 = 150;
      expect(cargo.shareTheLoad()).toEqual({ ship1: 50, ship2: 10, ship3: -60 });
    });
});

describe('Rocket', () => {
    test('initially has a full tank of 200 units and correctly calibrated navigation guide (distances)', () => {
        expect(rocket.fuel).toBe(200);
        expect(rocket.fuelCostToA).toBe(20);
        expect(rocket.fuelCostToB).toBe(30);
        expect(rocket.fuelCostToC).toBe(35);
    });

    test('successfully completes a single flight to Planet A.', () => {
        expect(rocket.flyToA()).toBe(true);
        expect(rocket.fuel).toBe(160);
    });

    test('successfully completes a single flight to Planet B.', () => {
        rocket.fuel = 200;
        expect(rocket.flyToB()).toBe(true);
        expect(rocket.fuel).toBe(140);
    });

    test('successfully completes a single flight to Planet C.', () => {
        rocket.fuel = 200;
        expect(rocket.flyToC()).toBe(true);
        expect(rocket.fuel).toBe(130);
    });

    test('correctly returns false if there is not enough fuel for the trip.', () => {
        rocket.fuel = 10;
        expect(rocket.flyToA()).toBe(false);
        expect(rocket.flyToB()).toBe(false);
        expect(rocket.flyToC()).toBe(false);
    });
    
    test('can make three return trips, one to each destination, on a single tank.', () => {
        rocket.fuel = 200;
        expect(rocket.flyToA()).toBe(true);
        expect(rocket.flyToB()).toBe(true);
        expect(rocket.flyToC()).toBe(true);
    });
});