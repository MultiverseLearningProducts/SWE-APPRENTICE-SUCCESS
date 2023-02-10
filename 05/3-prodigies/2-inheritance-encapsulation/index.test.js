import { Character, Party } from "./index.js";

describe("Party", () => {
  let leader = new Character("Jane Doe");

  it("throws an error when no leader is provided", () => {
    expect(() => {
      new Party();
    }).toThrowError("A party needs a leader!");
  });

  it("throws an error when leader is already leading a party", () => {
    const leader = new Character("Jane Doe");
    const party1 = new Party(leader);
    expect(() => {
      new Party(leader);
    }).toThrowError("Jane Doe is already leading a party.");
  });

  it("sets the leader property with the leader's name", () => {
    const party = new Party(leader);
    expect(party.leader).toBe(leader.name);
  });

  it("has a members property that is an array with the first element being the leader object", () => {
    const party = new Party(leader);
    expect(Array.isArray(party.members)).toBe(true);
    expect(party.members[0]).toBe(leader);
  });

  it("increments the static property totalParties when a party is created", () => {
    const party = new Party(leader);
    expect(Party.totalParties).toBe(1);
  });

  it("adds the leader's name to the static property currentLeaders when a party is created", () => {
    const party = new Party(leader);
    expect(Party.currentLeaders).toEqual([leader.name]);
  });
});