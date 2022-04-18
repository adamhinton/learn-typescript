type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//You create an intersection type like so
type ElevatedEmployee = Admin & Employee;
