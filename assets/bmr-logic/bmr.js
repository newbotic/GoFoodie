
$(document).ready(function() {

    

//getting data from the user-----------------------------------------------------------------

// $('#submitBtn').on('click', async function(e){
// e.preventDefault();

$('#bmrForm').submit((e)=> {
  e.preventDefault();


};

// const ageValue  = $('#age').val();
// const genderValue = $('#gender').val();
// const weightValue = $('#weight').val();
// const heightValue = $('#height').val();
// const activitylevelVal = $('#activitylevel').val();


// Retrieve values from form fields
const age = $('input[placeholder="Age"]').val();
const gender = $('select[placeholder="Gender"]').val();
const weight = $('input[placeholder="Weight in kg"]').val();
const height = $('input[placeholder="Height in cm"]').val();
const activityLevel = $('select[placeholder="Activity level"]').val();

// Do something with the collected information, e.g., display it
console.log("Collected Information:");
console.log("Age:", age);
console.log("Gender:", gender);
console.log("Weight:", weight);
console.log("Height:", height);
console.log("Activity Level:", activityLevel);

// Add any further processing logic here

// Reset the form if needed
$(this).trigger("reset");
});



// console.log(ageValue)

const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${ageValue}&gender=${genderValue}&height=${heightValue}&weight=${weightValue}&activitylevel=${activitylevelVal}`;

$("#urlgenerated").text(`${url}`);

try {
  await fetchData(url);
} catch (error) {
  console.error(error);
}
// });
    // const url = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1';
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
  };
  
  async function fetchData(url){
  
  try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      const bmr = result.data.BMR;
      const goals = result.data.goals;
// const dataSaved = JSON.stringify(result.data);
const dataFromApi = result.data




fetchData();



console.log(result.data.BMR);
console.log(`Calory value for goal " Weight loss": ${dataFromApi['goals']["Weight loss"]['calory']}`);
console.log(`Calory value for goal "Weight gain": ${dataFromApi['goals']["Weight gain"]['calory']}`);


//append results to the h3 elements
// $('.bmr').text(result.data.BMR);

const resultBasal = result.data.BMR;
  const basal = $('#bmr');
  basal.append(resultBasal);

  $('#loss').text(`Calory value for goal " Weight loss": ${dataFromApi['goals']["Weight loss"]['calory']}`);
  $('#gain').text(`Calory value for goal "Weight gain": ${dataFromApi['goals']["Weight gain"]['calory']}`);
  
// Return the relevant data as object

return {
  bmr: result.data.BMR,
  goals: result.data.goals,
};


  //---------------------------------------------
  
  } catch (error){
  console.error(error);
  }

  }

//-------------------------------------

console.log(bmr);// Use the returned data outside the fetchData function

// console.log('BMR:', data.bmr);
// console.log('Goals:', data.goals);


//Function to divide calories

const divideCalories = totalCalories => {
  const breakfast = totalCalories * 0.35;
  const lunch = totalCalories * 0.45;
  const dinner = totalCalories * 0.20;

  return {
    breakfast: breakfast,
    lunch: lunch,
    dinner: dinner
  };
};


const totalCalories = bmr; // Replace with your actual total calories
const dividedCalories = divideCalories(totalCalories);

console.log('Breakfast:', dividedCalories.breakfast);
console.log('Lunch:', dividedCalories.lunch);
console.log('Dinner:', dividedCalories.dinner);















//document ready


// });


//-------------------------------------------------------------------------



