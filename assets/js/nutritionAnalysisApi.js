// id      7f06b953
//Key        dbe96facd00c50131fb43f3baca8e993

//wait the DOM to load
$(document).ready(async function() {

//retrive html elements

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
                    // console.log(data)
                    let labels = Object.keys(data.totalDaily);
                    let totalFat = Object.keys(data.totalNutrientsKCal);
                    // console.log(labels)
                    console.log(totalFat);
                    let values = labels.map(key => data.totalDaily[key].quantity);

                    // Create a chart
                    createChart(labels, values);

                    // Rest of your code to display other nutrition details
                } else {
                    console.error("Error: 'totalDaily' not found in API response");
                }
            });
        });

        // document.getElementById('clear-button').addEventListener('click', function(e){
        //     e.preventDefault();
        //     titleInput.value = '';
        //     recipeInput.value = '';
        //     output.innerHTML = '';
        // });

        function createChart(labels, values) {
            var ctx = document.getElementById('myChart').getContext('2d');
            ctx.canvas.width = 100;
            ctx.canvas.height = 70;
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Nutrition Values',
                        data: values,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    })();


});

