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
this is the total payment on the mortgae  and from here we can find out how much 
the mortgage was in total and what was the montly payment.
*/

let form =document.getElementById("form");
form.addEventListener("submit",calculateMortgage); 
// https://www.youtube.com/watch?v=5endsOnJ6R4 - suggested to use ID from the form element and listening to submit itself.

function calculateMortgage(event) {
 event.preventDefault(); 
   // disables form being sent off and lets function do the calc

   let loanTerm = document.getElementById("mortgage-term").value;
   console.log("loanTerm " + loanTerm); 

   let totalPayouts = loanTerm * 12;
   console.log(totalPayouts);

   document.getElementById("year-to-month-conversion").value = totalPayouts;  // what prints the number
 
   let yearlyRate = document.getElementById("borrowing-rate").value;
   console.log(yearlyRate);

   let mortgageAmount = document.getElementById("mortgage-amount").value;
   console.log(mortgageAmount);

   let montlyTermInterest = yearlyRate / 100 / 12 ;
   console.log("2. MI " + montlyTermInterest);
   
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
   totalCost = Math.round(totalCost); // rounding out the number
   console.log("8. Total mortgage Amount " + totalCost); // 164616.95809555508 so we can round out,
   console.log("8. Total mortgage Amount " + Math.round(totalCost)); // 164617
   
   let totalCostPunctuating = totalCost.toLocaleString("en-IE");
   console.log(totalCostPunctuating)
   document.getElementById("total-repayment-cost").value = totalCostPunctuating; // what prints number

   let montlyRepayment = totalCost / totalPayouts;
   montlyRepayment = Math.round(montlyRepayment); // if I don't add var = round.math(var) - it will not round
   console.log("Monthly Repayment = " + montlyRepayment); 
   let montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
   document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating; // what prints number 
}

/*
 * Adds a comma to a number e.g. from 200000 to 200,000
 */

 









