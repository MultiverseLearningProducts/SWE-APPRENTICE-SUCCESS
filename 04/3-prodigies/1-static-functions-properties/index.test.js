import { Chuckles, Character, Party } from "./index.js";

describe("Chuckles class", () => {
  let chuckles;

  beforeEach(() => {
    chuckles = new Chuckles();
  });

  it("should have an empty jokes array on initialization", () => {
    expect(chuckles.jokes).toEqual([]);
  });

  it("should have a punchline property that is an empty string on initialization", () => {
    expect(chuckles.punchline).toEqual("");
  });

  it("should be able to add a joke", () => {
    chuckles.addJoke("Why did the tomato turn red? Because it saw the salad dressing!");
    expect(chuckles.jokes.length).toEqual(1);
  });

  it("should be able to return a random joke", () => {
    chuckles.addJoke("Why did the tomato turn red? Because it saw the salad dressing!");
    chuckles.addJoke("Why did the scarecrow win an award? Because he was outstanding in his field!");
    const joke = chuckles.getRandomJoke();
    expect(chuckles.jokes).toContain(joke);
  });

  it("should be able to set the punchline", () => {
    chuckles.setPunchline("Because it was the life of the party!");
    expect(chuckles.punchline).toEqual("Because it was the life of the party!");
  });

  it("should be able to get the punchline", () => {
    chuckles.setPunchline("Because it was the life of the party!");
    expect(chuckles.getPunchline()).toEqual("Because it was the life of the party!");
  });

  it("should have a static method makeEveryoneLaugh that returns 'LOL'", () => {
    expect(Chuckles.makeEveryoneLaugh()).toEqual("LOL");
  });

  it("should have an instance method jokeCount that returns the number of jokes", () => {
    chuckles.addJoke("Why did the tomato turn red? Because it saw the salad dressing!");
    chuckles.addJoke("Why did the scarecrow win an award? Because he was outstanding in his field!");
    expect(chuckles.jokeCount()).toEqual(2);
  });
});


describe("Party class", () => {
  let leader = new Character("Jane Doe");

  it("increments the static property totalParties when a party is created", () => {
    const leader = new Character("Uncle Sam");
    const party = new Party(leader);
    expect(Party.totalParties).toBe(1);
  });

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
    const leader = new Character("Bob Smith");
    const party = new Party(leader);
    expect(party.leader).toBe(leader.name);
  });

  it("has a members property that is an array with the first element being the leader object", () => {
    const leader = new Character("Barnaby Jones");
    const party = new Party(leader);
    expect(Array.isArray(party.members)).toBe(true);
    expect(party.members[0]).toBe(leader);
  });

  it("adds the leader's name to the static property currentLeaders when a party is created", () => {
    const leader = new Character("Oliver Queen");
    const party = new Party(leader);
    expect(Party.currentLeaders[Party.currentLeaders.length - 1]).toEqual(leader.name);
  });
});