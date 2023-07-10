 /* This function is called from the oninput element in HTML that needs to change and will
    fetch the value from the ID linked element and   ste the change to the onclick*/ 
    
    
    function updateMortgageAmount(value) {
      document.getElementById("mortgage-amount").value = value; 
      console.log("mortgage-amount" + value);
   };

    function updateMortgageSliderAmount(value) {
      document.getElementById("mortgage-slider").value = value;
      console.log("mortgage-slider" + value);
   };

    function updateBorrowingRateAmount(value) {
      document.getElementById("rate-slider").value = value;
      console.log("rate-slider" + value);
   };

    function updateRateSliderAmount(value){
      document.getElementById("borrowing-rate").value = value;
      console.log("borrowing-rate" + value);
   };

    function updateMortgageTermAmunt(value) {
      document.getElementById("term-slider").value = value;
      console.log("rate-slider" + value);
   };

    function updateTermSliderAmount(value){
      document.getElementById("mortgage-term").value = value;
      console.log("mortgage-term" + value);
   };

   

let form =document.getElementById("form");
form.addEventListener("submit",calculateMortgage); 
// https://www.youtube.com/watch?v=5endsOnJ6R4 - suggested to use ID from the form element and listening to submit itself.

/*
 * ths funciton applies amortization formula and out puts the result
 */

function calculateMortgage(event) {
 event.preventDefault(); 
   // disables form being sent off and lets function do the calc
   console.log("*Function activated")

   let loanTerm = document.getElementById("mortgage-term").value;
   console.log("loanTerm " + loanTerm); 

   let totalPayouts = loanTerm * 12; //
   console.log("totalPayouts " +totalPayouts);

   document.getElementById("year-to-month-conversion").value = totalPayouts;  // what prints the TOTAL PAYOUTS RESULT
 
   let yearlyRate = document.getElementById("borrowing-rate").value; //mortgage term
   console.log("yearlyRate " + yearlyRate);

   let mortgageAmount = document.getElementById("mortgage-amount").value; // mortgage amount
   console.log("mortgageAmount" + mortgageAmount);

   let montlyRepaymentPunctuating; // had an error 141 that is why i put this var here.

      if (yearlyRate == 0){
         //Make mortgage amount equal to total cost
         document.getElementById("total-repayment-cost").value = mortgageAmount;
         console.log("mortgageAmount if statement" + mortgageAmount);

         // Divide mortgage amout by total payouts
         let montlyRepayment = mortgageAmount / totalPayouts;
         // Now let's add a comma to the number result
         montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
         document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating; // what prints MONTLY COST FOR 0 RATE
         console.log("montlyRepaymentPunctuating if statement" + mortgageAmount);

      } else {
         //application of the formula as per lucidchart
         let montlyTermInterest = yearlyRate / 100 / 12 ;
         console.log("2. MI " + montlyTermInterest);
         
         let p = (1 + montlyTermInterest) ** totalPayouts;
         console.log("3. P " + p); 
         
         let t = p - 1;
         console.log("4. T " + t); 
         
         let b = montlyTermInterest * p;
         console.log("5. B " + b);
         
         let w = t / b
         
         w = mortgageAmount / totalPayouts;
         console.log("6. W " + w);
            
         let result = mortgageAmount * w; // Let's call it T - total
         console.log("7. Result " + result); // e.g number 19754034.97146661  ----- need to divide this by payouts! IMPORTANT!


         let totalCost = result / totalPayouts; 
         // rounding out the number
         totalCost = Math.round(totalCost); 
         console.log("8. Total mortgage Amount " + totalCost); 
         console.log("8. Total mortgage Amount " + Math.round(totalCost)); 
         
         //applying a comma to number for better readability
         let totalCostPunctuating = totalCost.toLocaleString("en-IE");
         console.log(totalCostPunctuating)
         document.getElementById("total-repayment-cost").value = totalCostPunctuating; // what prints number TOTAL COST

         let montlyRepayment = totalCost / totalPayouts;

         // if I don't add var = round.math(var) - it will not round
         montlyRepayment = Math.round(montlyRepayment); 
         console.log("Monthly Repayment = " + montlyRepayment); 

         // applying a comma to a number 
         montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
         document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating; // what prints number  MONTHLY COST
   } 
}




 









