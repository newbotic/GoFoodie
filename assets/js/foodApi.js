$(document).ready(function () {

    var recipeDiv = "";
    var results = $("#results");
    var label = "";
    var image = "";
    var uri = "";
    // event listener to click on search button
    $("#submitBtnFoodie").on('click',function (event) {
        event.preventDefault();
        console.log("submit!");
        const ingredient = $("#ingredient").val();
        const maxKcal = $("#calories").val();
        console.log(maxKcal)
        const appId = "a45305f0";
        const apiKey = "143d0f7d6fb84cad8676daa008b291cd";
        const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${appId}&app_key=${apiKey}&calories=100-${maxKcal}`;
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data.hits)
                for(let i = 0; i < 5; i++) {
                    console.log(data.hits)
                    label = data.hits[i].recipe.label;
                    // console.log(label)
                    image = data.hits[i].recipe.image;
                    url = data.hits[i].recipe.url;
                    // console.log(url)
                    kcal = Math.round(data.hits[i].recipe.calories);
                    servings = data.hits[i].recipe.yield;
                    caloriePortion = kcal/servings
                                        
                    function createDiv(label, image, url, caloriePortion) {
                        return `<div class="card m-3" style="width: 18rem;">
       <img src="${image}" class="card-img-top" alt="image">
       <div class="card-body">
         <h5 class="card-title h5Result">${label}</h5>
         <div class="mb-5 d-flex justify-content-around">
               <h6 class="h6Result">${caloriePortion} kcal</h6>
         <button id='goToRecipeBtn' data-url=${url} class="btn btn-primary">View Recipe</button>
       </div>
       </div>`
                }
                recipeDiv= createDiv(label, image, url, caloriePortion)
                results.prepend(recipeDiv);
                $("[data-url]").on('click', function(event){
                    console.log(event.target.dataset)
                    window.open(event.target.dataset.url)

                
                })
                }
            })
            .catch(err => console.log(err))
    })
})


// $(document).ready(function () {

//     // let bmr= JSON.parse(localStorage.getItem("storedCalories"));
//     // console.log(bmr);
//     //set variables
//     // localStorage.setItem("app_id", "1f05a08d");
//     // localStorage.setItem("app_key", "a614fb15c7618687c8cd2382d7a980a9");
//     // localStorage.setItem("endpoint", "https://api.edamam.com/search");

//     var recipeDiv = "";
//     var results = $("#results");
//     var label = "";
//     var image = "";
//     var uri = "";

//     // event listener to click on search button
//     $("#submitBtnFoodie").click(function (event) {
//         event.preventDefault();
//         // console.log("submit!");

//         const maxKcal = $("#calories").val();
//         // console.log(maxKcal)

//         const appId = "a45305f0";
//         const apiKey = "143d0f7d6fb84cad8676daa008b291cd";
//         const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${apiKey}&calories=100-${maxKcal}`;


//         // set parameters to build the URL (understand how to look for a kcal range)
//         // const queryURL = new URL(endpoint);
//         // queryURL.searchParams.append("q", maxKcal);
//         // queryURL.searchParams.append("app_id", appId);
//         // queryURL.searchParams.append("app_key", apiKey);
//         // console.log(queryURL.toString());

//         //fetch from edamam API
//         fetch(endpoint)
//             .then(function (response) {
//                 return response.json();
//             }).then(function (data) {
//                 // console.log(data.hits);
//                 // console.log(data.hits[0].recipe.calories)
//                 // dynamicall create html element for each recipe result
//                 for( let i=0; i>5; i++) {
//                     console.log(data.hits[i]);
//                     label = data.hits[i].recipe.label;
//                     console.log(label)
//                     image = data.hits[i].recipe.image;
//                     url = data.hits[i].recipe.url;
//                     kcal = Math.round(data.hits[i].recipe.calories);
//                     servings = data.hits[i].recipe.yield;
//                     caloriePortion = kcal/servings
//                     function createDiv(label, image, url, caloriePortion) {
//                         return `<div class="card m-3" style="width: 18rem;">
//        <img src="${image}" class="card-img-top" alt="image">
//        <div class="card-body">
//          <h5 class="card-title h5Result">${label}</h5>
//          <div class="mb-5 d-flex justify-content-around">
//                <h6 class="h6Result">${caloriePortion} kcal</h6>
//          <button id='goToRecipeBtn' class="btn btn-primary" onclick="showRecipe('${url}')">View Recipe</button>
//          <script>
//            function showRecipe(id) {
//                localStorage.setItem("id", JSON.stringify(id));
//                window.open(url);
//                console.log(id)
//            };
//          </script>
//        </div>
//        </div>`
//                     }

//                     recipeDiv += createDiv(label, image, uri, kcal);

//                     results.append(recipeDiv);
//                 }})
//                     .catch((error) => {
//                         console.error("Error:", error);
//                     })
//                 })

//                 })
