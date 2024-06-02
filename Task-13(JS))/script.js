var num1Input = document.getElementById("num1");
  var num2Input = document.getElementById("num2");
  var resultInput = document.getElementById("result");

  // Add event listeners to num1Input and num2Input
  num1Input.addEventListener("input", updateResult);
  num2Input.addEventListener("input", updateResult);

  function updateResult() {
    var num1 = parseInt(num1Input.value);
    var num2 = parseInt(num2Input.value);

    
    if (!isNaN(num1) && !isNaN(num2)) {
      
      var sum = num1 + num2;
      resultInput.value = sum;
    } else {
      
      resultInput.value = "NaN";
    }
  }