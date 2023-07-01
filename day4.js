// 1. Find Occurance of a target value in given array;
// arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
// target = 19;

// soution:-
var arr=[19, 22, 18, 19, 16, 18, 19, 21, 24]
arr.filter(ele=>ele==19);
(3) [19, 19, 19]

// 2 . Reverse a given string using reverse() method 
// input = "BrainMentors"
// output = "srotnemniarB"

// solution:-

a="ashutosh";
var arr=a.split('');
arr.reverse();
(8) ['h', 's', 'o', 't', 'u', 'h', 's', 'a']
arr.join('');
'hsotuhsa'

// 3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Count of vowels in string;
// ex:- str = "brainmentors"
// 		output: count = 4


solution:-
  
function noOfVovels(str){
    var strArr=str.split('');
    var ans= strArr.filter(e=>(e=="a" ||e=="e" ||e=="i"||e=="o"||e=="u"));  
    return ans.length;
}
noOfVovels("ashutosh");
3

// 4. Write a function to find the sum of all elements in an array.
// ex:- arr = [1,2,3,4,5];

// output = 15;

// soution:-
arr=[10,30,40,50];
(4) [10, 30, 40, 50]
arr.reduce((acc,e)=>acc+e,0);
130

// 5.Write a function to reverse the order of elements in an array.
// don't Use reverse() Method 
// ex:- var arr = ['a','b','c','d','e','f']
			
// 		output = ['f','e','d','c','b','a']

// solution:-
function reverse(arr) {
    var rev=[];
    var len=arr.length;
    for(var i=len-1;i>=0;i--)
        {  rev.push(arr[i])
        }
      return rev;      
}
var arr1=['a2','b4','c5','6d','2e','2f'];
reverse(arr1);
(6) ['2f', '2e', '6d', 'c5', 'b4', 'a2']



// 6. Write a function to remove a specific element from an array.

// 	arr = [1,2,3,4,5];
// 	remove = 3

// 	output :- [1,2,4,5]

// soution:-

var arr=[1,2,3,4,5];
function remove(arr){
var arr2=[];
for(e of arr)
    {
      if(e!=3)
      {
        arr2.push(e)
      }
    }
    return arr2;
}

remove(arr)
(4) [1, 2, 4, 5]


// 7. Write a function to find the second largest number in an array.

// ex:- var arr = [12,4,6,9,2,15,3,9];
		
// 		output second largest : 12

// solution:-

function secondLargest(arr){
    var max=Number.MIN_VALUE;
    var S_max=0;
    for(ele of arr)
        { if(ele>max)
           { S_max=max;
              max=ele;
           }
         else if(ele>S_max && ele<max)
             {
                 S_max=ele;
             }

        }

       return S_max;
}
var arr2=[10,20,10,20,30,144,144];
console.log("second largest :"+secondLargest(arr));
second largest : 30;

// 8.Write a function to rotate an array by a given number of steps to the right.

// ex:- arr = [1,2,3,4,5];
// 		step = 2;

//  output = [5,4,1,2,3]

// solution:-
function rotate(arr,n){
    var ans=[];
    for(var i=arr.length-1;i>arr.length-1-n;i--)
        {ans.push(arr[i]);
        }
    for(var i=0;i<arr.length-n;i++)
        {ans.push(arr[i]);
        }
    console.log(ans);
}
undefined
rotate(a,2);
(5) [5, 4, 1, 2, 3]


// 9.Write a function to find the intersection of two arrays (common elements between the two arrays).

// ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

// output = [1,4,7]

// 10.Write a function to remove duplicate elements from an array while preserving the original order.
// 	ex:- arr = [1,2,5,2,5,1,6,7,7]

// 		output:- [1,2,5,6,7]
var  arr = [1,2,5,2,5,1,6,7,7];

function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arr));
(5) [1, 2, 5, 6, 7]
