import { stringFormatter } from "../lib/language";
const data = stringFormatter("user date");
console.log(data);

const check = (person1: string, person2: string = person) => {
  if (person1 !== person2) {
    console.log("not same");
  } else {
    console.log("same");
  }
};

const person = "person";
check(person);
