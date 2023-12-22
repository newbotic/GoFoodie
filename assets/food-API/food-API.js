
//fetch using rapidApi

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies',
	method: 'GET',
	headers: {
		'Accept-Language': 'en',
		'X-RapidAPI-Key': 'fcbbbc350fmshb87a02ecb446045p1cc7bejsn539be2ee3868',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});



//fetch using edamam website and an online tutorial
// localStorage.setItem("app_id", "a45305f0");
// localStorage.setItem("app_key", "143d0f7d6fb84cad8676daa008b291cd");
// localStorage.setItem("endpoint", "https://api.edamam.com/search");

// function getRecipies() {
//   const ingredient = document.getElementById("ingredient").value;
//   const app_id = localStorage.getItem("app_id");
//   const app_key = localStorage.getItem("app_key");
//   const endpoint = localStorage.getItem("endpoint");
//   var recipedetails = "";
//   var results = document.getElementById("results");
//   let label = "";
//   let image = "";
//   let uri = "";



//   // Create the URL with query parameters
//   const queryUrl = new URL(endpoint);
//   queryUrl.searchParams.append("q", ingredient);
//   queryUrl.searchParams.append("app_id", app_id);
//   queryUrl.searchParams.append("app_key", app_key);

//   // Make the API request using the fetch function
//   fetch(queryUrl)
//     .then((response) => {
//         console.log(response);
//       // Check if the request was successful
//       if (response.status === 200) {
//         // Hide the loading element
//         return response.json(); // Parse the JSON response
       
//       } else {
//         throw new Error(`Request failed with status code ${response.status}`);
//       }
//     })
//     .then((data) => {
//         console.log(data)
//       // Process the recipe data (it may contain multiple recipes)
//       data.hits.forEach((recipe) => {
//         label = recipe.recipe.label;
//         image = recipe.recipe.image;
//         uri = recipe.recipe.uri;
//         recipedetails += `<div class="card m-3" style="width: 18rem;">
//         <img src="${image}" class="card-img-top" alt="image">
//         <div class="card-body">
//           <h5 class="card-title">${label}</h5>
//           <button class="btn btn-warning" onclick="showRecipe('${uri}')">View Recipe</button>
//         </div>
//       </div>`;
//       });
//       results.innerHTML = recipedetails;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// function showRecipe(id) {
//   localStorage.setItem("id", id);
//   window.location.href = "recipe.html";
// }