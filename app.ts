console.log("afjidoasfs");

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

//'privileges' in emp below is a nift way to access properties for type guards
const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log("emp.name:", emp.name);
  if ("privileges" in emp) {
    console.log("emp.privileges:", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("emp.startDate:", emp.startDate);
  }
};

printEmployeeInfo(el);

//starting Discriminated Unions
//we add a type key (or any other key) to each interface here,
//then use a switch statement in moveAnimal function based on the interface's type
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  // console.log("Moving with speed:" + animal.flyingSpeed);
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;

    default:
      null;
  }
  console.log(`Moving at speed: ${speed}`);
};

moveAnimal({ type: "bird", flyingSpeed: 50 });

//TYPE CASTING:

//type casting helps you tell TS that a value of a certain type when TS may not know
//say you have a <p> with id message-paragraph and find that by id. TS doesn't know what kind of htmlElement that is. That's where typecasting comes in..

const para = document.getElementById("paragraph-message");
para.value = "Hi there!";
