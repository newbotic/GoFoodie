//save user choice in local storage( from: gain weight, lose weight, mantain weight)
// localStorage.setItem("userChoice", value);
// localStorage.getItem("userChoice",value);
// event listener to user research
$("#submitBtn").click(function(event){
    event.preventDefault();
    console.log("submit!");

const maxKcal = $("#calories").val();
console.log(maxKcal)

const appId = "a45305f0";
const apiKey = "143d0f7d6fb84cad8676daa008b291cd" ;
const endpoint = "https://api.edamam.com/search";


var recipeDetails = "";
var results = $("#results");
let label = "";
let image = "";
let uri = "";

// set parameters to build the URL
const queryURL = new URL(endpoint);
queryURL.searchParams.append("q", maxKcal);
queryURL.searchParams.append("app_id", appId);
queryURL.searchParams.append("app_key", apiKey);
 console.log(queryURL);

 fetch(queryURL)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data);
        console.log(data.hits[0].recipe.calories)
    //! how do Input a kcal range in my fetch API??
        data.hits.forEach((recipe) => {
            label = recipe.recipe.label;
            image = recipe.recipe.image;
            uri = recipe.recipe.uri;  

                        
        });
        results.innerHTML = recipeDetails;
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// when user click on a recipe card, the card will expand or will link the user to the website where to find the recipe
//     localStorage.setItem("id", id);
// }
})
//fetch using rapidApi

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies',
// 	method: 'GET',
// 	headers: {
// 		'Accept-Language': 'en',
// 		'X-RapidAPI-Key': 'fcbbbc350fmshb87a02ecb446045p1cc7bejsn539be2ee3868',
// 		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });




//fetch using edamam website and an online tutorial
const calories = $("#calories").val();//To get the value of the input
const appId = "a45305f0";
const apiKey = "143d0f7d6fb84cad8676daa008b291cd" ;
const endpoint = "https://api.edamam.com/search";


var recipeDetails = "";
var results = $("#results");
let label = "";
let image = "";
let uri = "";

const queryURL = new URL(endpoint);
queryURL.searchParams.append("q", calories);
queryURL.searchParams.append("app_id", appId);
queryURL.searchParams.append("app_key", apiKey);


$(".Submit").on("submit", function (event){
    event.preventDefault();
    console.log(queryURL);
})

fetch(queryURL)
    .then(function(response){
        return response.json();
    }).then (function(data){
        console.log(data);
        // console.log(data.hits[0].recipe)
    })