import { createLap } from "./index.js";

describe("createLap", () => {
  it("should create an instance of Lap with the correct properties", () => {
    const lap = createLap(400);
    expect(lap).toHaveProperty("lapDistance", 400);
    expect(lap).toHaveProperty("totalDistance", 0);
    expect(lap).toHaveProperty("splits", []);
  });

  it("should correctly add a lap", () => {
    const lap = createLap(400);
    lap.addLap(60);
    expect(lap.splits).toContain(60);
    expect(lap.totalDistance).toEqual(400);
  });
});
