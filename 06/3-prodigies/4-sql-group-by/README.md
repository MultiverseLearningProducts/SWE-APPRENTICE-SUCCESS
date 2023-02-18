![MV Logo](/logo.jpg)

# SQL `GROUP BY` Statement
SQL `GROUP BY` statement is used to group data based on one or more columns. It allows you to aggregate data by creating summarized data sets based on columns that you specify. In other words, it helps to arrange similar data into groups, and then perform calculations on those groups.

For example, if we have a `superheroes` table with the columns `name`, `superpower`, and `age`, we can use the `GROUP BY` statement to group all superheroes based on their `superpower`:
```sql
SELECT superpower, COUNT(*)
FROM superheroes
GROUP BY superpower;
```
The above SQL query will give us the count of superheroes for each `superpower` in the table. The result would look something like this:

```sql

superpower      | count
----------------|-------
Flight          | 3
Invisibility    | 4
Super Strength  | 5
```
Note that the `GROUP BY` statement must be followed by an aggregate function, such as `COUNT()`, `SUM()`, `AVG()`, `MIN()`, or `MAX()`, to aggregate the data.

You can also use multiple columns to group data:
```sql
SELECT superpower, age, COUNT(*)
FROM superheroes
GROUP BY superpower, age;
```
This query will give us the count of superheroes for each combination of `superpower` and `age`.

The `GROUP BY` statement is a powerful tool in SQL that allows you to get a higher-level understanding of your data and create meaningful insights.


## #checkoutTheDocs 🔍
- [SQL GROUP BY](https://www.w3schools.com/sql/sql_groupby.asp)

## Video Resources 🎥
- [SQL Group By](https://www.youtube.com/watch?v=qpF7Y2fGTrE)
- [GROUP BY with Multiple Columns](https://www.youtube.com/watch?v=VLW6oYS9S_Q)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
