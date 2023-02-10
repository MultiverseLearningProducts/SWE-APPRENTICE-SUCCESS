import { Chuckles } from "./index.js";

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
