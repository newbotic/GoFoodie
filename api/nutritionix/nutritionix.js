
// https://developer.syndigo.com/docs/natural-language-for-nutrients


$(document).ready(function() {


	function generateInput(type, name, placeholder) {
	  var inputElement = $('<input>').attr({
		'type': type,
		'name': name,
		'placeholder': placeholder
	  });

	  return inputElement;
	}

// ---------------------------------

function naturalLanguageForNutrients(query){
var url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
var headers = {
  'Content-Type': 'application/json',
  'x-app-id': '3231e20a', 
  'x-app-key': '1099567b2d68a5ca3dc414335fb76cfc' 
};

var data = {
  query: query

};

fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
    // .then(data => renderData())
  .catch(error => console.error('Error:', error));
};

//----------------------------------------

var form = $('<form>');

      var queryInput = generateInput('text', 'query', 'Enter your query');
      var submitButton = $('<button>').text('Search');

      form.append(queryInput);
      form.append(submitButton);

      // Append the form to an element with id 'app'
      $('#foodDiv').append(form);


// ----------------------------------------------------------
function renderData(data) {
	let foods ='';
	var resultDiv = $('<div>').attr('id', 'result');

	if (data && data.foods && data.foods.length > 0) {
	  resultDiv.append($('<p>').text('Calories: ' + data));

	} else {
	  resultDiv.append($('<p>').text('No results found.'));
	}
  
	// Append the result div to an element with id 'app'
	$('#foodDiv').append(resultDiv);
  }



	// resultDiv.append($('<p>').text('Protein: ' + data.protein));
	// resultDiv.append($('<p>').text('Carbs: ' + data.carbs));
	// resultDiv.append($('<p>').text('Fat: ' + data.fat));

  

      // Attach event listener to the form

      form.on('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        var enteredQuery = queryInput.val();
        naturalLanguageForNutrients(enteredQuery);
      });

    });


// ---------------------------------------------------------------------------------------------













// https://developer.syndigo.com/docs/instant-endpoint

// function instantEndpoint() {
// 	var url = 'https://trackapi.nutritionix.com/v2/search/instant/?query=hamburger';
// 	var headers = {
// 	  'Content-Type': 'application/json',
// 	  'x-app-id': '3231e20a',
// 	  'x-app-key': '1099567b2d68a5ca3dc414335fb76cfc' 
// 	};
  
// 	fetch(url, {
// 	  method: 'GET',
// 	  headers: headers
// 	})
// 	  .then(response => {
// 		if (!response.ok) {
// 		  throw new Error('Network response was not ok');
// 		}
// 		return response.json();
// 	  })
// 	  .then(data => {
// 		console.log(data);
// 	  })
// 	  .catch(error => {
// 		console.error('Error:', error);
// 	  });
//   }
  
//   instantEndpoint();

// -------------------------------------------------------------------------------------------------------


  
//https://developer.syndigo.com/docs/search-item-endpoint

// function searchItemEndpoint() {
// 	var url = 'https://trackapi.nutritionix.com/v2/search/item/?upc=49000000450';
// 	var headers = {
// 	  'Content-Type': 'application/x-www-form-urlencoded',
// 	  'x-app-id': '3231e20a', 
// 	  'x-app-key': '1099567b2d68a5ca3dc414335fb76cfc' 
// 		};
  
// 	fetch(url, {
// 	  method: 'GET',
// 	  headers: headers
// 	})
// 	  .then(response => {
// 		if (!response.ok) {
// 		  throw new Error('Network response was not ok');
// 		}
// 		return response.json();
// 	  })
// 	  .then(data => {
// 		console.log(data);
// 	  })
// 	  .catch(error => {
// 		console.error('Error:', error);
// 	  });
//   }
  
//   searchItemEndpoint();
  


// // ---------------------------------------------------------------------------------------------------------------------
