import fetch from 'node-fetch';

var url = "http://34.229.91.169:8000/products/"

async function fetchProducts(url) {
    try {
      const response = await fetch(url); // Replace 'raspberrypi' with the hostname or IP address of your Raspberry Pi and 'port' with the port number of the API endpoint
      const data = await response.json();
      console.log(data); // The products data will be available in the 'data' variable
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  
  fetchProducts(url);
  