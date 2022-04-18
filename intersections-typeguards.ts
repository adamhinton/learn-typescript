type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//You create an intersection type like so
//This is a combination of the properties of Admin and Employee
type ElevatedEmployee = Admin & Employee;

//here we declare an ElevatedEmployee
const el: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

//intersections are useful with objects but you can use them with any types:
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//my first type guard:
//I check here what type the arguments are and return something based on that
const add = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return String(a) + String(b);
  }
  return a + b;
};

type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log("emp.name:", emp.name);
  if()
  console.log("emp.privileges:", emp.privileges);
};
