/*
const person={
	name:'Netra Neupane',
	age:21,
};
module.exports=person;

*/


//wrapped by module wrapper function
/*
(function (exports,require,module,__filename,__dirname){

})
*/
console.log(__dirname,__filename);
class Person{

constructor(name,age){
	this.name=name;
	this.age=age;
}
greeting(){
	console.log(`My name is ${this.name} and age is ${this.age}`);
}
}
module.exports=Person;