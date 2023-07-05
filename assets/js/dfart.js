
/*
function amortisationCalculation() {
   // setting up the initial variables (amount, term years and yearly rate) we will need to falculate the formula
   let mortgageAmount = document.getElementById("mortgage-amount").value;
   console.log(mortgageAmount);

   let yearlyRate = document.getElementById("borrowing-rate").value;
   console.log(yearlyRate);

   let loanTerm = document.getElementById("mortgage-term").value;
   console.log(loanTerm);
   
} 


/*
document.getElementById("mortgage-term").addEventListener("input", calculateLoanTerm);*/

//Working click listener/function event that calles calculateLoanTerm - this funcion then calculates and gives a result
//document.getElementById("calculate-button").addEventListener("submit", calculateLoanTerm()); 
/* the issue of form resetting to a resting number in the HTML when clicking on button, also when adding
event.preventDefault(); - the calculation would not appear at all. 
All this was fixed with targeting the form itself via the ID. Merrit to https://www.youtube.com/watch?v=5endsOnJ6R4



// can we add a result to term in months using ${userName}? no need because preventDefault stops form from 
 //submitting and disssapearing numbers.



let mortgageAmount = 200000;
let yearlyRate = 4; 
let loanTerm = 10;

 
   let totalPayouts = loanTerm * 12;
   console.log("1. TP " + totalPayouts); // gives 120 - correct

   let montlyTermInterest = yearlyRate / 100 / 12 ;
   console.log("2. MI " + montlyTermInterest); // gives 0.0033333333333333335
let p = (1 + montlyTermInterest) ** totalPayouts;
console.log("3. P " + p); // 1.490832682418262
let t = p - 1;
console.log("4. T " + t); //0.49083268241826206
let b = montlyTermInterest * p;
console.log("5. B " + b); // 0.00496944227472754
let w = t / b;
console.log("6. W " + w); // 98.77017485733305
let result = mortgageAmount * w; // Let's call it T - total
console.log("7. Result " + result); // 19754034.97146661  ----- need to divide this by payouts! IMPORTANT!
let totalCost = result / totalPayouts; 
console.log("8. Total mortgage Amount " + totalCost); // 164616.95809555508 so we can round out,
console.log("8. Total mortgage Amount " + Math.round(totalCost)); // 164617

let montlyRepayment = totalCost / totalPayouts;
console.log("Monthly Repayment = " + Math.round(montlyRepayment)); // 1372 . I wanna do 1,372 
// found a way to add a coma to the number in https://sabe.io/blog/javascript-format-numbers-commas?utm_content=cmp-true 
console.log(montlyRepayment.toLocaleString("en-IE")); // 1,371.808  






ERRORS:

1. Uncaught TypeError: Cannot read properties of undefined (reading 'preventDefault')
    at calculateLoanTerm (script.js:39:10)
    at HTMLInputElement.onclick 

    found that the issue is cused by  event.preventDefault(); that I had it as it was in the course.
    
    SOLUTION: Found the issue - I was calling the function twice - once in the input HTML with onclick and another one in the event listener 
    I left only the JS event litener and the error disappeared =) 




ISSUES:
Rouding issue: montlyRepayment = Math.round(montlyRepayment); // if I don't add var = round.math(var) - it will not round 




NOTE: 



Breakpoint/debugger video reference https://www.youtube.com/watch?v=ABlaMXkUwzY 

https://docs.google.com/spreadsheets/d/1-tKBrNlmaYXdhLNhJXaNDh2xXvcBtZiJXVtMaborDeg/edit#gid=0   
*/
