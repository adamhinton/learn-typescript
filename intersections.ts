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

const add = (a: Combinable, b: Combinable) => {
  return a + b;
};
