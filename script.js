// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
// 		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

async function fetchData() {
	const url = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1';
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log(result);
	} catch (error) {
	  console.error(error);
	}
  }
  
//   fetchData();

  const settings = {
	async: true,
	crossDomain: true,
	url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=150&height=1.83',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
		'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});