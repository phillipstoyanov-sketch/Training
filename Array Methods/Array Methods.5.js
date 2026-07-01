function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sort = copySorted(arr);
alert( sort );
alert( arr );