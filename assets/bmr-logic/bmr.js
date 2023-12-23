
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
      // console.log(result);
      const bmr = result.data.BMR;
      const goals = result.data.goals;
// const dataSaved = JSON.stringify(result.data);
const dataFromApi = result.data


//Test //

fetchData();

const headDiv =$('<h3>').text(`Calory value for goal "weight loss": ${dataFromApi['goals']["Weight loss"]['calory']}`);
console.log(result.data.BMR);
console.log(`Calory value for goal " Weight loss": ${dataFromApi['goals']["Weight loss"]['calory']}`);
console.log(`Calory value for goal "Weight gain": ${dataFromApi['goals']["Weight gain"]['calory']}`);


  } catch (error){
  console.error(error);
  }// Create a string with the desired content

  }


  //modified
});
