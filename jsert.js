/**
 *Jsert v1.1
 *(c) 2024 Joseph Morukhuladi
 *Licensed under MIT
 */

/**
 * Class for creating Jsert objects
 */
class Jsert {
  /**
   * Creates an instance of the Jsert class
   * @param {string} group
   * @returns
   */
  constructor(group) {
    this.group = group;
    this.tests = [];
    this.passed = [];
    this.failed = [];
    return this;
  }
  /**
   * Adds test to passed list
   * @param {object} test
   */
  pass(test) {
    console.log(`%cTest Passed    : ${test["name"]}`, this._green());
    this.passed.push(test["name"]);
  }

  passWhen(test, condition) {
    if (condition === true) this.pass(test);
    else this.fail(test);
  }
  /**
   * Adds test to failed list
   * @param {object} test
   */
  fail(test) {
    console.log(`%cTest Failed    : ${test["name"]}`, this._red());
    this.failed.push(test["name"]);
  }
  /**
   * Runs all tests added to the tests list
   */
  run() {
    let label = " - Completed In";
    let b = this._blue();
    console.time(label);
    console.log(`%c - Executing: ${this.group}`, b);
    this.tests.forEach(function (t) {
      t.test();
    });
    this.summary();
    console.timeEnd(label, this._green());
    console.log();
    this.reset();
  }
  /**
   * Adds test to the tests list
   * @param {string} name
   * @param {Function} test
   */
  test(name, test) {
    this.tests.push({
      name,
      test,
    });
  }
  /**
   * Prints a summary for all tests
   */
  summary() {
    let style = this._green();
    console.log(" - Generating summary");
    console.log(
      `%cTests Executed :${this.passed.length + this.failed.length}`,
      style
    );
    console.log(`%cTests Passed   :${this.passed.length}`, style);
    console.log(
      `%cTests Failed   :${this.failed.length}`,
      this.failed.length > 0 ? this._red() : style
    );
  }

  /**
   * Recursively performs a deep, strict comparison between two JSON-compatible objects/values.
   * @param {any} obj1 The first object, array, or primitive value.
   * @param {any} obj2 The second object, array, or primitive value.
   * @returns {boolean} True if the objects are deeply and strictly equal, false otherwise.
   */
  isMatch = (obj1, obj2) => {
    if (obj1 === obj2) {
      return true;
    }

    if (Number.isNaN(obj1) && Number.isNaN(obj2)) {
      return true;
    }

    if (
      typeof obj1 !== "object" ||
      typeof obj2 !== "object" ||
      obj1 === null ||
      obj2 === null
    ) {
      return false;
    }

    const isArray1 = Array.isArray(obj1);
    const isArray2 = Array.isArray(obj2);

    if (isArray1 !== isArray2) {
      return false;
    }

    if (isArray1) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      for (let i = 0; i < obj1.length; i++) {
        if (!this.isMatch(obj1[i], obj2[i])) {
          return false;
        }
      }
      return true;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (
        !Object.prototype.hasOwnProperty.call(obj2, key) ||
        !this.isMatch(obj1[key], obj2[key])
      ) {
        return false;
      }
    }

    return true;
  };

  passWhenMatch(test, obj1, obj2) {
    if (this.isMatch(obj1, obj2)) this.pass(test);
    else this.fail(test);
  }

  /**
   * Resets all test results
   */
  reset() {
    this.passed = [];
    this.failed = [];
  }
  _green() {
    return "color:#5f5;";
  }
  _red() {
    return "color:#f55;";
  }
  _blue() {
    return "color:#99f;";
  }
}
