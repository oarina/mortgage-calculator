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
/*** ths funciton applies amortization formula and out puts the result */

function calculateMortgage(event) {
    event.preventDefault();
    console.log("*Function activated");

    // VARIABLES: input field
    let loanTerm = parseFloat(document.getElementById("mortgage-term").value);
    console.log("loanTerm " + loanTerm);
    let yearlyRate = parseFloat(document.getElementById("borrowing-rate").value);
    console.log("yearlyRate " + yearlyRate);
    let mortgageAmount = parseFloat(document.getElementById("mortgage-amount").value);
    console.log("mortgageAmount" + mortgageAmount);

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
        console.log("mortgageAmount if statement" + mortgageAmount);

        // Divide mortgage amount by total payouts
        monthlyRepayment = mortgageAmount / calculation1;

        // Add a comma to the number result
        monthlyRepaymentPunctuating = monthlyRepayment.toLocaleString("en-EU");
        document.getElementById("monthly-repayment-cost").value = monthlyRepaymentPunctuating;
    } else {
        // Application of the formula as per lucidchart
        calculation2 = yearlyRate / 100 / 12;
        console.log("2. MI/montlyTermInterest/calculation2 " + calculation2);
        calculation3 = Math.pow(1 + calculation2, calculation1);
        console.log("3. calculation3 / P " + calculation3);
        calculation4 = calculation3 - 1;
        console.log("4. calculation4 /T " + calculation4);
        calculation5 = calculation2 * calculation3;
        console.log("5. B /calculation5 " + calculation5);
        calculation6 = calculation4 / calculation5;
        console.log("6. w /calculation6 " + calculation6);
        calculation2 = mortgageAmount * calculation6;
        console.log("7. calculation7 / Result " + calculation2);

        // Let's call it T - total --- e.g. number 19754034.97146661  ----- need to divide this by payouts! IMPORTANT!
        calculation8 = calculation2 / calculation1;
        console.log("8. totalCost /calculation8 " + calculation8);

        // Rounding out the number
        calculation8 = Math.round(calculation8);
        console.log("8. Total mortgage Amount/calculation8 " + calculation8);

        // Applying a comma to the number for better readability
        totalMortgageCost = calculation8.toLocaleString("en-IE");
        console.log(totalMortgageCost);
        monthlyRepayment = calculation8 / calculation1;

        // If I don't add var = Math.round(var), it will not round
        monthlyRepayment = Math.round(monthlyRepayment);
        console.log("Monthly Repayment = " + monthlyRepayment);

        // Applying a comma to the number
        monthlyRepaymentPunctuating = monthlyRepayment.toLocaleString("en-EU");

        // Sending result to the output fields
        document.getElementById("total-repayment-cost").value = totalMortgageCost;
        document.getElementById("year-to-month-conversion").value = calculation1;
        document.getElementById("monthly-repayment-cost").value = monthlyRepaymentPunctuating;
    }
}




         




 









