function isEmpty(object) {
  return object == null || Object.keys(object).length === 0;
}
let schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); 
