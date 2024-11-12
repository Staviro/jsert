const jsert = new Jsert();

jsert.add('Variable called name is type of string should pass', function() {
    let name = "John";
    if (typeof(name) == "string") jsert.pass(this);
    else jsert.fail(this);
});

jsert.add("Variable called user is type of object should pass", function() {
    let user = {};
    if (typeof(user) == 'object') jsert.pass(this);
    else jsert.fail(this);
})

jsert.run();