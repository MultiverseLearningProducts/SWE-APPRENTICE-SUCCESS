![MV Logo](/logo.jpg)

# SQL `ORDER BY` and `LIMIT` Statements

## `ORDER BY`
In SQL, `ORDER BY` is used to sort the results of a query in ascending or descending order. For example:
```sql
SELECT *
FROM superheroes
ORDER BY age DESC;
```
This query will return all the rows from the superheroes table, sorted by the age column in descending order. If we wanted to sort the results in ascending order, we would use the `ASC` keyword instead of `DESC`. If you want to sort the results in ascending order, you can simply omit the `ASC` keyword.
```sql
SELECT *
FROM superheroes
ORDER BY age;
```

## `LIMIT`
In SQL, `LIMIT` is used to limit the number of rows returned by a query. For example:
```sql
SELECT *
FROM superheroes
LIMIT 5;
```
This query will return the first 5 rows from the superheroes table. If we wanted to return the next 5 rows, we would use the `OFFSET` keyword:
```sql
SELECT *
FROM superheroes
LIMIT 5
OFFSET 5;
```

## #checkoutTheDocs 🔍
- [SQL ORDER BY](https://www.w3schools.com/sql/sql_orderby.asp)

## Video Resources 🎥
- [SQL ORDER BY](https://www.youtube.com/watch?v=7S_tz1z_5bA&t=4458s)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
