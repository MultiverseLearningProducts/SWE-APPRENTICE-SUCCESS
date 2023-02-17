![MV Logo](/logo.jpg)

# SQL Subqueries
In SQL, subqueries are used to nest one SELECT statement inside another. They allow you to perform complex queries on your data that would otherwise be difficult or impossible to achieve with just a single query.

Here's an example of using a subquery in a SELECT statement to find the average age of villains and then using that result to select the names of all superheroes who are older than the average villain age:

```sql
SELECT name
FROM superheroes
WHERE age > (
  SELECT AVG(age)
  FROM villains
);
```
In this example, the subquery `SELECT AVG(age) FROM villains` calculates the average age of all villains. The result of this subquery is then used in the main query to select all superheroes who are older than the average villain age.

Subqueries can also be used in other parts of a SQL statement, such as the `FROM` or `HAVING` clauses, or as part of a condition in the `WHERE` clause. They can also be nested inside each other to create complex queries.

## #checkoutTheDocs 🔍
- [SQL Subqueries](https://www.w3resource.com/sql/subqueries/understanding-sql-subqueries.php)
- [SQL MAX() Function](https://www.w3schools.com/sql/func_sqlserver_max.asp)

## Video Resources 🎥
- [SQL Subqueries in Update Statements](https://www.youtube.com/watch?v=7S_tz1z_5bA&t=10847s)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
