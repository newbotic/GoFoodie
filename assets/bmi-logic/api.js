
$(document).ready(function() {

    //bmi
    
    // const url = 'https://fitness-calculator.p.rapidapi.com/bmi?age=25&weight=65&height=180';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
    //         'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    //     }
    // };
    
    // // async function
    // async function fetchData() {
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         console.log(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    
    // Call the async function
    // fetchData();
    
    
    
    //Daily calories endpoint
    



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
      console.log('BMR',bmr);
  } catch (error) {
      console.error(error);
  }
  }

  
  // fetchData();








});
