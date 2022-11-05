//call function
const student = { age: 20 };
var print = function () {
  return this.age;
};
let result = print.call(student);
console.log(result);

// apply function
const Student = { age: 25 };
var print = function (st_name) {
  return st_name + " age is " + this.age;
};
var st_name = ["Vamsi"];
var res = print.apply(Student, st_name);
console.log(res);

//bind function
const student2 = { age: 25 };
var print = function () {
  return firstname + " age is " + this.age;
};
var firstname = "Vamsi";
var bound = print.bind(student2);
console.log(bound(firstname));

//currying
var print = function (fname, age) {
  return fname + " age is " + age;
};
var printDetails = print.bind(this, "Vamsi");
printDetails(25);
console.log(printDetails(25));
