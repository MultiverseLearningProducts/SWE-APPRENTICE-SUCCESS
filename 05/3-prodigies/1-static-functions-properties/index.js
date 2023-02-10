/* CHALLENGE 1 */

/* 
Create a class called Chuckles with the following methods:

Instance Properties
- jokes: an array that will contain all the jokes that are added to the class
- punchline: a string that will store the current punchline of the joke

Instance Methods
- addJoke(joke): takes in a string as an argument and pushes it to the jokes array
- getRandomJoke(): returns a random joke from the jokes array
- setPunchline(line): takes in a string as an argument and sets it as the punchline
- getPunchline(): returns the punchline

Static Methods
- makeEveryoneLaugh(): returns a string "LOL"
- jokeCount(): returns the number of jokes in the jokes array
*/

export class Chuckles {

}


/* CHALLENGE 2 */
export class Character {
  constructor (name) {
      this.name = name
      this.xp = 1
      this.hp = 100
      this.mana = 50
      Character.totalCharacters++
  }

  static totalCharacters = 0
}

/*
class defined as Party
  Constructor 
    @param {object} leader - this object is expected to be an instance of the character class.
    
    constructor should throw the following error 'A party needs a leaader!' if no leader object is provided.
    constructor should throw the following error '${leader.name} is already leading a party.' if the character is used more than once.
    a leader property that includes the leader's name.
    a members property that is an array, with the first element being the leader object.

    Static Properties
        totalParties - keeps a running count of parties created
        currentLeaders - an array of the names of leaders of each created party.  (this will help with throwing the above errors)

*/

export class Party {

}
