let user = {
  name: 'John',
  age: 30
};

alert( count(user) );
function count(obj){
  let counter =0;
  for (let key in obj){
    counter ++;
  }
  return counter;
}
console.log(count(user));