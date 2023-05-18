![MV Logo](/logo.jpg)

# SQL Views
In SQL, views are virtual tables that are based on the result of a SELECT statement. They allow you to simplify complex queries by encapsulating the logic behind them into a single, reusable object.

Here's an example of creating a view in SQL to find the average age of villains:
```sql
CREATE VIEW average_villain_age AS
SELECT AVG(age) AS avg_age
FROM villains;
```
In this example, we've created a view called `average_villain_age` that calculates the average age of all villains. This view can then be used in place of the original subquery in our previous example:

```sql
SELECT name
FROM superheroes
WHERE age > (SELECT avg_age FROM average_villain_age);
```
As you can see, the use of a view has greatly simplified the query. By encapsulating the logic behind the subquery into a view, we can now use it in multiple places without having to repeat the subquery over and over again. This helps to make our code more readable and maintainable.

It's worth noting that views are only a virtual representation of the data and do not actually store any data themselves. The data is still stored in the underlying tables and the view is simply a way of accessing it in a more convenient way.

## #checkoutTheDocs 🔍
- [SQL Views](https://www.w3schools.com/sql/sql_view.asp)

## Video Resources 🎥
- [SQL Views in 4 Minutes](https://www.youtube.com/watch?v=vLLkNI-vkV8)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
