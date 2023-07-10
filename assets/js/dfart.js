
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



/* IF ELSE FORMULA WITH MISTAKES


function calculateMortgage(event) {
 event.preventDefault(); 
   // disables form being sent off and lets function do the calc



   let loanTerm = document.getElementById("mortgage-term").value; //  BORROWING RATE
   console.log("loanTerm " + loanTerm); 

   let totalPayouts = loanTerm * 12;
   console.log(totalPayouts);

   document.getElementById("year-to-month-conversion").value = totalPayouts;  // what prints the numberf for TOTAL PAYOUTS
 
   let yearlyRate = document.getElementById("borrowing-rate").value;
   console.log(yearlyRate);

   let mortgageAmount = document.getElementById("mortgage-amount").value;
   console.log(mortgageAmount);

   if (yearlyRate === 0) {
      // make mortgage amount equal to total cost 
      document.getElementById("total-repayment-cost").value = mortgageAmount;
      let totalCost = Math.round(totalCost)

      let w = mortgageAmount / totalPayouts;
      console.log("6. W " + w);

      let result = mortgageAmount * w; // Let's call it T - total
      console.log("7. Result " + result);


   }  else {
   
      let montlyTermInterest = yearlyRate / 100 / 12 ;
      console.log("2. MI " + montlyTermInterest);
      
      let p = (1 + montlyTermInterest) ** totalPayouts;
      console.log("3. P " + p); // 1.490832682418262
      
      let t = p - 1;
      console.log("4. T " + t); //0.49083268241826206
      
      let b = montlyTermInterest * p;
      console.log("5. B " + b); // 0.00496944227472754
      
      let w = t / b

      document.getElementById("total-repayment-cost").value = mortgageAmount;
      let totalCost = Math.round(totalCost)
      
     ERROR HERE: this calc belongs to if rate= 0 ---w was set twce let w = mortgageAmount / totalPayouts;
      console.log("6. W " + w);

      let result = mortgageAmount * w; // Let's call it T - total
      console.log("7. Result " + result); // 19754034.97146661  ----- need to divide this by payouts! IMPORTANT!



      let totalCost = result / totalPayouts; 
      totalCost = Math.round(totalCost); // rounding out the number
      console.log("8. Total mortgage Amount " + totalCost); // 164616.95809555508 so we can round out,
      console.log("8. Total mortgage Amount " + Math.round(totalCost)); // 164617
      
      let totalCostPunctuating = totalCost.toLocaleString("en-IE");
      console.log(totalCostPunctuating)
      document.getElementById("total-repayment-cost").value = totalCostPunctuating; // what prints number TOTAL COST
   
      let montlyRepayment = totalCost / totalPayouts;
      montlyRepayment = Math.round(montlyRepayment); // if I don't add var = round.math(var) - it will not round
      console.log("Monthly Repayment = " + montlyRepayment); 
   
      let montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
      document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating; // what prints number MONTHLY COST 
      debugger
   
   }
   
}



*/


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



  /*---------------extras 
  /* calculation6 = mortgageAmount / calculation1; console.log("6. /calculation6 / W " + calculation6); this could be the reason for my formula break?*/
         //Make mortgage amount equal to total cost
         document.getElementById("total-repayment-cost").value = mortgageAmount; console.log("mortgageAmount if statement" + mortgageAmount);

         // Divide mortgage amout by total payouts
         let montlyRepayment = mortgageAmount / calculation1;
         // Add a comma to the number result

         montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
         document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating;  console.log("montlyRepaymentPunctuating if statement" + mortgageAmount);}// what prints MONTLY COST FOR 0 RATE 



/*      DELETED CODE */


function calculateMortgage(event) {
   event.preventDefault();  console.log("*Function activated");  // disables form being sent off and lets function do the calc

    //  VARIABLES: input field 
   let loanTerm = document.getElementById("mortgage-term").value; console.log("loanTerm " + loanTerm); // setting term
   let yearlyRate = document.getElementById("borrowing-rate").value; console.log("yearlyRate " + yearlyRate); // mortgage term
   let mortgageAmount = document.getElementById("mortgage-amount").value; console.log("mortgageAmount" + mortgageAmount); // mortgage amount
      // VARIABLES: amortisation formula 
   let calculation1 = loanTerm * 12; // calculation 1 belongs to both amortisation formula and the output field. it is also used in bot if and else
   let calculation2;
   let calculation3;
   let calculation4;
   let calculation5;
   let calculation6;
   let calculation8;
      // VARIABLES: output field 
   let totalMortgageCost;
   let montlyRepayment;
   let montlyRepaymentPunctuating;

      if (yearlyRate === 0){
       
         //Make mortgage amount equal to total cost
         document.getElementById("total-repayment-cost").value = mortgageAmount; 
         console.log("mortgageAmount if statement" + mortgageAmount);

         // Divide mortgage amout by total payouts
         let montlyRepayment = mortgageAmount / calculation1;   //-------error hd monthlyRepayment declared asa new var - mistake
        
         // Add a comma to the number result
         montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
         document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating;  console.log("montlyRepaymentPunctuating if statement" + mortgageAmount);// what prints MONTLY COST FOR 0 RATE
      } else {
         //application of the formula as per lucidchart
       
         calculation2 = yearlyRate / 100 / 12 ; console.log("2. MI/montlyTermInterest/calculation2 " + calculation2);
         calculation3 = (1 + calculation2) ** calculation1; console.log("3. calculation3 / P " + calculation3); 
         calculation4 = calculation3 - 1; console.log("4. calculation4 /T " + calculation4); 
         calculation5 = calculation2 * calculation3; console.log("5. B /calculation5 " + calculation5);
         calculation6 = calculation4 / calculation5; console.log("6. w /calculation6 " + calculation6);
         calculation2 = mortgageAmount * calculation6;  console.log("7. calculation7 / Result " + calculation2);  // Let's call it T - total --- e.g number 19754034.97146661  ----- need to divide this by payouts! IMPORTANT!
         calculation8 = calculation2 / calculation1; console.log("8. totalCost /calculation8 "+ calculation8);
         // rounding out the number
         calculation8 = Math.round(calculation8); console.log("8. Total mortgage Amount//calculation8 " + calculation8); console.log("8. Total mortgage Amount/calculation8 " + Math.round(calculation8)); 
         //applying a comma to number for better readability
         totalMortgageCost = calculation8.toLocaleString("en-IE"); console.log(totalMortgageCost);
         montlyRepayment = calculation8 / calculation1;
         // if I don't add var = round.math(var) - it will not round
         montlyRepayment = Math.round(montlyRepayment); console.log("Monthly Repayment = " + montlyRepayment); 
         // applying a comma to a number 
         montlyRepaymentPunctuating = montlyRepayment.toLocaleString("en-EU");
         //sending result to the output fields
         document.getElementById("total-repayment-cost").value = totalMortgageCost; // what prints number TOTAL COST/calculation8 /totalMortgageCost
         document.getElementById("year-to-month-conversion").value = calculation1;  // what prints the TOTAL PAYOUTS RESULT-----
         document.getElementById("monthly-repayment-cost").value = montlyRepaymentPunctuating; // what prints number  MONTHLY COST
      };
}


//-------------------------------------------------------------------------------------------before fixing with --jsLINT 

function calculateMortgage(event) {
   event.preventDefault();
   console.log("*Function activated");

   // VARIABLES: input field
   let loanTerm = document.getElementById("mortgage-term").value;
   console.log("loanTerm " + loanTerm);
   let yearlyRate = document.getElementById("borrowing-rate").value;
   console.log("yearlyRate " + yearlyRate);
   let mortgageAmount = document.getElementById("mortgage-amount").value;
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
       calculation3 = (1 + calculation2) ** calculation1;
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