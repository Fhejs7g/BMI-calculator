 
function compute() {
     w = document.getElementById("w").value
    h = document.getElementById("h").value
    let mark;
  result = (w /( h * h))
  if (result < 16 ) {
   mark = "Emaciated";
 } else if (result > 16 && result < 18.5 ) {
   mark = "Underweight";
 }  else if (result >18.5 && result < 25 ) {
   mark = "Normal";
 } else if (result > 25 && result < 30 ) {
   mark = "Overweight";
 }   else if (result > 30) {
   mark = "Obese";
 }  
 document.getElementById("that").value = mark ;
document.getElementById("result").value  =  result

   }
  
  



 //let bmi = document.getElementById("bmi")
 //let submit = document.getElementById("submit")

































  
   //alert("BMI:" + bmi)
      //document.getElementById("c").value = c;
      /*function testGreaterThan(c) { 
           if (c < 16 ) {
          return "Severly underweight";
      } else if (c > 16 && c < 18.5 ) {
          return "Underweight";
      }  else if (c >18.5 && c < 25 ) {
          return "Normal";
      } else if (c > 25 && c < 30 ) {
          return "Overweight";
      }   else if (c > 30) {
          return "Obese";
      }  } */
      //var w = prompt("enter weight");
     // var h = prompt("enter height");
     //  var bmi =  w/(h*h);
    // alert("BMI:" + bmi)
   
    // document.write("hello")
     

//document.write(testGreaterThan(""));
