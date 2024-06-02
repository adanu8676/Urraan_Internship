function generateArray() {
    var arraySize = 15; 
    var array = [];
    for (var i = 0; i < arraySize; i++) {
      array.push(Math.floor(Math.random() * 100)); 
    }
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Generated Array: " + array.join(", ");
    getFirstAndLast(array);
  }

  function getFirstAndLast(array) {
    var outputDiv = document.getElementById("output");
    var firstElement = array[0];
    var lastElement = array[array.length - 1];
    outputDiv.innerHTML += "<br>First Element: " + firstElement + "<br>Last Element: " + lastElement;
  }