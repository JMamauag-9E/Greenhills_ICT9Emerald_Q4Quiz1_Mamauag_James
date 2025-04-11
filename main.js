function solve() {
  	var weight = document.getElementById("WeightinKilo").value;
  	var height = document.getElementById("HeightinMeters").value;
// Formula for BMI
  	var bmi = weight/Math.pow(height, 2)
// Rounding Off
  	var bmi = Math.round(bmi);
// The results
  	if (bmi < 18.5) {
    	document.getElementById("measure").innerHTML = "<b>BMI =</b> " + bmi + " <b>Results:</b> " + " Underweight";
  	} 

  	else if (bmi >= 18.5 && bmi <= 24.9) {
    	document.getElementById("measure").innerHTML = "<b>BMI =</b> " + bmi + " <b>Results:</b> " + " Normal weight";
  	} 

  	else if (bmi >= 25 && bmi <= 29.9) {
    	document.getElementById("measure").innerHTML = "<b>BMI =</b> " + bmi + " <b>Results:</b> " + " Overweight";
  	} 

  	else {
    	document.getElementById("measure").innerHTML = "<b>BMI =</b> " + bmi + " <b>Results:</b> " + " Obese";
  	}
}