# Ahmad Everett U00618536
Create a JavaScript program to manage employee salaries and extend its functionality to handle specialized salary calculations for managers, including bonuses

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
    
    class Manager extends Employee {
      constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
      }
      calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = 0.1; 
        console.log(`Bonus (15% of the base salary): ${bonus}`);
        // Bonus calculation for managers
        return (bonus * baseSalary) + baseSalary;
      }
    }
    // Create an instance of the Manager class
const manager1 = new Manager('Bob Ross', 6600, 'Marketing');
const annualSalary1 = manager1.calculateAnnualSalary();

console.log(`Manager: ${manager1.name}`);
console.log(`Department: ${manager1.department}`);
console.log(`Annual Salary: $${annualSalary1}`);

// Create another instance of the Manager class
const manager2 = new Manager('Debbie Little', 7205, 'Marketing');
const annualSalary2 = manager2.calculateAnnualSalary();

console.log(`Manager: ${manager2.name}`);
console.log(`Department: ${manager2.department}`);
console.log(`Annual Salary: $${annualSalary2}`);
