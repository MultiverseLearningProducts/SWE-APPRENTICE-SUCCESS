![MV Logo](/logo.jpg)

# SQL JOIN
SQL JOINs are used to combine data from two or more tables into a single result set. There are two main types of JOINs: INNER JOINs and OUTER JOINs.

An INNER JOIN only returns rows where there is a match in both tables. For example, let's say we have a `superheroes` table and a `villains` table, and we want to combine the data from both tables to show the superhero and their corresponding villain. Here's an example of an INNER JOIN:
```sql
SELECT
  superheroes.name AS superhero_name,
  villains.name AS villain_name
FROM superheroes
JOIN villains
ON superheroes.id = villains.superhero_id;
```
In this example, the JOIN will only return rows where there is a match in both the `superheroes` and `villains` tables, based on the `superhero_id` column. The `ON` clause specifies the join condition.  This is known as an INNER JOIN because it only returns rows where there is a match in both tables.  This is the default type of JOIN in SQL.

An OUTER JOIN, on the other hand, returns all rows from one table, and the matching rows from the other table. If there is no match in one of the tables, the non-matching row will still be returned with NULL values in the columns from the other table. There are two types of OUTER JOINs: LEFT JOIN and RIGHT JOIN.

A LEFT JOIN returns all rows from the left table (the first table in the join), and the matching rows from the right table. Here's an example of a LEFT JOIN:
```sql
SELECT
  superheroes.name AS superhero_name,
  villains.name AS villain_name
FROM superheroes
LEFT JOIN villains
ON superheroes.id = villains.superhero_id;
```
This query will return _all_ the rows from the `superheroes` table and the matching rows from the `villains` table. If there is no match, the result will contain `NULL` values for the columns from the `villains` table.

## #checkoutTheDocs 🔍
- [SQL JOIN](https://www.w3schools.com/sql/sql_join.asp)
- [SQL LEFT JOIN](https://www.w3schools.com/sql/sql_join_left.asp)

## Video Resources 🎥
- [SQL Inner Joins](https://www.youtube.com/watch?v=7S_tz1z_5bA&t=5090s)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
