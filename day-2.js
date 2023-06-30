// 1-Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1



// solution:-


  
function evenOddSum(x)
{
    num =x.toString();
    var evensum=0;
    var oddsum=0;
    for(var i=0;i<num.length;i++)
    { if((i+1)%2==0)
    {
        evensum=evensum+parseInt(num[i]);
    }
     else
    {
        oddsum=oddsum+parseInt(num[i]);
    }
    }
    console.log(evensum);
    console.log(oddsum);
}

output:-
evenOddSum(2914);
output:
13
3


// ===================================================================================================================



// 2-Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors



  
// solution:-



  
function rotate(x)
{
    var str="";
    var n=x.length;
  x=  x.toLowerCase();
    str=str+x.charAt(0).toUpperCase();
    for(var i=1;i<n;i++)
        {
            if(x.charAt(i)==" ")
            {
                str=str+x.charAt(i);
                str=str+x.charAt(i+1).toUpperCase();
                i++;
            }
            else
            {
                str=str+x.charAt(i);
            }
        }
    console.log(str);
}




// =============================================================================================================





// 3-Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long


// soulution:-


function validate(num)
{
    if( (typeof num === 'number')&& (num.toString().length==10))
       { console.log("valid number");
       }
    else
    {console.log("not valid");}
}


output:-

validate(9829839839);
valid number

validate(98298398);
not  valid

//  ========================================================================================================================= 

// 4-Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu


// soution:-

function validateEmail(email)
{
    var atplace=email.indexOf("@");
    if((atplace!=0 ) && ((email.endsWith(".com"))||(email.endsWith(".org"))||(email.endsWith(".edu"))))
       {
        console.log("valid");
       }
    else
    {
        console.log("not valid");
    }
}



// ============================================================================================================


// Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// // T 1
// O 1
// S 1
