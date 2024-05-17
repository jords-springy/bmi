document.addEventListener('DOMContentLoaded', function() {
    const bmiField = document.getElementById('bmi');
    console.log('bmiField: ' + bmiField)
    const resultField = document.getElementById('result');
    console.log('resultField: ' + resultField) 

    console.log('DOMContentLoaded\n')
    calculate = document.getElementById('calculate1');
 
    console.log('calculate1\n')
    calculate.addEventListener('click', function() {

        resultField.value = calculateBMI(); 

        console.log('bmiField: ' + bmiField)
        console.log('resultField: ' + resultField) 

        console.log('resultField.value: ' + resultField.value + '\n')


        resultField.innerText = resultField.value 

        if (resultField.value <= 18.4)
            bmiField.innerText =  'Underweight'
        else if (resultField.value >= 18.5 && resultField.value <= 24.9)
            bmiField.innerText =  'Normal'
        else if (resultField.value >= 25 && resultField.value <= 39.9)
            bmiField.innerText =  'Overweight'
        else 
            bmiField.innerText =  'Obese'



        
    });
    
});

function calculateBMI() {

    let weight = document.getElementById('weight').value;
    console.log('weight: ' + weight + '\n')
    let height = document.getElementById('height').value;;
    console.log('height: ' + height+ '\n')

    let w = parseFloat((parseFloat(weight)).toFixed(2))
    console.log(typeof(w) + " / " + w)   
    let h = parseFloat((parseFloat(height)).toFixed(2))
    console.log(typeof(w) + " / " + h)  

    // BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared
    let bmi = w / ( h ** 2)
    console.log('bmi: ' + bmi + '\n')

    let result = parseFloat((parseFloat(bmi)).toFixed(2))
    console.log('result: ' + result + '\n')

    return result;
    
}
