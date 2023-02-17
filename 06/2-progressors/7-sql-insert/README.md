![MV Logo](/logo.jpg)

# SQL `INSERT` Statement
The `INSERT` statement is used to insert data into a table in SQL. For example, to insert a new superhero into the `superheroes` table:
```sql
INSERT INTO superheroes (name, superpower, age)
VALUES ('Wonder Woman', 'Super Strength', 35);
```
This statement will insert a new row into the `superheroes` table with the `name` 'Wonder Woman', `superpower` 'Super Strength', and `age` 35.

You can also insert multiple rows at once using the following syntax:
```sql
INSERT INTO superheroes (name, superpower, age)
VALUES ('Batman', 'Intelligence', 40),
       ('Superman', 'Super Strength', 38),
       ('Spider-Man', 'Spider Powers', 22);
```

## #checkoutTheDocs 🔍
- [SQL INSERT Statement](https://www.w3schools.com/sql/sql_insert.asp)

## Video Resources 🎥
- [SQL INSERT](https://www.youtube.com/watch?v=7S_tz1z_5bA&t=8994s)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
