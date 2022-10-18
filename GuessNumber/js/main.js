function add(){
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}