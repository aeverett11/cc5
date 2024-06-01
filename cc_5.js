class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
      console.log(`Name of the Employee: ${name}`);
      console.log(`Monthly Salary: $${salary}`);
    }

    calculateAnnualSalary() {
        return this.salary * 12;
      }
    }

