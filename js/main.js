function calculateInterest() {
   interest = Number(document.getElementById('interestRate').value)/1200;
   totalAmt = Number(document.getElementById('totalAmount').value);
   payments = Number(document.getElementById('paymentAmount').value);
   var paidInterest = 0;

  if(interest === 0 || totalAmt === 0 || payments === 0) {
    $('.input').css("border", "2px solid red");
  } else {
    while(totalAmt > payments){
      paidInterest += totalAmt * interest;
      totalAmt = totalAmt - payments;

      console.log(interest + ", " + totalAmt + ", " + payments + ", " + paidInterest);
    }
    var interestPaid = paidInterest.toFixed(2);
    $('.interestOutput').text("Your total interest paid will be $" + interestPaid);
  }
}

function resetFields() {
  document.getElementById('interestRate').value = "";
  document.getElementById('totalAmount').value = "";
  document.getElementById('paymentAmount').value = "";
}
