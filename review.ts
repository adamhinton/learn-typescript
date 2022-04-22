//INTERSECTION TYPE REVIEW
//allow us to combine other types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//Now we create our intersection of thes two:
type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log("e1:", e1);

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
