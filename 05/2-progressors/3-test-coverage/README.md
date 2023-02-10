![MV Logo](/logo.jpg)

# Test Coverage
Test coverage refers to the extent to which the source code of a software project is executed when the test suite is run. It's a measure of how much of the code is actually tested, and it provides a way to identify which parts of the code are not covered by tests.

Test coverage can be a useful tool for measuring the quality of your tests and ensuring that your code is thoroughly tested. The goal is to have a high test coverage, meaning that most, if not all, of the code is executed when the tests are run.

Jest provides an easy way to get test coverage. Jest automatically generates a test coverage report every time you run your tests. The report shows how much of your code is covered by tests, and provides a visual representation of the results.

To get test coverage in Jest, you need to add the `--coverage` flag to the `test` script in the `package.json` file:

```json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```
Then, when you run `npm test`, Jest will generate a test coverage report.

```sh
npm test
```

Example output:
```yaml
=============================== Coverage summary ===============================
Statements   : 85.71% ( 48/56 )
Branches     : 50% ( 2/4 )
Functions    : 100% ( 4/4 )
Lines        : 85.71% ( 48/56 )
================================================================================
```

In this example, Jest has calculated the coverage for various metrics:
- `Statements`: This shows the percentage of statements (i.e., lines of code) that are executed when the tests are run. In this example, 85.71% of the statements are covered.
- `Branches`: This shows the percentage of branches (i.e., if/else statements) that are executed when the tests are run. In this example, 50% of the branches are covered.
- `Functions`: This shows the percentage of functions that are executed when the tests are run. In this example, 100% of the functions are covered.
- `Lines`: This is the same as the `Statements` metric.

It's important to note that 100% coverage does not guarantee that your code is error-free. However, a high coverage percentage can indicate that your tests are thorough and that you have good test coverage. The goal is to strive for a high coverage percentage while writing tests that are both effective and maintainable.

## #checkoutTheDocs 🔍
- [Jest Coverage](https://jestjs.io/docs/en/cli#--coverage)

## Video Resources 🎥
- [Code Coverage](https://www.youtube.com/watch?v=W-dc5fpxUVs&t=8s)