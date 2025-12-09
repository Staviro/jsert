const jsert = new Jsert("Example tests");

jsert.test("Variable called name is type of string should pass", function () {
  let name = "John";
  jsert.passWhen(this, typeof name === "string");
});

jsert.test("Variable called user is type of object should pass", function () {
  let user = {};
  if (typeof user === "object") jsert.pass(this);
  else jsert.fail(this);
});

jsert.test("Comparing the same object should pass", function () {
  const obj = {
    name: "Johnson",
    lastName: "Goodman",
  };

  jsert.passWhenMatch(this, obj, {
    lastName: "Goodman",
    name: "Johnson",
  });
});

jsert.run();
