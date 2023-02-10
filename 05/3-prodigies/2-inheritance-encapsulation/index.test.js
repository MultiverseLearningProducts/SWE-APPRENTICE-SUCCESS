import { Contestant, Champion } from "./index";

describe("Contestant", () => {
  it("has a name and pieEaten property", () => {
      const contestant = new Contestant("Jerry", 0);
      expect(contestant.name).toBe("Jerry");
      expect(contestant.pieEaten).toBe(0);
  });

  it("can eat pie", () => {
      const contestant = new Contestant("Jerry", 0);
      contestant.eatPie(3);
      expect(contestant.pieEaten).toBe(3);
  });

  it("knows when it's full", () => {
      const contestant = new Contestant("Jerry", 0);
      expect(contestant.isFull()).toBe(false);
      contestant.eatPie(10);
      expect(contestant.isFull()).toBe(true);
  });
});

describe("Champion", () => {
  it("inherits properties and methods from Contestant", () => {
      const champion = new Champion("Burt", 0);
      expect(champion.name).toBe("Burt");
      expect(champion.pieEaten).toBe(0);
      expect(champion.isFull()).toBe(false);
      champion.eatPie(3);
      expect(champion.pieEaten).toBe(3);
      expect(champion.isFull()).toBe(false);
  });

  it("has additional properties", () => {
      const champion = new Champion("Burt", 0);
      expect(champion.pieEatingRecords).toEqual([]);
      expect(champion.winningPies).toBe(0);
  });

  it("can only eat up to 20 pies", () => {
      const champion = new Champion("Burt", 0);
      champion.eatPie(15);
      champion.eatPie(5);
      expect(champion.pieEaten).toBe(20);
      champion.eatPie(1);
      expect(champion.pieEaten).toBe(20);
      expect(champion.pieEatingRecords).toEqual([15, 5]);
  });
  
});
