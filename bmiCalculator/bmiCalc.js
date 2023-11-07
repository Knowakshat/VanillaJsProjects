const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results")
    if((height === '') || (height < 0) || (isNaN(height))){
        result.innerHTML = `Enter a valid Height`;
    }
    else if((weight === '') || (weight < 0) || (isNaN(weight))){
        result.innerHTML = `Enter a valid Weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>Your BMI is ${bmi} and </span>`;
        if(bmi <18.6){
            result.innerHTML += ` You are Underweight`;
        }else if(bmi>18.6 && bmi<24.9){
            result.innerHTML += ` You have a normal Weight`;
        } else{
            result.innerHTML += ` You are overweight fatty!`;
        }
      }
})


