// 1.Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
// 3==multiply, 4==divide ).Don`t use switch statement or if else statements
 
// 1.add,
// 2.subtract,
// 3.multiply,
// 4.divide 

// write the calc function for all the operations

// solution:-

 function Calc(){
    
    var add=function(x,y){
        console.log(x+y);
    }
     var sub=function(x,y){
         console.log(x-y);
    }
     var mul=function(x,y){
        console.log(x*y) ;
    }
     var div=function(x,y){
         console.log(x/y);
    }
    return [add,sub,mul,div];
}
function takeValue() {
    var y=parseInt(prompt("enter the first no"));
    var x=parseInt(prompt("enter the second no"));
    var op=parseInt(prompt("enter the operator"));
    Calc()[op-1](y,x);
}
console.log(takeValue());

// ===========================================

// 2 . Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.


// Output:
// "true" if the triangle is equilateral and "false" if its not.

  function isEqui(a,b,c)
    { if(a==b && b==c){
             return true;
    }
     else{
         return false;
     }
    }
function Triangle(x,y,z,fn){
    return fn(x,y,z);
}
Triangle(3,4,5,isEqui);
false

==========================================

// 3.Given two strings, return true if they are anagrams of one another

// For example: Mary is an anagram of Army

solution:-
function anagram(x,y){
    var p=false;
    if(x.length!==y.length)return false;
    for( var i=0;i<x.length;i++){
       var n=x.charAt(i);
       if(y.indexOf(n)===-1) 
       {
          return false; 
       }
        else{
        return true;
        }
    }
    return p;
}

anagram("mary","amyr");
true

// ==========================================


// 4. Create a function Employee, having id, name, basic_Salary as arguments.

// Compute HRA, DA, TA, GS, NS.

// HRA is 30% of Basic Salary.
// DA is 10% of Basic Salary.
// TA is 20% of Basic Salary.

// GS = Basic Salary + HRA + DA + TA;

// TAX DEDUCTION is 10% of GS.

// NS = GS - TAX DEDUCTION.

// NOte : Use Basic Salary in Lexical Scope 
// Print salary slip of the employee.

function salaryslip(id,name,basic_salary){
    function hra(){
        
        return .30*basic_salary;
    }
     function da(){
        
        return .10*basic_salary;
    }
     function ta(){
        
        return .02*basic_salary;
    }
     function gs(){
        
        return basic_salary+hra()+da()+ta();
    }
     function taxdeduction(){
         
         return (0.10*gs());
     }
     
     function ns(){
         
        return gs()-taxdeduction();
    }
    // return [hra,da,ta,gs,taxdeduction,ns];
    console.log("hra is:"+hra());
    console.log("da is:"+da());
    console.log("Ta is:"+ta());
    console.log("gs is:"+gs());
    console.log("taxdeduction is:"+taxdeduction());
    console.log("ns is:"+ns());
    
}
var id=parseInt(prompt("enter the id"));
var name=prompt("enter name");
var basic_salary=parseInt(prompt("enter the basic salary"));
console.log("name and id is:"+name+" "+id);
salaryslip(id,name,basic_salary);

output:
name and id is:shubham 21
hra is:1500
da is:500
Ta is:100
gs is:7100
taxdeduction is:710
ns is:6390
  
===================================================


  
// 5. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]

// output = maxno. : 15
// 			minno. : -1

// solution:-
  
function maxMin(arr)
{
    arr.sort(function(a, b){return a - b});;
    console.log(arr[0]);
    console.log(arr[arr.length-1]);
}
var arr=[10,2,3,11,33,44,22,100];
maxMin(arr);


output:
2
100


