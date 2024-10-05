let m = prompt("Enter the number");
for(let i=1;i<=m;i++)
{
    if(i%3 == 0 && i%5 != 0 )
    {
        console.log("fizz");
    }
    else if(i%3 != 0 && i%5 == 0)
    {
        console.log("Buzz");
    }
    else if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else 
    {
        console.log(i);
    }


}