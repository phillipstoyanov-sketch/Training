let salaries = {
    "john": 100,
    "Mary": 200,
    "Bob": 300
};
function topSalary(salaries){
    let maxSalary=0;
    let maxName=null;
    for(let [name, salary] of Object.entries(salaries)){
        if(salary>maxSalary){
            maxSalary=salary;
            maxName=name;
        }
    }
    return maxName;
}
console.log(topSalary(salaries));