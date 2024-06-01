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
