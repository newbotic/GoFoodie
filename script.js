const url = 'https://calorie-calculator.p.rapidapi.com/caloriecalculator.php?age=%3CREQUIRED%3E&height=%3CREQUIRED%3E&weight=%3CREQUIRED%3E';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99dbda37d96msh1471e305a8ee189p1d18edjsnfffbc77cdec0',
		'X-RapidAPI-Host': 'calorie-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}