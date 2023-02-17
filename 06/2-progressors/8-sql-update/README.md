![MV Logo](/logo.jpg)

# SQL `UPDATE` Statement
The UPDATE statement is used to modify existing data in a table in SQL. For example, to increase the age of all superheroes by 5 years:
```sql
UPDATE superheroes
SET age = age + 5;
```
This statement will update all rows in the `superheroes` table, increasing the value of the `age` column by 5.

## Updating Specific Rows
You can also specify conditions to only update specific rows. For example, to increase the age of all superheroes named 'Batman' by 5 years:
```sql
UPDATE superheroes
SET age = age + 5
WHERE name = 'Batman';
```
This statement will only update the rows in the `superheroes` table where the `name` is 'Batman', increasing the value of the `age` column by 5 for those rows.


## #checkoutTheDocs 🔍
- [SQL UPDATE Statement](https://www.w3schools.com/sql/sql_update.asp)

## Video Resources 🎥
- [SQL: Updating a Single Row](https://www.youtube.com/watch?v=7S_tz1z_5bA&t=10418s)

## Challenges
Make sure to complete the [challenges](challenges.md) for this module.
