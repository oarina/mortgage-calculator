 /* This function is called from the onchange element in HTML that needs to change and will
    fetch the value from the ID linked element and paste the change to the onclick*/ 
    function updateMortgageAmount(value) {
      document.getElementById("mortgage-amount").value = value; 
      console.log("mortgage-amount" + value);
   };

    function updateMortgageSliderAmount(value) {document.getElementById("mortgage-slider").value = value;};

    function updateBorrowingRateAmount(value) {document.getElementById("rate-slider").value = value;};
    function updateRateSliderAmount(value){document.getElementById("borrowing-rate").value = value;};

    function updateMortgageTermAmunt(value) {document.getElementById("term-slider").value = value;};
    function updateTermSliderAmount(value){document.getElementById("mortgage-term").value = value;};

    /*the functions above worked, but the numbers were not pre-set in the inboxes and since I have a presetting even though slider changes it,
    once I hit calculate - it resets to the 'preset' figure and calculation happens based on that
    
    I think I would need to change the value in the inbox with the function and not only have it display the value externally only.
    Console.log shows that the numbers are also  being logged into the system. so going to check the button code*/




    

   /* Initial attempt / drft at calculation fucntions */

/*
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

.

/*
this is the total payment on the mortgae  and from here we can find out how much 
the mortgage was in total and what was the montly payment.
*/
/*
document.getElementById("mortgage-term").addEventListener("input", calculateLoanTerm);*/

//Working click listener/function event that calles calculateLoanTerm - this funcion then calculates and gives a result
document.getElementById("calculate-button").addEventListener("click", calculateLoanTerm()); 

function calculateLoanTerm(event) {
   // event.preventDefault();
   let loanTerm = document.getElementById("mortgage-term").value;
   console.log("loanTerm " + loanTerm);

   let totalPayouts = loanTerm * 12;
   console.log(totalPayouts);
   document.getElementById("year-to-month-conversion").value = totalPayouts;

}


/*
function amortisationCalculation() {
   // setting up the initial variables (amount, term years and yearly rate) we will need to falculate the formula
   let mortgageAmount = document.getElementById("mortgage-amount").value;
   console.log(mortgageAmount);

   let yearlyRate = document.getElementById("borrowing-rate").value;
   console.log(yearlyRate);

   let loanTerm = document.getElementById("mortgage-term").value;
   console.log(loanTerm);
   
} */
