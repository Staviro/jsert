import { Jsert } from "./jsert.mjs";

const jsert = new Jsert("Example tests");

jsert.test("passWhen() should pass when typeof name === 'string'", function () {
  let name = "John";
  jsert.passWhen(this, typeof name === "string");
});

jsert.test(
  "passWhenEquals() should pass when type of name is 'string'",
  function () {
    let name = "John";
    jsert.passWhenEquals(this, typeof name, "string");
  }
);

jsert.test(
  "passWhenTruthy() should pass when typeof user === 'object'",
  function () {
    let user = {};
    jsert.passWhenTruthy(this, typeof user === "object");
  }
);

jsert.test(
  "passWhenWithoutStrict() should pass when type of user == 'object'",
  function () {
    let user = {};
    jsert.passWhenWithoutStrict(this, typeof user == "object");
  }
);

jsert.test(
  "passWhenEmpty() should pass when an empty arrary is passed in",
  function () {
    jsert.passWhenEmpty(this, []);
  }
);

jsert.test(
  "passWhenHasLength() should pass when an array of 3 items and expected of 3 is passed in",
  function () {
    jsert.passWhenHasLength(this, [1, 2, 3], 3);
  }
);

jsert.test(
  "passWhenIncludes() should pass when string arrary ['t', 'e', 's', 't'] contains 'e'",
  function () {
    jsert.passWhenIncludes(this, ["t", "e", "s", "t"], "e");
  }
);

jsert.test(
  "passWhenNotEquals() should pass when 'test' and 'test2' are passed in",
  function () {
    jsert.passWhenNotEquals(this, "test", "test2");
  }
);

jsert.test(
  "passWhenFalsy() should pass when typeof {} is 'string'",
  function () {
    jsert.passWhenFalsy(this, typeof {} === "string");
  }
);

jsert.test(
  "passWhenMatch() should pass when 2 strictly identical objects are passed in",
  function () {
    const obj = {
      name: "Johnson",
      lastName: "Goodman",
    };

    jsert.passWhenMatch(this, obj, {
      lastName: "Goodman",
      name: "Johnson",
    });
  }
);

jsert.test(
  "passWhenFalsy() should pass when type of newDate is 'object'",
  function () {
    const newDate = new Date();
    jsert.passWhenTypeIs(this, newDate, "object");
  }
);

jsert.test(
  "passWhenFalsy() should pass when type of newDate is not null",
  function () {
    const newDate = new Date();
    jsert.passWhenNotNull(this, newDate);
  }
);

jsert.test(
  "passWhenNull() should pass when type of newDate is null",
  function () {
    let newDate = null;
    jsert.passWhenNull(this, newDate);
  }
);

jsert.run();
