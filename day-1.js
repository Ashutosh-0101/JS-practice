// 1-Write a JavaScript program to display the current day and time in the following format.
// Today is : wednesday.
// Current time is : 10 PM : 30 : 38

// solution:-

function GetDAy(){
    const days=["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunnday"];
    const d=new Date();var h;
    const h1=d.getHours();
    if(h1<12)
    {
        h=h1+"AM";
    } else if(h1==12){h=12+"pm"}
    else
    {
        h=h1-12+"PM";
    }
    var m=d.getMinutes();
    var s=d.getSeconds();
     console.log("Today is :"+days[d.getDay()-1]);
    console.log("Current time is :"+h + ":"+  m + ":"+ s);
}




// ======================================





// 2-.Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy 

// solution:-

function GETDATE(){
    const d=new Date();
    var m=d.getMonth();
    var y=d.getYear();
    var date=d.getDate();
    const today=`${m} / ${date}/ ${y} , ${m}- ${date}- ${y}  `;
    console.log(today);
}



// ======================================



// 3-WAP to print area and perimeter of rectangle , taking input from the user , using prompt.

// solution:-

function Area(){
    var len=prompt("enter the length");
    var w=prompt("enter the width");
    var area=parseInt(len*w);
    console.log(area);
}


// ======================================




// 4-WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// input  = brainmentors

// output = sbrainmentor

// solution:-


function rotate(){
    var str="brainmentors";var str1=str;
    var len=str.length;
    for(i=len-1;i>=0,;i--)
           {
            var first=str.charAt(i);
            var rest=str1.slice(0,len-1);
          
            console.log( first+rest);
            str1=first+rest;
           }
}


// ======================================




// 5-WAP to find out if 1st January will be a Sunday between 2000 and 2030



// solution:-


unction FirstSunday() {
  for (var y = 2000; y <= 2030; y++) {
    var d = new Date(y, 0, 1);
    if (d.getDay() === 0){
        console.log("The first january have number of sunday is:"+y)
}
}
}

// =======================================
