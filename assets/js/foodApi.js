
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
    $("#submitBtnFoodie").click(function (event) {
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
                    url = recipe.recipe.url;
                    kcal = Math.round(recipe.recipe.calories);
                    function createDiv(label, image, url, kcal) {
                        return `<div class="card m-3" style="width: 18rem;">
       <img src="${image}" class="card-img-top" alt="image">
       <div class="card-body">
         <h5 class="card-title h5Result">${label}</h5>
         <div class="mb-5 d-flex justify-content-around">
               <h6 class="h6Result">${kcal} kcal</h6>
         <button id='goToRecipeBtn' class="btn btn-primary" onclick="showRecipe('${url}')">View Recipe</button>
         <script>
           function showRecipe(id) {
               localStorage.setItem("id", JSON.stringify(id));
               window.open(url);
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
