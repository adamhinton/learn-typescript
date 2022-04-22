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
