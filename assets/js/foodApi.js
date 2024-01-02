

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
$(document).ready(function () {

    //set variables
    localStorage.setItem("app_id", "1f05a08d");
    localStorage.setItem("app_key", "a614fb15c7618687c8cd2382d7a980a9");
    localStorage.setItem("endpoint", "https://api.edamam.com/search");

    var recipeDiv = "";
    var results = $("#results");
    var label = "";
    var image = "";
    var uri = "";

    // event listener to click on search button
    $("#submitBtn").click(function (event) {
        event.preventDefault();
        console.log("submit!");

        const maxKcal = $("#calories").val();
        console.log(maxKcal)

        const appId = "a45305f0";
        const apiKey = "143d0f7d6fb84cad8676daa008b291cd";
        const endpoint = "https://api.edamam.com/search";


        // set parameters to build the URL (understand how to look for a kcal range)
        const queryURL = new URL(endpoint);
        queryURL.searchParams.append("q", maxKcal);
        queryURL.searchParams.append("app_id", appId);
        queryURL.searchParams.append("app_key", apiKey);
        console.log(queryURL.toString());

        //fetch from edamam API
        fetch(queryURL)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                console.log(data.hits[0].recipe.calories)
                // dynamicall create html element for each recipe result
                data.hits.forEach((recipe) => {
                    ingredients = recipe.recipe.ingredientLines
                    label = recipe.recipe.label;
                    image = recipe.recipe.image;
                    uri = recipe.recipe.uri;
                    kcal = Math.round(recipe.recipe.calories);
                    function createDiv(label, image, uri, kcal) {
                        return `<div class="card m-3" style="width: 18rem;">
       <img src="${image}" class="card-img-top" alt="image">
       <div class="card-body">
         <h5 class="card-title">${label}</h5>
         <div class="mb-5 d-flex justify-content-around">
               <h3>${kcal}</h3>

         <button id='goToRecipe' class="btn btn-primary" onclick="showRecipe('${uri}')">View Recipe</button>
         <script>
           function showRecipe(id) {
               localStorage.setItem("id", JSON.stringify(id));
               window.location.href = "recipe.html";
               console.log(id)
           };
         </script>
       </div>
       </div>`
                    }

                    recipeDiv += createDiv(label, image, uri, kcal);

                    results.append(recipeDiv);
                })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            });


        })});


        //set in local storage the object
        //parse the img, url