
// https://developer.syndigo.com/docs/natural-language-for-nutrients

function naturalLanguageForNutrients(){
var url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
var headers = {
  'Content-Type': 'application/json',
  'x-app-id': '3231e20a', 
  'x-app-key': '1099567b2d68a5ca3dc414335fb76cfc' 
};

var data = {
  query: 'apple',

};

fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
};


// naturalLanguageForNutrients();

// ---------------------------------------------------------------------------------------------


https://developer.syndigo.com/docs/instant-endpoint

function instantEndpoint() {
	var url = 'https://trackapi.nutritionix.com/v2/search/instant/?query=hamburger';
	var headers = {
	  'Content-Type': 'application/json',
	  'x-app-id': '3231e20a',
	  'x-app-key': '1099567b2d68a5ca3dc414335fb76cfc' 
	};
  
	fetch(url, {
	  method: 'GET',
	  headers: headers
	})
	  .then(response => {
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
		return response.json();
	  })
	  .then(data => {
		console.log(data);
	  })
	  .catch(error => {
		console.error('Error:', error);
	  });
  }
  
//   instantEndpoint();

// -------------------------------------------------------------------------------------------------------


  
//https://developer.syndigo.com/docs/search-item-endpoint

function searchItemEndpoint() {
	var url = 'https://trackapi.nutritionix.com/v2/search/item/?upc=49000000450';
	var headers = {
	  'Content-Type': 'application/x-www-form-urlencoded',
	  'x-app-id': '3231e20a', 
	  'x-app-key': '1099567b2d68a5ca3dc414335fb76cfc' 
		};
  
	fetch(url, {
	  method: 'GET',
	  headers: headers
	})
	  .then(response => {
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
		return response.json();
	  })
	  .then(data => {
		console.log(data);
	  })
	  .catch(error => {
		console.error('Error:', error);
	  });
  }
  
//   searchItemEndpoint();
  


// ---------------------------------------------------------------------------------------------------------------------
