import fetch from 'node-fetch';

async function postProduct(product, url) {

    try{
        // Make a POST request using the Fetch API
        const response = await fetch(
            url, 
            { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(product)
            }
        );

        const data = await response.json(); 
        console.log(data);

    } catch(error){
        console.error("Error POSTing products:", error);
    }

    
}


// API endpoint for creating a new product
var url = "http://34.229.91.169:8000/products/"


 // JSON for endpoint
 const formData = {
    title: 'Gato2',
    description: 'White and Black Cat',
    price: 600,
};


postProduct(formData, url)