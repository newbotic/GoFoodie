
$(document).ready(function() {




$('#submitBtn').on('click', async function(e){
e.preventDefault();


const ageValue  = $('#age').val();
const genderValue = $('#gender').val();
const weightValue = $('#weight').val();
const heightValue = $('#height').val();
const activitylevelVal = $('#activitylevel').val();
// console.log(ageValue)

const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${ageValue}&gender=${genderValue}&height=${heightValue}&weight=${weightValue}&activitylevel=${activitylevelVal}`;

$("#urlgenerated").text(`${url}`);

try {
  await fetchData(url);
} catch (error) {
  console.error(error);
}
});
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
      console.log(result);
      const bmr = result.data.BMR;
      const goals = result.data.goals;
      
// const dataSaved = JSON.stringify(result.data);
const dataFromApi = result.data


//Test 

console.log(`Calory value for goal "Mild weight loss": ${dataFromApi['goals']["Mild weight loss"]['calory']}`);





// Callback function to create and append buttons with the calorie value


function renderCalories(calorieValue) {
  const renderContainerDiv = $("#renderCaloriesDiv");

  // Create a button element


  const buttonElement = $("<button>").text(`Calorie Value: ${calorieValue}`).click(function() {
      // Action when the button is clicked (you can customize this)
     
      alert(`Button Clicked! Calorie Value: ${calorieValue}`);
    });

  // Append the button to the result container
  renderContainerDiv.append(buttonElement);









const h2Element = $('<h2>').text(`Calory value for goal "Mild weight loss": ${dataFromApi['goals']["Mild weight loss"]['calory']}`);


// localStorage.setItem('dataFromApi',dataSaved);
      console.log('BMR',bmr);
      // console.log('Goals',goals);
  } catch (error) {
      console.error(error);
  }
  }

  
  // fetchData();








});
