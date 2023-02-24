// TODO: Write code to define and export the Employee class
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email, "Engineer");
        this.github = github;
        // and other properties
    }
}

const eng1 = new Engineer("Danish", "danish@gmail.gov", "danisheng");

module.exports = Engineer;
// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
}

module.exports = Employee;