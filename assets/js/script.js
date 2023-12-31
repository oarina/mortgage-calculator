/*-------------------------------------------------------------------------------------------------------------------INPUT FIELD SECTION */
/** collects value from the mortgage amount siler and assigns the same value to the mortgage amount input field */
    function updateMortgageAmount(value) {
      document.getElementById("mortgage-amount").value = value; 
   }

/** collects value from the mortgage amount input field and assigns the same value to the mortgage amount slider */
    function updateMortgageSliderAmount(value) {
      document.getElementById("mortgage-slider").value = value;
   }

/** collects value from the mortgage rate siler and assigns the same value to the mortgage rate input field */
    function updateBorrowingRateAmount(value) {
      document.getElementById("rate-slider").value = value;
   }

/** collects value from the mortgage rate input field and assigns the same value to the mortgage rate slider */
    function updateRateSliderAmount(value){
      document.getElementById("borrowing-rate").value = value;
   }

/** collects value from the mortgage term siler and assigns the same value to the mortgage term input field */
    function updateMortgageTermAmunt(value) {
      document.getElementById("term-slider").value = value;
   }

/** collects value from the mortgage term input field and assigns the same value to the mortgage term slider */
    function updateTermSliderAmount(value){
      document.getElementById("mortgage-term").value = value;
   }
   
/*-------------------------------------------------------------------------------------------------------------------RESULT FIELD SECTION */

let form =document.getElementById("form");
form.addEventListener("submit",calculateMortgage); 
// https://www.youtube.com/watch?v=5endsOnJ6R4 - suggested to use ID from the form element and listening to submit itself.
/*** ths funciton applies amortization formula and out puts the result */

function calculateMortgage(event) {
    event.preventDefault();

    // VARIABLES: input field
    let loanTerm = parseFloat(document.getElementById("mortgage-term").value);
    let yearlyRate = parseFloat(document.getElementById("borrowing-rate").value);
    let mortgageAmount = parseFloat(document.getElementById("mortgage-amount").value);

    // VARIABLES: amortization formula
    let calculation1 = loanTerm * 12; // calculation 1 belongs to both amortisation formula and the output field. it is also used in bot if and else
    let calculation2;
    let calculation3;
    let calculation4;
    let calculation5;
    let calculation6;
    let calculation8;

    // VARIABLES: output field
    let totalMortgageCost;
    let monthlyRepayment;
    let monthlyRepaymentPunctuating;

    if (yearlyRate == 0) {
        // Make mortgage amount equal to total cost
        document.getElementById("total-repayment-cost").value = mortgageAmount;

        // Divide mortgage amount by total payouts
        monthlyRepayment = mortgageAmount / calculation1;

        // Add a comma to the number result
        monthlyRepaymentPunctuating = monthlyRepayment.toLocaleString("en-EU");
        document.getElementById("monthly-repayment-cost").value = monthlyRepaymentPunctuating;
    } else {
        // Application of the formula as per lucidchart
        calculation2 = yearlyRate / 100 / 12;
        calculation3 = Math.pow(1 + calculation2, calculation1);
        calculation4 = calculation3 - 1;
        calculation5 = calculation2 * calculation3;
        calculation6 = calculation4 / calculation5;
        calculation2 = mortgageAmount * calculation6;

        // Let's call it T - total --- e.g. number 19754034.97146661  ----- need to divide this by payouts! IMPORTANT!
        calculation8 = calculation2 / calculation1;

        // Rounding out the number
        calculation8 = Math.round(calculation8);

        // Applying a comma to the number for better readability
        totalMortgageCost = calculation8.toLocaleString("en-IE");
        monthlyRepayment = calculation8 / calculation1;

        // If I don't add var = Math.round(var), it will not round
        monthlyRepayment = Math.round(monthlyRepayment);

        // Applying a comma to the number
        monthlyRepaymentPunctuating = monthlyRepayment.toLocaleString("en-EU");

        // Sending result to the output fields
        document.getElementById("total-repayment-cost").value = totalMortgageCost;
        document.getElementById("year-to-month-conversion").value = calculation1;
        document.getElementById("monthly-repayment-cost").value = monthlyRepaymentPunctuating;
    }
}

/*-------------------------------------------------------------------------------------------------------------------LOOP*/

let sliders = document.querySelectorAll('input[type="range"]');
// Inspired with querySelectorAll here https://itnext.io/5-ways-to-loop-over-dom-elements-from-queryselectorall-in-javascript-55bd66ca4128 
for (let slider of sliders) {
   slider.addEventListener('input', calculateMortgage);
 }






         




 









