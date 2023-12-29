

//save array  start
function save() {
  var new_data = document.getElementById('weightInput').value;
  console.log('New data:', new_data);

  // if nothing saved then save an empty array
  if (localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
  }

  // old data push new data
  var old_data = JSON.parse(localStorage.getItem('data'));
  console.log('Old data:', old_data);

  old_data.push(new_data);
  // save the old and new data to local storage
  localStorage.setItem('data', JSON.stringify(old_data));
}


//save array end

//save an object start
let myObj = {
  name:'Adi',
  age:50
};
let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem('myObj', myObj_serialized);
// console.log(localStorage);
let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));
console.log(myObj_deserialized);

// save an object end


$(document).ready(function () {
  $("#submitActivity").on("click", async function (e) {
    e.preventDefault();
    const activityVal = $("#activity").val();
    const weightInKg = $("#weightKg").val();
    function transformPound() {
      return weightInKg * 2.2;
    }
    const weightPound = transformPound();
	

    const durationActivity = $("#durationHour").val();


    const url = `https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=${activityVal}&weight=${weightPound}&duration=${durationActivity}`;
	console.log(url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01",
        "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
	  console.log(result[0]);
	  const displayCal = $('<p>');
	  displayCal.text(`Calories Burned: ${result[0]["calories_per_hour"]}`);
	  $('#caloriesBurnedDiv').append(displayCal);

    } catch (error) {
      console.error(error);
    }
  });



//get data from input 



});
