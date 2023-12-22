    //bmi
    
    const url = 'https://fitness-calculator.p.rapidapi.com/bmi?age=25&weight=65&height=180';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b89d513c8emshbd8c807ed2a518ap13c15cjsnf49cf221aa01',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };
    
    // async function
    async function fetchData() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    
    Call the async function
    fetchData();
    
    
    
