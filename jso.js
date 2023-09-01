let obj1 = {
    name : "Person 1",
     age : 5
    
    };
let obj2 = {
    age : 5, 
    name : "Person 1"

    };

const keyObj1 = console.log(Object.keys(obj1));
const keyObj2 = console.log(Object.keys(obj2));
const value1 =  console.log(Object.values(obj1));
const value2 = console.log(Object.values(obj2));


if(value1 === value2 || keyObj1 === keyObj2){
    console.log(true);
}
else{
    console.log(false);
}
















