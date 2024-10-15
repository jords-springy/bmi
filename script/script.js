document.addEventListener('DOMContentLoaded', function() {
    const bmiField = document.getElementById('bmi');
    const resultField = document.getElementById('result');
    const errorField = document.getElementById('error');

    const calculate = document.getElementById('calculate1');

    calculate.addEventListener('click', function() {
        // Clear previous error messages
        errorField.innerText = '';

        // Check if inputs are filled
        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;

        if (!weight || !height) {
            errorField.innerText = 'You need to fill in both fields before pressing the button!';
            bmiField.innerText = '';
            resultField.innerText = '';
            return; // Exit the function if validation fails
        }

        // Calculate BMI
        const bmiResult = calculateBMI();
        
        // Display the result
        resultField.innerText = `Your BMI is: ${bmiResult}`;

        if (bmiResult <= 18.4) {
            bmiField.innerText = 'Underweight';
        } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
            bmiField.innerText = 'Normal';
        } else if (bmiResult >= 25 && bmiResult <= 39.9) {
            bmiField.innerText = 'Overweight';
        } else {
            bmiField.innerText = 'Obese';
        }

        // Clear input fields after calculation
        document.getElementById('weight').value = '';
        document.getElementById('height').value = '';
    });
});

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const w = parseFloat(weight);
    const h = parseFloat(height);

    // BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared
    const bmi = w / (h ** 2);
    return parseFloat(bmi.toFixed(2));
}
