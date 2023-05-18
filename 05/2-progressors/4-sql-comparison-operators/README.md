![MV Logo](/logo.jpg)

# SQL Comparison Operators
SQL comparison operators are used in WHERE clauses to filter data based on specific conditions. Here are some of the most commonly used comparison operators:

- `=`: This operator is used to check if two values are equal. For example:
```sql
SELECT *
FROM superheroes
WHERE age = 30;
```
This query will return all the rows from the superheroes table where the value in the age column is equal to 30.

- `<>` or `!=`: This operator is used to check if two values are _not_ equal. For example:
```sql
SELECT *
FROM superheroes
WHERE age <> 30;
```
This query will return all the rows from the superheroes table where the value in the age column is _not_ equal to 30.

- `>`: This operator is used to check if the value on the left is greater than the value on the right. For example:
```sql
SELECT *
FROM superheroes
WHERE age > 30;
```
This query will return all the rows from the superheroes table where the value in the age column is greater than 30.

- `<`: This operator is used to check if the value on the left is less than the value on the right. For example:
```sql
SELECT *
FROM superheroes
WHERE age < 30;
```
This query will return all the rows from the superheroes table where the value in the age column is less than 30.

- `LIKE`: This operator is used to check if a value matches a specified pattern. For example:
```sql
SELECT *
FROM superheroes
WHERE name LIKE 'Super%';
```
This query will return all the rows from the superheroes table where the value in the name column starts with the letters `Super`. Notice the wildcard character `%` used in the pattern. The `%` wildcard character matches zero or more characters.

- `IN`: This operator is used to check if a value matches any value in a list. For example:
```sql
SELECT *
FROM superheroes
WHERE superpower IN ('flight', 'super strength');
```
This query will return all the rows from the superheroes table where the value in the superpower column is either `flight` or `super strength`.

## #checkoutTheDocs 🔍
- [SQL Comparison Operators](https://www.w3schools.com/sql/sql_operators.asp)

## Video Resources 🎥
- [SQL Comparison Operators](https://www.youtube.com/watch?v=7S_tz1z_5bA&t=3098s)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
