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

