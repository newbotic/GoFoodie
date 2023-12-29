// id      7f06b953
//Key        dbe96facd00c50131fb43f3baca8e993


$(document).ready(async function() {


(function(){
    const titleInput = document.getElementById('title');
    const recipeInput = document.getElementById('recipe');
    const output = document.getElementById('output');
    const appId = '7f06b953';
    const apiKey = 'dbe96facd00c50131fb43f3baca8e993';

function fetchRecipe(){
    let title = titleInput.value;
    let ingr = recipeInput.value.split('\n');

    return fetch(`https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${apiKey}`, {
        method: 'POST',
        cache: 'no-cache',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, ingr})
    }).then(response => response.json());

}



    document.getElementById('recipe-check-form').addEventListener('submit', function(e){
        e.preventDefault();


    fetchRecipe().then(data => {
        if (data.totalDaily) {
            let fragments = [];
            Object.keys(data.totalDaily).forEach(key => {
                let obj = data.totalDaily[key];
                fragments.push(`<dt>${obj.label}</dt><dd>${obj.quantity}${obj.unit}</dd>`);
            });

            let html = `<dl>
                <dt>Calories</dt>
                <dd>${data.calories}</dd>
                ${fragments.join('')}
                </dl>`;

            output.innerHTML = html;
        } else {
            console.error("Error: 'totalDaily' not found in API response");
        }
    });
});
}) ();

});