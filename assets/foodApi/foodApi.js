
//13018f91

//b07af7f92a084a54b723827439125e60


//fetch using edamam website and an online tutorial
const calories = $("#calories");
const appId = "13018f91";
const apiKey = "b07af7f92a084a54b723827439125e60" ;
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


$(".Submit").on("submit", function (){
    console.log(queryURL);
})

//?????? async ????????

fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // Check if 'hits' array exists in 'data'
        if (data.hits && Array.isArray(data.hits)) {
            // Access the first element of the 'hits' array
            const firstRecipe = data.hits[0];
            if (firstRecipe && firstRecipe.recipe) {
                console.log(firstRecipe.recipe);
            } else {
                console.error("Invalid data 'recipe'  not found");
            }
        } else {
            console.error("Invalid data ");
        }
    })
    .catch(function(error){
        console.error("Error fetching data:", error);
    });



    //------------------------

