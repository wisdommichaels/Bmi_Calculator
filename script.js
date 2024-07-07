// BMI FORMULA = WEIGHT(KG) / HIGHT (MS)

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid weight and height`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight and height`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        results.innerHTML = `${bmi}`;
    }
});
// function bmiCalculator(weight, height) {
//     let bmi = weight/ Math.pow(height, 2);
//     return Math.round(bmi);
    
// }

// console.log(bmiCalculator(65, 1.8));