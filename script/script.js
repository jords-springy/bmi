document.addEventListener('DOMContentLoaded', function() {
    const bmiField = document.getElementById('bmi');
    const resultField = document.getElementById('result');
    const errorField = document.getElementById('error');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculate = document.getElementById('calculate1');

    calculate.addEventListener('click', function() {
        // Clear previous error messages
        errorField.innerText = '';

        // Check if inputs are filled
        const weight = weightInput.value;
        const height = heightInput.value;

        if (!weight || !height) {
            errorField.innerText = 'You need to fill in both fields before pressing the button!';
            bmiField.innerText = '';
            resultField.innerText = '';
            return; // Exit the function if validation fails
        }

        // Calculate BMI
        const bmiResult = calculateBMI(weight, height);
        
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
        weightInput.value = '';
        heightInput.value = '';
    });
});

function calculateBMI(weight, height) {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    // Check if weight or height is not a number or less than or equal to zero
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        return 0; // Return 0 or handle error appropriately
    }

    // BMI = kg/m^2 where kg is a person's weight in kilograms and m^2 is their height in metres squared
    const bmi = w / (h ** 2);
    return parseFloat(bmi.toFixed(2));
}
