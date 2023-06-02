// two pointer solution
const palindrom = (str) => {
  let start_pnt = 0;
  let end_pnt = str.length - 1;
  while (start_pnt < end_pnt) {
    if (str[end_pnt] !== str[start_pnt]) {
      console.log("it is not");
      return;
    }
    end_pnt -= 1;
    start_pnt += 1;
  }
  console.log("it is palindrom");
};

// reverse
// str.replace(/[^A-Za-z0-9]/g, '') -> replace everything that is not alphabetical
// [^] means negate of whatever is here
// /g means global
let str = "astt#@$@*~~saA";
str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
str = str.split("").reverse().join("");
// palindrom("astatsa");
// console.log(str)

// Reference by value and reference by reference.

let num = 10;

function updateValue(value) {
  value = 20;
}

updateValue(num);
// console.log(num);  // Output: 10

let obj = { name: "John" };

function updateName(object) {
  object.name = "Jane";
}

updateName(obj);
// console.log(obj.name);  // Output: Jane

// Question: Given a sorted array of integers, find all unique triplets in the array that sum up to a target value.
// if it is not sorted please sort it

const threept = (arr = [-1, 0, 1, 2, -1, -4], target = 0) => {
  let result = [];
 arr.sort((a, b) => a - b);
  let start_pnt = 0;
  let last_pnt = arr.length - 1;
  while (start_pnt < last_pnt - 1) {
    let mid = start_pnt + 1;
    let sum = arr[start_pnt] + arr[last_pnt] + arr[mid];
    if (sum === target) {
      result.push([arr[start_pnt], arr[mid], arr[last_pnt]]);
      start_pnt += 1;
    } else if (sum < target) {
      start_pnt += 1;
    } else {
      last_pnt -= 1;
    }
  }

  console.log(result);
};

threept();
