import fetch from 'node-fetch';


// API endpoint for creating a new user
var url = "http://34.229.91.169:8000/products/"


 // Form data to be sent in the request body
 const formData = {
    title: 'Gato',
    description: 'White and Black Cat',
    price: 500,
};

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


postProduct(formData, url)