
// //retrieve data from local storage
// function getCaloriesFromLocalStorage() {
//   const storedData = localStorage.getItem('caloriesData');
//   return storedData ? JSON.parse(storedData) : null;//use parse to get the object
// }

// //render data to goalCaloriesDiv
// function renderCaloriesData() {
//   const caloriesData = getCaloriesFromLocalStorage();// save the return into calorieData
//   const goalCaloriesDiv = $('#goalCaloriesDiv'); 
// //update div if data and div are found
//   if (caloriesData && goalCaloriesDiv.length) {

//     //clear the previous data
//     goalCaloriesDiv.empty();

//     // create new element and append to the div
//     const bmrElement = $('<p>').text(`Basal Metabolic Rate "BMR": ${caloriesData.bmr}`);
//     const lossElement = $('<p>').text(`Calorie value for goal "Weight loss": ${caloriesData.weightLossCalories}`);
//     const gainElement = $('<p>').text(`Calorie value for goal "Weight gain": ${caloriesData.weightGainCalories}`);

//     goalCaloriesDiv.append(bmrElement);
//     goalCaloriesDiv.append(lossElement);
//     goalCaloriesDiv.append(gainElement);
//   } else {
//     console.error('No valid data found');
//   }
// }
// //
// $(document).ready(function() {

//   $('#submitBtnBmr').on('click', async function(e) {
//     e.preventDefault();
// //user input
//     const ageValue = $('#age').val();
//     const genderValue = $('#gender').val();
//     const weightValue = $('#weightInput').val();
//     const heightValue = $('#height').val();
//     const activitylevelVal = $('#activitylevel').val();
// //build API using user input
//     const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${ageValue}&gender=${genderValue}&height=${heightValue}&weight=${weightValue}&activitylevel=${activitylevelVal}`;

//     $("#urlgenerated").text(`${url}`);

//     try {
//       //fetch data from API
//       const result = await fetchData(url);

//       //save data to local storage
//       saveCaloriesToLocal(result.caloriesData);
      
//       //display data to goalCalorieDiv
//       renderCaloriesData();
//     } catch (error) {
//       console.error(error);
//     }
//   });
// //API request config
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': "b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01",
//       'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
//     }
//   };
// //use async function to get data from API
//   async function fetchData(url) {
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();

//       if (response.ok) {
//         const bmr = result.data.BMR;
//         const goals = result.data.goals;

//         console.log("API Response:", result);

//         if (bmr && goals && goals["Weight loss"] && goals["Weight gain"]) {
//           $("#bmrCard").css("display", "block");
//           const headDiv = $('<p>').text(`Calorie value for goal "weight loss": ${goals["Weight loss"]['calory']}`);

//           const displayBmr = $('<p>');
//           const displayLoss = $('<p>');
//           const displayGain = $('<p>');

//           $('#form')[0].reset();
//           $('#renderBmrDiv').empty();
//           $('#renderBmrDiv').append(displayBmr);
//           $('#renderBmrDiv').append(displayLoss);
//           $('#renderBmrDiv').append(displayGain);
//           displayBmr.text(`Basal Metabolic Rate "BMR": ${bmr}`);
//           displayLoss.text(`Calorie value for goal "Weight loss": ${goals["Weight loss"]['calory']}`);
//           displayGain.text(`Calorie value for goal "Weight gain": ${goals["Weight gain"]['calory']}`);
//           $('#calorieModal').modal('show');

//           if ($("#flexRadioLose").is(":checked")) {
//             $("#calorieValue").text(`${goals["Weight loss"]['calory']} cal`);
//           } else {
//             $("#calorieValue").text(`${goals["Weight gain"]['calory']} cal`);
//           }

//           const caloriesData = {
//             bmr: bmr,
//             weightLossCalories: goals["Weight loss"]['calory'],
//             weightGainCalories: goals["Weight gain"]['calory']
//           };

//           return { caloriesData };
//         } else {
//           console.error('Unexpected structure of data received from the API');
//           return null;
//         }
//       } else {
//         const errorMessage = await response.text();
//         console.error(`Error: ${errorMessage}`);
//         return null;
//       }
//     } catch (error) {
//       console.error(error);
//       $('#errorModal').modal('show');
//       return null;
//     }
//   }
// //save data to local storage
//   function saveCaloriesToLocal(caloriesData) {
//     if (caloriesData) {
//       //if valid data use stringify and save
//       localStorage.setItem('caloriesData', JSON.stringify(caloriesData));
//     } else {
//       //else log error
//       console.error('No valid data received from the API');
//     }
//   }

//   //event listener to trigger data rendering
//   $('#renderHistoryDataBtn').on('click', function() {
//     renderCaloriesData();
//   });

// });


// test 2-------------------------------------------



// // Retrieve data from local storage
// function getCaloriesFromLocalStorage() {
//   const storedData = localStorage.getItem('caloriesData');
//   return storedData ? JSON.parse(storedData) : null;
// }

// // Render data to goalCaloriesDiv
// function renderCaloriesData(selectedOption) {
//   const caloriesData = getCaloriesFromLocalStorage();
//   const goalCaloriesDiv = $('#goalCaloriesDiv');

//   if (caloriesData && goalCaloriesDiv.length) {
//     goalCaloriesDiv.empty();

//     const bmrElement = $('<p>').text(`Basal Metabolic Rate "BMR": ${caloriesData.bmr}`);
//     let selectedGoalElement;

//     if (selectedOption === 'Weight loss') {
//       selectedGoalElement = $('<p>').text(`Calorie value for goal "Weight loss": ${caloriesData.weightLossCalories}`);
//     } else if (selectedOption === 'Weight gain') {
//       selectedGoalElement = $('<p>').text(`Calorie value for goal "Weight gain": ${caloriesData.weightGainCalories}`);
//     }

//     goalCaloriesDiv.append(bmrElement);
//     goalCaloriesDiv.append(selectedGoalElement);
//   } else {
//     console.error('No valid data found');
//   }
// }

// $(document).ready(function () {
//   $('#submitBtnBmr').on('click', async function (e) {
//     e.preventDefault();

//     const ageValue = $('#age').val();
//     const genderValue = $('#gender').val();
//     const weightValue = $('#weightInput').val();
//     const heightValue = $('#height').val();
//     const activitylevelVal = $('#activitylevel').val();

//     const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${ageValue}&gender=${genderValue}&height=${heightValue}&weight=${weightValue}&activitylevel=${activitylevelVal}`;

//     $("#urlgenerated").text(`${url}`);

//     try {
//       const result = await fetchData(url);

//       saveCaloriesToLocal(result.caloriesData);

//       // Determine the selected option based on the checked radio button
//       const selectedOption = $("#flexRadioLose").is(":checked") ? 'Weight loss' : 'Weight gain';

//       // Display data to goalCalorieDiv for the selected option
//       renderCaloriesData(selectedOption);
//     } catch (error) {
//       console.error(error);
//     }
//   });

//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': "b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01",
//       'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
//     }
//   };

//   async function fetchData(url) {
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();

//       if (response.ok) {
//         const bmr = result.data.BMR;
//         const goals = result.data.goals;

//         console.log("API Response:", result);

//         if (bmr && goals && goals["Weight loss"] && goals["Weight gain"]) {
//           $("#bmrCard").css("display", "block");

//           const headDiv = $('<p>').text(`Calorie value for goal "weight loss": ${goals["Weight loss"]['calory']}`);
//           const displayBmr = $('<p>');
//           const displayLoss = $('<p>');
//           const displayGain = $('<p>');

//           $('#form')[0].reset();
//           $('#renderBmrDiv').empty();
//           $('#renderBmrDiv').append(displayBmr);
//           $('#renderBmrDiv').append(displayLoss);
//           $('#renderBmrDiv').append(displayGain);

//           displayBmr.text(`Basal Metabolic Rate "BMR": ${bmr}`);
//           displayLoss.text(`Calorie value for goal "Weight loss": ${goals["Weight loss"]['calory']}`);
//           displayGain.text(`Calorie value for goal "Weight gain": ${goals["Weight gain"]['calory']}`);

//           $('#calorieModal').modal('show');

//           if ($("#flexRadioLose").is(":checked")) {
//             $("#calorieValue").text(`${goals["Weight loss"]['calory']} cal`);
//           } else {
//             $("#calorieValue").text(`${goals["Weight gain"]['calory']} cal`);
//           }

//           const caloriesData = {
//             bmr: bmr,
//             weightLossCalories: goals["Weight loss"]['calory'],
//             weightGainCalories: goals["Weight gain"]['calory']
//           };

//           return { caloriesData };
//         } else {
//           console.error('Unexpected structure of data received from the API');
//           return null;
//         }
//       } else {
//         const errorMessage = await response.text();
//         console.error(`Error: ${errorMessage}`);
//         return null;
//       }
//     } catch (error) {
//       console.error(error);
//       $('#errorModal').modal('show');
//       return null;
//     }
//   }

//   function saveCaloriesToLocal(caloriesData) {
//     if (caloriesData) {
//       localStorage.setItem('caloriesData', JSON.stringify(caloriesData));
//     } else {
//       console.error('No valid data received from the API');
//     }
//   }

//   $('#renderHistoryDataBtn').on('click', function () {
//     renderCaloriesData();
//   });
// });

// -----------------------------------------------------test 3

// Retrieve data from local storage
function getCaloriesFromLocalStorage() {
  const storedData = localStorage.getItem('caloriesData');
  return storedData ? JSON.parse(storedData) : null;
}

// Render data to goalCaloriesDiv and renderBmrDiv
function renderCaloriesData(selectedOption) {
  const caloriesData = getCaloriesFromLocalStorage();
  const goalCaloriesDiv = $('#goalCaloriesDiv');
  const renderBmrDiv = $('#renderBmrDiv');

  if (caloriesData && goalCaloriesDiv.length && renderBmrDiv.length) {
    goalCaloriesDiv.empty();
    renderBmrDiv.empty();

    const bmrElement = $('<p>').text(`Basal Metabolic Rate "BMR": ${caloriesData.bmr}`);
    let selectedGoalElement;

    if (selectedOption === 'Weight loss') {
      selectedGoalElement = $('<p>').text(`Calorie value for goal "Weight loss": ${caloriesData.weightLossCalories}`);
    } else if (selectedOption === 'Weight gain') {
      selectedGoalElement = $('<p>').text(`Calorie value for goal "Weight gain": ${caloriesData.weightGainCalories}`);
    }

    goalCaloriesDiv.append(bmrElement);
    goalCaloriesDiv.append(selectedGoalElement);

    // Display both BMR and selected goal in renderBmrDiv
    const displayBmr = $('<p>').text(`Basal Metabolic Rate "BMR": ${caloriesData.bmr}`);
    const displayGoal = $('<p>').text(`Calorie value for goal "${selectedOption}": ${caloriesData[selectedOption.toLowerCase() + 'Calories']}`);

    renderBmrDiv.append(displayBmr);
    renderBmrDiv.append(displayGoal);
  } else {
    console.error('No valid data found');
  }
}

$(document).ready(function () {
  $('#submitBtnBmr').on('click', async function (e) {
    e.preventDefault();

    const ageValue = $('#age').val();
    const genderValue = $('#gender').val();
    const weightValue = $('#weightInput').val();
    const heightValue = $('#height').val();
    const activitylevelVal = $('#activitylevel').val();

    const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${ageValue}&gender=${genderValue}&height=${heightValue}&weight=${weightValue}&activitylevel=${activitylevelVal}`;

    $("#urlgenerated").text(`${url}`);

    try {
      const result = await fetchData(url);

      saveCaloriesToLocal(result.caloriesData);

      // Determine the selected option based on the checked radio button
      const selectedOption = $("#flexRadioLose").is(":checked") ? 'Weight loss' : 'Weight gain';

      // Display data to goalCalorieDiv and renderBmrDiv for the selected option
      renderCaloriesData(selectedOption);
    } catch (error) {
      console.error(error);
    }
  });

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01",
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };

  async function fetchData(url) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (response.ok) {
        const bmr = result.data.BMR;
        const goals = result.data.goals;

        console.log("API Response:", result);

        if (bmr && goals && goals["Weight loss"] && goals["Weight gain"]) {
          $("#bmrCard").css("display", "block");

          const headDiv = $('<p>').text(`Calorie value for goal "weight loss": ${goals["Weight loss"]['calory']}`);
          const displayBmr = $('<p>');
          const displayLoss = $('<p>');
          const displayGain = $('<p>');

          $('#form')[0].reset();
          $('#renderBmrDiv').empty();
          $('#renderBmrDiv').append(displayBmr);
          $('#renderBmrDiv').append(displayLoss);
          $('#renderBmrDiv').append(displayGain);

          displayBmr.text(`Basal Metabolic Rate "BMR": ${bmr}`);
          displayLoss.text(`Calorie value for goal "Weight loss": ${goals["Weight loss"]['calory']}`);
          displayGain.text(`Calorie value for goal "Weight gain": ${goals["Weight gain"]['calory']}`);

          $('#calorieModal').modal('show');

          if ($("#flexRadioLose").is(":checked")) {
            $("#calorieValue").text(`${goals["Weight loss"]['calory']} cal`);
          } else {
            $("#calorieValue").text(`${goals["Weight gain"]['calory']} cal`);
          }

          const caloriesData = {
            bmr: bmr,
            weightLossCalories: goals["Weight loss"]['calory'],
            weightGainCalories: goals["Weight gain"]['calory']
          };

          return { caloriesData };
        } else {
          console.error('Unexpected structure of data received from the API');
          return null;
        }
      } else {
        const errorMessage = await response.text();
        console.error(`Error: ${errorMessage}`);
        return null;
      }
    } catch (error) {
      console.error(error);
      $('#errorModal').modal('show');
      return null;
    }
  }

  function saveCaloriesToLocal(caloriesData) {
    if (caloriesData) {
      localStorage.setItem('caloriesData', JSON.stringify(caloriesData));
    } else {
      console.error('No valid data received from the API');
    }
  }

  $('#renderHistoryDataBtn').on('click', function () {
    // Render data without specifying the selected option (display both BMR and last selected goal)
    renderCaloriesData();
  });
});
