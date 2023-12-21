
// async function fetchData() {
// 	const url = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1';
// 	const options = {
// 	  method: 'GET',
// 	  headers: {
// 		'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
// 		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
// 	  }
// 	};
  
// 	try {
// 	  const response = await fetch(url, options);
// 	  const result = await response.json();
// 	  console.log(result);
// 	} catch (error) {
// 	  console.error(error);
// 	}
//   }
  
//   fetchData();

//   const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=150&height=1.83',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b3562c4c1dmshc0b7700a9473456p18b30ejsn9e3240b972fe',
// 		'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });




const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}