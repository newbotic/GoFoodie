$(document).ready(function() {
//13018f91

//b07af7f92a084a54b723827439125e60


//fetch using edamam website and an online tutorial
<<<<<<< HEAD:assets/js/foodApi.js
const calories = $("#calories").val();//To get the value of the input
const appId = "a45305f0";
const apiKey = "143d0f7d6fb84cad8676daa008b291cd" ;
const endpoint = "https://api.edamam.com/search";


var recipeDetails = "";
var results = $("#results");
=======
>>>>>>> go/api:assets/foodApi/foodApi.js
let label = "";
let image = "";
let uri = "";

async function fetchData() {
const caloriesRequest = $("#recipeReqCal").val();
const appId = "13018f91";
const apiKey = "b07af7f92a084a54b723827439125e60" ;
const endpoint = "https://api.edamam.com/search";

const queryURL = new URL(endpoint);
  queryURL.searchParams.append("q", caloriesRequest);
  queryURL.searchParams.append("app_id", appId);
  queryURL.searchParams.append("app_key", apiKey);

  console.log(queryURL.toString()); 


<<<<<<< HEAD:assets/js/foodApi.js
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
=======

console.log(queryURL);//to be deleted

// // var recipeDetails = "";



// $("#search-recipe").on("click", async (e)=> {   //callback function
    // e.preventDefault();


try {
    const response = await fetch(queryURL);
    const data = await response.json();
    console.log(data);
    console.log(data.hits[0].recipe)


//  Extract label, image, and uri
if (data.hits && data.hits.length > 0) {
    const firstRecipe = data.hits[0].recipe;
    label = firstRecipe.label;
    image = firstRecipe.image;
    uri = firstRecipe.uri;
    url = firstRecipe.url;

    console.log("Label:", label);
    console.log("Image:", image);
    console.log("URI:", uri);
}


} catch (error) {
    console.error("Error fetching data:", error);
}

}

$("#search-recipe").on("click", async (e) => {
    e.preventDefault();

    
    try {
        // Wait for fetchData to complete
        await fetchData();

        // Update the card content with API data
        $('#card-image').attr('src', image);
        $('#card-title').text(label);
        $('#card-text').text(`URI: ${uri}`);
        $('#card-link').attr('href', uri);
        $('#card-recipe').attr('href', url);

    } catch (error) {
        console.error("Error updating card content:", error);
    }

// -------------------
});


    
    
    
    
    
});

//------------------------

// ready ??????????
//hits[0].recipe.cuisineType    copy the property path
>>>>>>> go/api:assets/foodApi/foodApi.js
