

// $(document).ready(function() {
// //13018f91

// //b07af7f92a084a54b723827439125e60


// //fetch using edamam website and an online tutorial
// let label = "";
// let image = "";
// let uri = "";
// let url = "";

// async function fetchData() {
// const caloriesRequest = $("#recipeReqCal").val();
// const appId = "13018f91";
// const apiKey = "b07af7f92a084a54b723827439125e60" ;
// const endpoint = "https://api.edamam.com/search";

// const queryURL = new URL(endpoint);
//   queryURL.searchParams.append("q", caloriesRequest);
//   queryURL.searchParams.append("app_id", appId);
//   queryURL.searchParams.append("app_key", apiKey);

//   console.log(queryURL.toString()); 



// console.log(queryURL);//to be deleted

// // // var recipeDetails = "";





// try {
//     const response = await fetch(queryURL);
//     const data = await response.json();
//     console.log(data);
//     console.log(data.hits[0].recipe)
// // ----------------------

  
  

// // ----------------------------
// //  Extract label, image, and uri, url
// if (data.hits && data.hits.length > 0) {
//     const firstRecipe = data.hits[0].recipe;
//     label = firstRecipe.label;
//     image = firstRecipe.image;
//     uri = firstRecipe.uri;
//     url = firstRecipe.url;

//     console.log("Label:", label);
//     console.log("Image:", image);
//     console.log("URI:", uri);
// }


// } catch (error) {
//     console.error("Error fetching data:", error);
// }

// }

// $("#search-recipe").on("click", async (e) => {
//     e.preventDefault();

    
//     try {
//         // Wait for fetchData to complete
//         await fetchData();

//         // Update the card content with API data
//         $('#card-image').attr('src', image);
//         $('#card-title').text(label);
//         $('#card-text').text(`URI: ${uri}`);
//         $('#card-link').attr('href', uri);
//         $('#card-recipe').attr('href', url);

//     } catch (error) {
//         console.error("Error updating card content:", error);
//     }

// // -------------------
// });


    
    
    
    
    
// });

// //------------------------

// // ready ??????????hits[0].recipe.digest
// //hits[0].recipe.cuisineType    copy the property path
$(document).ready(function() {

    //set variables
    localStorage.setItem("app_id", "1f05a08d");
    localStorage.setItem("app_key", "a614fb15c7618687c8cd2382d7a980a9");
    localStorage.setItem("endpoint", "https://api.edamam.com/search");
    
    var recipeDiv = "";
    var results = $("#results");
    var label = "";
    var image = "";
    var uri = "";