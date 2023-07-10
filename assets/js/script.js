/*-------------------------------------------------------------------------------------------------------------------INPUT FIELD SECTION */
/** collects value from the mortgage amount siler and assigns the same value to the mortgage amount input field */
    function updateMortgageAmount(value) {
      document.getElementById("mortgage-amount").value = value; 
      console.log("mortgage-amount" + value);
   };

/** collects value from the mortgage amount input field and assigns the same value to the mortgage amount slider */
    function updateMortgageSliderAmount(value) {
      document.getElementById("mortgage-slider").value = value;
      console.log("mortgage-slider" + value);
   };

/** collects value from the mortgage rate siler and assigns the same value to the mortgage rate input field */
    function updateBorrowingRateAmount(value) {
      document.getElementById("rate-slider").value = value;
      console.log("rate-slider" + value);
   };

/** collects value from the mortgage rate input field and assigns the same value to the mortgage rate slider */
    function updateRateSliderAmount(value){
      document.getElementById("borrowing-rate").value = value;
      console.log("borrowing-rate" + value);
   };

/** collects value from the mortgage term siler and assigns the same value to the mortgage term input field */
    function updateMortgageTermAmunt(value) {
      document.getElementById("term-slider").value = value;
      console.log("rate-slider" + value);
   };

/** collects value from the mortgage term input field and assigns the same value to the mortgage term slider */
    function updateTermSliderAmount(value){
      document.getElementById("mortgage-term").value = value;
      console.log("mortgage-term" + value);
   };
   
/*-------------------------------------------------------------------------------------------------------------------RESULT FIELD SECTION */

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

   let loanTerm = document.getElementById("mortgage-term").value; console.log("loanTerm " + loanTerm); // setting term

   let calculation1 = loanTerm * 12;  console.log("1. totalPayouts/calculation1 " + calculation1); // setting total payouts TP or 1 in

   document.getElementById("year-to-month-conversion").value = calculation1;  // what prints the TOTAL PAYOUTS RESULT-----
 
   let yearlyRate = document.getElementById("borrowing-rate").value; //mortgage term
   console.log("yearlyRate " + yearlyRate);

   let mortgageAmount = document.getElementById("mortgage-amount").value; console.log("mortgageAmount" + mortgageAmount); // mortgage amount
     
         //application of the formula as per lucidchart
         let calculation2 = yearlyRate / 100 / 12 ; console.log("2. MI/montlyTermInterest/calculation2 " + calculation2);
         
         let calculation3 = (1 + calculation2) ** calculation1; console.log("3. calculation3 / P " + calculation3); 
         
         let calculation4 = calculation3 - 1; console.log("4. calculation4 /T " + calculation4); 
         
         let calculation5 = calculation2 * calculation3; console.log("5. B /calculation5 " + calculation5);
         
         let calculation6 = calculation4 / calculation5; console.log("6. w /calculation6 " + calculation6);
         
        /* calculation6 = mortgageAmount / calculation1; console.log("6. /calculation6 / W " + calculation6); this could be the reason for my formula break?*/
            
         let calculation7 = mortgageAmount * calculation6; // Let's call it T - total
         console.log("7. calculation7 / Result " + calculation7); // e.g number 19754034.97146661  ----- need to divide this by payouts! IMPORTANT!


         let calculation8 = calculation7 / calculation1; console.log("8. totalCost /calculation8 "+ calculation8)
         
         // rounding out the number
         calculation8 = Math.round(calculation8); 
         console.log("8. Total mortgage Amount//calculation8 " + calculation8); 
         console.log("8. Total mortgage Amount/calculation8 " + Math.round(calculation8)); 
         
         //applying a comma to number for better readability
         let calculation8Punctuating = calculation8.toLocaleString("en-IE");
         console.log(calculation8Punctuating)
         document.getElementById("total-repayment-cost").value = calculation8Punctuating; // what prints number TOTAL COST/calculation8

         let montlyRepayment = calculation8 / calculation1;

         // if I don't add var = round.math(var) - it will not round
         montlyRepayment = Math.round(montlyRepayment); 
         console.log("Monthly Repayment = " + montlyRepayment); 

         // applying a comma to a number 
         let  montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
         document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating; // what prints number  MONTHLY COST
   
}


/*


      if (yearlyRate == 0){
         //Make mortgage amount equal to total cost
         document.getElementById("total-repayment-cost").value = mortgageAmount;
         console.log("mortgageAmount if statement" + mortgageAmount);

         // Divide mortgage amout by total payouts
         let montlyRepayment = mortgageAmount / calculation1;
         // Now let's add a comma to the number result
         montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
         document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating; // what prints MONTLY COST FOR 0 RATE
         console.log("montlyRepaymentPunctuating if statement" + mortgageAmount);}
         

         ....ese


*/




 









