![MV Logo](/logo.jpg)

# SQL `SELECT` Statements
`SELECT` statements are used to query data from a database. The basic syntax of a SELECT statement is:
```sql
SELECT column1, column2, ...
FROM table_name;
```
In this example, we are selecting column1, column2, and so on from the table_name. So, if we want to retrieve the three columns from the `superheroes` table, our SELECT statement would look like this:

```sql
SELECT name, superpower, age
FROM superheroes;
```
Alternatively, if we want to just say "give me all the columns" from the `superheroes` table, we can use the `*` wildcard character:
```sql
SELECT *
FROM superheroes;
```
We can also choose to only retrieve specific columns. For example, if we only wanted the `name` and `superpower` columns:
```sql
SELECT name, superpower
FROM Superhero;
```
And, if we wanted to retrieve only the data for one specific Superhero, we can add a `WHERE` clause to our `SELECT` statement:
```sql
SELECT *
FROM Superhero
WHERE name = 'Superman';
```

## #checkoutTheDocs 🔍
- [SQL SELECT Statement](https://www.w3schools.com/sql/sql_select.asp)
- [SQL WHERE Clause](https://www.w3schools.com/sql/sql_where.asp)

## Video Resources 🎥
- [SQL SELECT Statement](https://www.youtube.com/watch?v=7S_tz1z_5bA&t=1420s)
- [SQL WHERE Clause](https://www.youtube.com/watch?v=7S_tz1z_5bA&t=2298s)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
