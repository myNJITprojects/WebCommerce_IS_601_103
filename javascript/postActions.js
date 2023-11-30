import fetch from 'node-fetch';

async function postProduct(product, url) {
    
  const formData = product;

  // Make a POST request using the Fetch API
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(newUserData => {
      // Process the newly created user data
      console.log('New User Data:', newUserData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


// API endpoint for creating a new product
var url = "http://34.229.91.169:8000/products/"


 // JSON for endpoint
 const formData = {
    title: 'Gato',
    description: 'White and Black Cat',
    price: 500,
};


postProduct(formData, url)