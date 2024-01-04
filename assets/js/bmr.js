
// $(document).ready(function() {

    
//   // require('dotenv').config();
  
  
//     $('#submitBtnBmr').on('click', async function(e){
//     e.preventDefault();
    
    
//     const ageValue  = $('#age').val();
//     const genderValue = $('#gender').val();
//     const weightValue = $('#weightInput').val();
//     const heightValue = $('#height').val();
//     const activitylevelVal = $('#activitylevel').val();
//     // console.log(ageValue)
    
//     const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${ageValue}&gender=${genderValue}&height=${heightValue}&weight=${weightValue}&activitylevel=${activitylevelVal}`;
    
//     $("#urlgenerated").text(`${url}`);
    
//     try {
//       await fetchData(url);
//     } catch (error) {
//       console.error(error);
//     }
//     });
//         // const url = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1';
//         const options = {
//           method: 'GET',
//           headers: {
//               'X-RapidAPI-Key': "b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01",
//               'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
//           }
//       };
      
    
//       async function fetchData(url) {
//         try {
//           const response = await fetch(url, options);
//           const result = await response.json();
      
//           if (response.ok) {
//             const bmr = result.data.BMR;
//             const goals = result.data.goals;
      
//             const dataFromApi = result.data;
      
//             // Display the results or perform further processing
  
//             console.log(dataFromApi);
//             $("#bmrCard").css("display","block")
//             const headDiv = $('<p>').text(`Calorie value for goal "weight loss": ${goals["Weight loss"]['calory']}`);
//             console.log(`Calorie value for goal "Weight loss": ${goals["Weight loss"]['calory']}`);
//             console.log(`Calorie value for goal "Weight gain": ${goals["Weight gain"]['calory']}`);
            
//             //generate a p and render data
//             const displayBmr = $('<p>');
//             const displayLoss = $('<p>');
//             const displayGain = $('<p>');

//               //Clear form
//             $('#form')[0].reset()
//             $('#renderBmrDiv').empty()
//             $('#renderBmrDiv').append(displayBmr);
//             $('#renderBmrDiv').append(displayLoss);
//             $('#renderBmrDiv').append(displayGain);
//             displayBmr.text(`Basal Metabolic Rate "BMR": ${bmr}`);
//             displayLoss.text(`Calorie value for goal "Weight loss": ${goals["Weight loss"]['calory']}`);
//             displayGain.text(`Calorie value for goal "Weight gain": ${goals["Weight gain"]['calory']}`);
//             $('#calorieModal').modal('show');  
//             if ($("#flexRadioLose").is(":checked")) {
//             $("#calorieValue").text(`${goals["Weight loss"]['calory']} cal`)
//             }
//             else {
//               $("#calorieValue").text(`${goals["Weight gain"]['calory']} cal`)

//             }

//           } else {
//     // Handle non-successful response 
//     const errorMessage = await response.text();
//     console.error(`Error: ${errorMessage}`);
//   }
  
//         } catch (error) {
//           console.error(error);
//           $('#errorModal').modal('show');
//         }
//       }
      
//     });
  
  
    //goals["Extreme weight gain"].calory

    // save data to local storage
    // let calorieGoal= $("#calorieValue").val()
    // let storedCalories = localStorage.setItem("Calorie", JSON.stringify(calorieGoal))
    



// Function to get calories data from local storage

$(document).ready(function() {
function getCaloriesFromLocalStorage() {
  const storedData = localStorage.getItem('caloriesData');
  return storedData ? JSON.parse(storedData) : null;
}

// Function to render calories data to goalCaloriesDiv
function renderCaloriesData() {
  const caloriesData = getCaloriesFromLocalStorage();
  const goalCaloriesDiv = $('#goalCaloriesDiv');

  if (caloriesData) {
    goalCaloriesDiv.empty();

    const bmrElement = $('<p>').text(`Basal Metabolic Rate "BMR": ${caloriesData.bmr}`);
    const gainOrLoss = $('<p>');

    if (caloriesData.weightLoss) {
      gainOrLoss.text(`Calorie value for goal "Weight loss": ${caloriesData.weightLossCalories} cal`);
    } else {
      gainOrLoss.text(`Calorie value for goal "Weight gain": ${caloriesData.weightGainCalories} cal`);
    }

    goalCaloriesDiv.append(bmrElement);
    goalCaloriesDiv.append(gainOrLoss);
  } else {
    console.error('No valid data found');
  }
}

// Document ready event handler
$(document).ready(function () {

  // Submit button click event handler
  $('#submitBtnBmr').on('click', async function (e) {
    e.preventDefault();

    // Get user input
    const ageValue = $('#age').val();
    const genderValue = $('#gender').val();
    const weightValue = $('#weightInput').val();
    const heightValue = $('#height').val();
    const activitylevelVal = $('#activitylevel').val();

    // Build API URL using user input
    const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${ageValue}&gender=${genderValue}&height=${heightValue}&weight=${weightValue}&activitylevel=${activitylevelVal}`;

    $("#urlgenerated").text(`${url}`);

    try {
      // Fetch data from API
      const result = await fetchData(url);

      // Display data to goalCalorieDiv
      renderCaloriesData();
    } catch (error) {
      console.error(error);
    }
  });

  // API request configuration
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01",
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };

  // Async function to fetch data from API
  async function fetchData(url) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (response.ok) {
        const bmr = result.data.BMR;
        const goals = result.data.goals;

        if (bmr && goals && goals["Weight loss"] && goals["Weight gain"]) {
          $("#bmrCard").css("display", "block");

          const caloriesData = {
            bmr: bmr,
            weightLoss: $("#flexRadioLose").is(":checked"),
            weightLossCalories: goals["Weight loss"]['calory'],
            weightGainCalories: goals["Weight gain"]['calory']
          };

          console.log("API Response:", result);

          const displayBmr = $('<p>').text(`Basal Metabolic Rate "BMR": ${bmr}`);
          const calorieValue = $('<p>');

          $('#form')[0].reset();
          $('#renderBmrDiv').empty();
          $('#renderBmrDiv').append(displayBmr);
          $('#renderBmrDiv').append(calorieValue);

          $('#calorieModal').modal('show');

          if (caloriesData.weightLoss) {
            calorieValue.text(`Calorie value for goal "Weight loss": ${caloriesData.weightLossCalories} cal`);
            $('#calorieValue').text(`Calorie value for goal "Weight loss": ${caloriesData.weightLossCalories} cal`);
          } else {
            calorieValue.text(`Calorie value for goal "Weight gain": ${caloriesData.weightGainCalories} cal`);
            $('#calorieValue').text(`Calorie value for goal "Weight gain": ${caloriesData.weightGainCalories} cal`);
          }

          // Save data to local storage
          saveCaloriesToLocal(caloriesData);

          return { caloriesData };
        } else {
          console.error('Unexpecteddata received from the API');
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

  // Function to save data to local storage
  function saveCaloriesToLocal(caloriesData) {
    if (caloriesData) {
      localStorage.setItem('caloriesData', JSON.stringify(caloriesData));
    } else {
      console.error('No valid data received from the API');
    }
  }

  // Event listener to trigger data rendering
  $('#renderHistoryDataBtn').on('click', function () {
    renderCaloriesData();
  });

});
});