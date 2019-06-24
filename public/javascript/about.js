function get_print_to_hellow_world()
{
 document.getElementById('sec1').innerHTML="Hellow You ! I am Your Website daily visitor.";//javascript statements
 document.getElementById('sec1').style.fontsize="verdana";
 document.getElementById('sec1').style.backgroundcolor="white";
 document.getElementById('sec1').style.color="white";
}

console.log("netra");
//window.alert("welcome");//disabling the window alert
document.write(3+4+"<br>");

function print_to_paragraph(){

 document.getElementById('sec2').innerHTML="I am doing this practice in order to improve my level of the confidence in the css.I am doing web bashed project in my minor project.HOTEL RESEERVATION SYSTEM is my aim project in web development.";
 document.getElementById('sec3').style.align="justify";
}

//performing few airthematic operations
var a=10;
var b=9;
var c=3;
var sum=a+b*c;
document.getElementById('sec3').innerHTML="The result of expression of the variable "+a+","+b+" and "+c+" is " +sum;

var n=9+1+"5";
document.write("(document.write)The sum of  9 + 1 +'5' =  ");
document.write(n);

var carname="Suzuki";
var cost=50000000;
document.getElementById('sec4').innerHTML="I want to buy  "+carname+" , which cost is about RS"+cost;


var a=10,b=20,c=5,d;
d=a++;// incrementing operations
var e=a+d;
document.getElementById('sec5').innerHTML=e;

var k=30;
k /= 4;
console.log(k);
k %=4;
console.log(k);

//function call
var sum=calculate_sum(4,11);
document.getElementById('sec6').innerHTML="The sum of  4 and 11  is   :"+sum;
//fuction return
function calculate_sum(g,h)
{
	return(g+h);
}

var farenheit=convert_celsius_to(77);
console.log(farenheit);
function convert_celsius_to(celsius){
	var car="Volvo";
	console.log(car);
	return ((9/5)*(celsius+32));
}


// Javascript objects_has properties(name value pairs) and methods
var employee={
	name:"Netra Prasad Neupane",
	address:"Syangja",
	gender:"male",
	contact_no:"9846626929",
	occupation:"Senior Engineer",
	employee_performance: function(){
		return this.name+", who is "+this.occupation+"has good working skill.";}
};
console.log(employee.name+"  lives in  "+employee.address+"." );
console.log(employee["name"]+"  lives in  "+employee["address"]+"." );// two methods of a accessing tyhe properties of the objects
var employee_record=employee.employee_performance();
console.log(employee_record);

//disp;aying date in to html
function display_date(){
	document.getElementById('sec7').innerHTML="Current  Date is "+Date(); 
}

// working with the strings
var firstName="Netra";
var firstName1=new String("Netra");
console.log(firstName);
console.log(firstName1);
if(firstName==firstName1)//compare only value
{
	console.log("Equal value");
}
else
{
	console.log("Unequal value");
}
if(firstName===firstName1)//compare both value and it's types
{
	console.log("Equal value");
}
else{
	console.log("Unequal value");
}
console.log(typeof(firstName));
console.log(typeof(firstName1));

// javascript strings
var string1="I live in Pokhara";
var loc=string1.indexOf('in');//calculates the index of the in inside string

console.log(loc);
console.log(string1.indexOf('Netra'));//return -1 because index position is not defined.

//lastIndexOf() calculates the position of the string from the last
console.log(string1.lastIndexOf("live",10));
document.write("<br>"+string1);

//search method to return the position of the string
console.log(string1.search('in'));//return the position of 'in' the strings1

//extraction of the strings
//1. slice(start,end) method
var fruits="Apple, Banana, Kiwi";
console.log(fruits.slice(7,13));
console.log(fruits.slice(-5));
console.log(fruits.slice(-12,-6));

//subString(start,end) method
console.log(fruits.substring(0,6));

//substr(start,length) method
console.log(fruits.substr(7,20));
console.log(fruits.substr(-12,6));

//Replacing the string contents
//replace(string to replace,new string that replaced by) method
var string_replace="My Name is Netra Prasad Neupane";
console.log(string_replace.replace("Netra Prasad","Nimesh"))//When first Netra is occurs in the string then the Netra is replaced by Nimesh

// to replace the case sensitive string use regural expression i which is case insensitive
console.log(string_replace.replace(/NETRA PRASAD/i,"Naran"));

// to replace all the string content use g flag
var string_replace1="Being Engineer I have to do as like Engineer."
console.log(string_replace1.replace(/Engineer/g,"Doctor"));

// converting to uppercase and lowercase 
var Name="Netra Prasad Neupane";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

//concat() method to concatenate strings
console.log(string_replace1.concat(Name));

// trim()---to remove the whitespace at the beginning of the string
var kerl="         Potato        ";
console.log(kerl.trim());

// returning  character from string
console.log(Name.charAt(0));
// charCode() method to return UTF-16 character code between 0 and------
console.log(Name.charCodeAt(0));
console.log(Name[0]);
Name[0]='b';
console.log(Name);
console.log(Name[0]);

// javascript numbers
x=0.2;
y=0.1;
z=x+y;
console.log(z);// not accurate result can be obtained
// to get accurate results
z=(x*10+y*10)/10;
console.log(z);//getting correct result after multiplication

//writing large number
var large_no=1.3e24;
console.log(large_no);

// can perform division,multiplication and concatenation character in the strings
var s1="50";
var s2="10";
var sum1=s1+s2;//concatenation
var div1=s1/s2;
console.log(sum1);
console.log(div1);
//javascript interpret always interpret fron left to right
console.log(x+y+s2);

var nan1=44/'apple';
console.log(nan1);
console.log(typeof(nan1));
console.log(x/s1);
//converting number in to different number formats
var test1=44;
console.log(test1.toString(2));
console.log(test1.toString(8));
console.log(test1.toString(16));
console.log(test1.toString(32));

// converting number in to string
var st=(122).toString();
console.log(typeof(st));
console.log((122).toString());
// converting into exponential
var float1=4.3335;
var exp1=float1.toExponential(4);
console.log(exp1);

//converting the floating number in to fixed number
var fx1=float1.toFixed(2);
console.log(fx1);
//toPrecision() returns a string, with a number written with a specified length
var pr_float=float1.toPrecision(2);
console.log(pr_float);
console.log(typeof(pr_float));

//converting variables into numbers
var p="20";
var hcc=true;
var p1=Number(p);
console.log(typeof(p1));
console.log(Number(hcc));

//parseInt() parses the strings and returns the whole number
var st2="44.32";
var pc=parseInt(st2);
console.log(pc);
console.log(parseInt("22 2"));
// If the number can't be converted NAN is returned
console.log(parseInt("Netra Prasad Neupane"));

//Number properties
//Number properties belongs to the JavaScript's number object wrapper called Number
var number1=Number.MAX_VALUE;// returns javascript maximum value
console.log(number1);
var number2=Number.MIN_VALUE;//returns javascript mininum value
console.log(number2);
var number3=Number.POSITIVE_INFINITY;
var number4=1/0;
console.log(number3);
console.log(number4);
var number5=Number.NEGATIVE_INFINITY;
var number6=-1/0;
console.log(number5);
console.log(number6);
//Array
var fruits=["banana","apple","mango","grapes"];
var display_help,counter,max_length;
max_length=fruits.length;
display_help="<ol>";
for(counter=0;counter<max_length;counter++)
{
	display_help +="<li>"+fruits[counter]+"</li>";
}
display_help +="</ol>";
document.getElementById('sec8').innerHTML=display_help;

//using foreach function to do same
display_help="<ul>";
fruits.forEach(call_add_fruits);
display_help +="</ol>";
document.getElementById('sec9').innerHTML=display_help;

function call_add_fruits(value){

	display_help +="<li>"+value+"</li>";
}
// to add array elemetn use push() method
fruits.push("Orange");
console.log(fruits);
// to check array
console.log(Array.isArray(fruits));//returns true
console.log(fruits instanceof Array);
//push,pop,shift,unshift
//shift()
var m=fruits.shift();// returns the length of the removed element
console.log(fruits);
console.log(m);
//unshift()
var k=fruits.unshift(m);// return the new array length
console.log(fruits);
console.log(k);
//pushing element in array
var mm=fruits.push("Cucumber");
console.log(mm);
console.log(fruits);
//poping element
var kk=fruits.pop();
console.log(fruits);
console.log(kk);
//adding the element in array
fruits[fruits.length]="Pear";
console.log(fruits);
console.log(delete fruits[5]);
console.log(fruits);
//writing in to html document
//document.write("<br>"+fruits);
// applying the splice method to remove elements from array
function remove_add_fruits(){
var fruits_new=fruits.splice(1,2,"Carrot","Ginger");
document.getElementById('sec11').innerHTML="After adding and removing elements from fruit array: "+fruits+"<br>"+"Item removed from fruits  :"+fruits_new;



}

// concatenating arrays
var foods=["snaks","pizza","burger","momo","chowmin"];
var food_all=fruits.concat(foods);
console.log(food_all);
var drinks=["cococola","pepsi","slice","dew"];
var eating_items=fruits.concat(foods,drinks);//concatenate n number of array together
console.log(eating_items);
// adding items in the array using concatination
var fruits_all=fruits.concat("pear","banana","almond","kiwi");
console.log(fruits_all);

// slicing array
//The slice() method slices out a piece of an array into a new array.
console.log(fruits);
var fruits_me=fruits.slice(3);
console.log(fruits);
console.log(fruits_me);
var fruits_today=fruits.slice(1,3);
console.log(fruits_today);
console.log(fruits.toString());

//sorting array
console.log(fruits.sort());
console.log((fruits.sort()).reverse());

//sorting numbers
var numb=[2,45,656,33,75,2,5];
numb.sort(function(a,b){
	return a-b;
})
console.log(numb);
console.log('max_value  '+numb[numb.length-1]);
// to get random value
numb.sort(function(){
	return 0.5-Math.random();
})
console.log(numb);

//getting maximum number of array from another method
var max_val=calculate_max(numb);
var min_val=calculate_min(numb);

function calculate_max(arr){
	return Math.max.apply(null,arr);
}

function calculate_min(arr){
	return Math.min.apply(null,arr);
}
console.log('using \'Math.max.apply()\'method  Max value is  '+max_val);
console.log('using \'Math.min.apply()\'method  Min value is  '+min_val);

//Javascript date objects
var date1=new Date();
console.log(date1);
var date2=new Date(2019,5,15,4,11,23,44);
console.log(date2);
var date3=new Date(89,3,5);
console.log(date3);
//string date
var date4=new Date("Sat Jun 15 2019 16:14:08");
console.log(date4);
var date5=new Date(0);
console.log(date5);
var date6=new Date(86400000);
console.log(date6);
//to print date in more readable format
var date7=new Date();
var readable_date=date7.toDateString();
console.log(readable_date);
document.getElementById('sec12').innerHTML=readable_date;
// more with date
var date8=new Date("Janaury 25 2019");
console.log(date8);
//converting to millisecond from 1971
var millisecond_difference=Date.parse("Janaury 25 2019");
console.log("Millisecond difference is "+ millisecond_difference);
//onverting millisecond_difference back to the original date
var final_date1=new Date(millisecond_difference);
console.log(final_date1);
//date get methods
var final_date=new Date();
console.log(final_date.getTime());//returns ms since 1971
console.log(final_date.getFullYear());//returns year of the current date
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(final_date.getMonth()+"  i.e.  "+months[final_date.getMonth()]);//returns the month form 0 to 11
console.log(final_date.getDate());//returns the day of the current month
console.log(final_date.getHours());
console.log(final_date.getMinutes());
console.log(final_date.getSeconds());
console.log(final_date.getMilliseconds());
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(final_date.getDay()+"  i.e  "+days[final_date.getDay()]);//returns the weekday of a date as a number (0-6)
//date set method
var cur_date=new Date();
cur_date.setYear(2015);
console.log(cur_date);
//date set method
var cur_date=new Date();
cur_date.setFullYear(2017,3,30);
console.log(cur_date);

var cur_date=new Date();
cur_date.setMonth(cur_date.getMonth()+4);
// we can add the month to date manually
console.log(cur_date);

var cur_date=new Date();
cur_date.setDate(5);
console.log(cur_date);


var cur_date=new Date();
cur_date.setHours(5);
cur_date.setMinutes(33);
cur_date.setSeconds(34);
cur_date.setMilliseconds(233);
console.log(cur_date);

//comparing dates
var today=new Date();
var someday=new Date();
someday.setFullYear(2017,3,30);
if(someday>today)
{
	console.log('someday is after tody');
}
else
{
	console.log('someday  '+someday.toDateString()+'  is before the today i.e. '+ today.toDateString());
}
// javascript math
console.log(Math.PI);
console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.6));
console.log(Math.floor(4.4));
console.log(Math.ceil(4.4));
console.log(Math.sin(90*Math.PI / 180));
console.log(Math.cos(45*Math.PI / 180));
console.log(Math.tan(0*Math.PI / 180));
console.log(Math.sqrt(4));
console.log(Math.abs(-4.4));
console.log(Math.pow(5,5));
console.log(Math.min(44,53,-44,4,5.2,2,1));
console.log(Math.max(44,53,-44,4,5.2,2,1));
console.log(Math.log(10));
console.log(Math.random());
//javascript math random function
console.log(Math.floor(Math.random()*10));//return 0 to 9
console.log(Math.floor(Math.random()*11));//return 0 to 10
console.log(Math.floor(Math.random()*10)+1);//returns 0 to 10

//general function to calculate the random number between two numbers
function random_call(min,max)
{
	return Math.floor(Math.random()*(max-min)+min);//returns 33 to 49
}
console.log(random_call(33,50));

//javascript boolens
console.log(6>44);
var x=false;
var y=null;
var z=NaN;
var k=55;
var n=0;
var o;
console.log(Boolean(x))
console.log(Boolean(y));
console.log(Boolean(z));
console.log(Boolean(k));
console.log(Boolean(n));
console.log(Boolean(o));
console.log(Boolean(""));
var j=0;
var mm=new Boolean("");
console.log(j==mm);// return true because it only compares value
console.log(j===mm);// return false because it compares both the type and value



function check_input(store_age){
	var store_age=document.getElementById("i1").value;
	store_age=Number(store_age)
	if(isNaN(store_age))
	{
		var user_info="Input is not correct! Try another";
	}
	else{
		var user_info=(store_age<18)?"Too young to vote":"Now you are ready to vote";
	}
	//accessing DOM repeatdly slow the processing so to reduce DOM access create the local variable
	var dom_str=document.getElementById('sec13');
     dom_str.innerHTML=user_info;
	 dom_str.style.color="blue";
}
var x=20;
console.log(x>20||x<16);
console.log(x>20&&x<16);
console.log(!(x==0));

var date_today=new Date();
var hrs=date_today.getHours(),greeting_info;
if(hrs>12 && hrs<18)
{
	greeting_info="Have a Good Day!"
}
else if(hrs>=18&&hrs<=21){
	greeting_info="Good evening!";
}
else if(hrs>21){
    greeting_info="Good nigth!";
}
else if(hrs>12 && hrs<18){
    greeting_info="Good Morning!";
}else{
	greeting_info="Have a good time!";
}
document.getElementById('sec14').innerHTML=greeting_info;
document.getElementById('sec14').style.fontsize="30px";
document.getElementById('sec14').style.color="red";

//switch statement
var day_option=date_today.getDay();
switch(day_option)
{
	case 0:
	case 6:
	  day="Holidy";
	  break;
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	  day="Working day";
	  break;
	default:
	 day="Bad day";


}
console.log(day);
// for loop
var sr=["3","44","35"];
for(var i=0,j=sr.length;i<j;i++){
	console.log(sr[i]);
}

for (var i=0;i<5;i++){
	if(i==3)
	{
		break;
	}
	console.log(i);
}
for (var i=0;i<5;i++){
	if(i==3)
	{
		continue;
	}
	console.log(i);
}
// construcor property for finding different types of the data
if(fruits.constructor===Array)
{console.log("true");
}
if(cur_date.constructor===Date)
{
	console.log("true");
}
else
{
	console.log(false);
}
//type conversion
var mmm=88;
var pp=mmm.toString();
console.log(pp);
var ppp=String(88);
console.log(typeof(pp));
console.log(typeof(ppp));
console.log(String(true));//converting boolen to string
console.log(String(cur_date));//converting date to string
//converting number to string
console.log(Number(""));
console.log(Number("44"));
console.log(Number(cur_date));//converting date to number
var np="hgjhj";
var pn=+ np;
console.log(typeof(np)+typeof(pn));

//javascript bitwise operator
var e=4 & 12;//bitwise AND 
console.log(e);
var e=4 | 12;//botwise OR
console.log(e);
var e=4 ^ 12;//bitwise XOR
console.log(e);
var e=~4;//bitwise NOT------How it works????
console.log(e);
var e=5<<1;//bitwise left shift
console.log(e);
var e=5<<2;
console.log(e);
var e=-5>>1;//JavaScript (Sign Preserving) Bitwise Right Shift 
console.log(e);
var e=5>>>1;//JavaScript (Zero Fill) Right Shift 


//searching in the strinhg
var strn="visit neupaneschool";
var npn=strn.search("neupaneschool");
console.log(npn);
var npn_rex=strn.search(/NeupaneschooL/i);// i for case insensitive
console.log(npn_rex);

//replacing the string
var text=strn.replace('neupaneschool','npn school');
console.log(text);

function replace_text()
{
var str=document.getElementById('sec15').innerHTML;
var txt=str.replace(/neupaneschooL/i,"npn school");
document.getElementById('sec15').innerHTML=txt;
}
//match() method
var strg="is Ram is doctor?";
var find1=/is/i;
var find2=/is/g;
var find3=/is/m;
var result1=strg.match(find1);
var result2=strg.match(find2);
var result3=strg.match(find3);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(/R/.test(strg));






//try catch block
try{
//  Block of code to try
console.log("Executed try block");
aledert(" Hellow world! ");

}
catch(err){
// Block of code to handle errors
	document.getElementById('sec16').innerHTML=err.message;
}

function check_number(){
	var message,x;
	message=document.getElementById('sec17');
	//message.innerHTML="";
	x=document.getElementById('demo').value;
	try{
		//block of code to try and throw error
		if(x=="") throw "empty";
		if(isNaN(x)) throw "Not a number";
		x=Number(x);
		if(x<5) throw "too low";
		if(x>10) throw "too high";
	}
	catch(err){
		//  Block of code to handle errors
		message.innerHTML="Input is  "+err;
	}
	finally{
		//  Block of code to be executed regardless of the try / catch result
		document.getElementById('demo').value= "";	}
}
//getting range error
var num=1;
try{
	num.toPrecision(500);// 500 can't be precision
}
catch(err)
{
	console.log(err.name);//err.name is range error
}
//getting refrence error
var xx;
try{
	xx=yy+1;//produce refrence error
}
catch(err){
	console.log(err.name);
}

//getting syntax error
try{
	eval("alert('Hellow world)");//produce Syntax error
}
catch(err){
	console.log(err.name);
}

//getting type error
try{
	num.toUpperCase();//produce type error
}
catch(err){
	console.log(err.name);
}

//getting URI error
try{
    decodeURI('%%%');//produce type error
}
catch(err){
	console.log(err.name);
}




//Javascript scope
var c_name="suzuki";//global variable
function display_car(){
	//"use strict"-
	/*As an example, in normal JavaScript, mistyping a variable name creates a new global 
	variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.*/
	var bike_name="pulsar";
	//assiging the global variable without declaration
	aer_name="airbus";
	console.log(aer_name);
	console.log(c_name);
	console.log(bike_name);
}
//console.log(bike_name);///displaying out of the scope
//console.log(aer_name);
console.log(window.c_name);//In HTML, global variables defined with var, will become window variables
display_car();//calling function



//Hoisting
/*Hoisting is JavaScript's default behavior of moving
 all declarations to the top of the current scope (to the top of the current script or the current function).*/
//variables  and constant declared with 'let' and 'const' are not hoisted
//javascript initialization are not hoisted
 //This is because only the declaration, not the initialization is hoisted to the top.

my_name="Netra Prasad Neupane";
console.log(my_name);
//declaration is only hoisted
var my_name;//declared at the top due to hoisting

var f1=20;
var f2;
console.log(f1+" "+f2);
f2=33;//initialization never hoisted




//this keyword
//object
var person={
	name:"Netra Prasad Neupane",
	age:21,
	display:function(){
		return this.name+"  is  "+this.age+" years old.";//this refers to object person
	}
};
console.log(person.display());

//alone and strict mode it refers to window objects
console.log(this);//refers to window objects

//In function  this represents the object that "owns" Function
function myfunction(){
	return this;
}
var str_1=myfunction();
console.log(str_1);
//how this work in event handling

function my_test(){
	"use strict";
	return this;
}
console.log(my_test());



//working with call() and apply() method
//They can both be used to call an object method with another object as argument.
var person1={
	get_info:function(){
		return this.firstName+" is  an  "+this.occupation;
	}
};
var person2={
	firstName:"Netra",
	occupation:"Engineer",
};
var store_info=person1.get_info.call(person2);//calling the second object using the first object
console.log(store_info);



//block scope variable let and const
//Variables defined with let are not hoisted to the top.
{
	var x1=4;//defined outside the block
	console.log(x1);
}
console.log(x1);
{
	let x1=5;
}
console.log(x1);
// let declared variables are not defined outside the block
let named="netra";
var namedd="metra";
console.log(window.named);
console.log(window.namedd);
//testing in the loop
var i=4;
for (var i=0;i<33;i++){}
	console.log(i);

var f=4;
//redeclaring variable with let keyword is not alloweded in same scope but different block and different scope is alloweded
//let i=4;//not alloweded redeclaration in same scope

{
	let i=66;
	console.log(i);//alloweded redeclaration in the block or different scope
}
for(let f=0;f<33;f++){}
console.log(f);

//const keyword
// const is not hoisted in the javascript
const PI=3.1415;
//PI=3.1415; reassignment to const is not allowed
console.log(PI);

var y1=44;
{
	const y1=4.4444;
	console.log(y1);
}
console.log(y1);

//constant object properties can be reassigned but can't reassign the object
const person_={
	name:"Netra",
	age:25,
};
//reassigning the property to the object
person.name="Netra Prasad Neupane";
console.log(person.name);

/*
//debugger
//applying the debugger to break-point
debugger;//stops the execution of the code and called to the debugger to test the code
// elements of a constant array can be changed but can't reassign the array;
*/
const names=["netra","ashok","sunil"];
names[1]="Ashok Lamsal";
console.log(names);




// javascript forms
function getCheckInput(){
	var inputValue=document.forms["form1"]["input1"].value;
	//checking input validity
	if(inputValue==""){
		window.alert("Name must be filled out");
		return false;
	}
}

function checkInteger(){
	var text,integerInput=document.getElementById('inp1').value;
	if(integerInput=="")
	{
		text="is empty";
	}
    //integerInput=Number(integerInput);
    if(isNaN(integerInput)){
    	text=" Not a number";}
    else if(integerInput< 0 || integerInput> 10){
	  text=" Out of Range.";}
	 else{
	 	text=integerInput.toString();

	 }    var textShow="Input is " +text;
    document.getElementById('sec18').innerHTML=textShow;
    }

    

    /* html code

<! Constraint validation method   >
<p>Enter number and click on OK button</p>
<input id="inp2" type="number" min="100" max="300" required>
<!------------------------------------------------------------------------------------            >
<button type="button" onclick="getResponse()">OK </button>
<p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>
<p id="sec19"></p>

*/
/*
    //code for the constraint validation in DOM
    function getResponse(){
    	var writeMessage=document.getElementById("sec19");
    	var inputIntObj=document.getElementById("inp2");
    	if(!inputIntObj.checkValidity()){
    		writeMessage.innerHTML=inputIntObj.validationMessage;
    	}
    	else{
    		writeMessage.innerHTML="Input Accepted";
    	}
    }
   */
    //code for the validity check
        //code for the constraint validation in DOM
    /*

  <!      validity property                        >
<!  It's not working correctly>
<!input id="inp3" type="number" min="1" max="100" required>
<!button type="button" onclick="checkValidity()">Check Here </button><  ! How to remove the input field>
<p id="sec20"></p>    

// html code

    function checkValidity(){
    	var writeMessage=document.getElementById("sec20");
    	var inputIntObj=document.getElementById("inp3");
    	var text="";
    	if(inputIntObj.validity.rangeOverflow){
    		text="large than 100 !";
    	}
    	else if(inputIntObj==""){
    		text="Empty";
    	}
    	else if(inputIntObj.validity.rangeUnderflow){
    		text="Less than 1";
    	}
    	else{
    		text=inputIntObj;
    	}
    	writeMessage.innerHTML="Input is  "+text;
    }
    */