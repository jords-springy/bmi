document.addEventListener('DOMContentLoaded', function() {
    const bmiField = document.getElementById('bmi');
    const resultField = document.getElementById('result');
    const errorField = document.getElementById('error'); // Error message element
    const calculate = document.getElementById('calculate1');
    
    calculate.addEventListener('click', function() {
        let weight = document.getElementById('weight').value;
        let height = document.getElementById('height').value;

        // Clear previous messages
        errorField.innerText = '';
        bmiField.innerText = '';
        resultField.innerText = '';

        // Validate inputs
        if (!weight || !height) {
            errorField.innerText = 'Both weight and height are required to calculate BMI.';
            return;
        }

        // Calculate BMI if both inputs are filled
        let bmi = calculateBMI(weight, height);
        resultField.innerText = bmi.toFixed(2);

        // Determine BMI category
        if (bmi <= 18.4) {
            bmiField.innerText = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiField.innerText = 'Normal';
        } else if (bmi >= 25 && bmi <= 39.9) {
            bmiField.innerText = 'Overweight';
        } else {
            bmiField.innerText = 'Obese';
        }
    });
});

function calculateBMI(weight, height) {
    let w = parseFloat(weight);
    let h = parseFloat(height);
    return w / (h ** 2);
}
