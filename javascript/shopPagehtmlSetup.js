const navBarCode = `
<div class="NavB">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <!-- Image Logo -->
            <a class="navbar-brand" href="#" style="color: blueviolet;">
                <img src="./img/icons8-sweater-64.png" width="30" height="30" alt="Your Logo">
                CozyGo
            </a>

            <!-- Clickable Menu -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contact_page.html">Contact</a>
                    </li>
                </ul>
                
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="./cart_page.html">
                            <table>
                                <tr>
                                    <td>Shopping Cart:</td>
                                    <td id="ItemCountCart" style="padding-left: 10px;">0</td>
                                </tr>   
                            </table>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
</div>`;


async function fetchProducts(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetching data from API.",url);
      return data;

    } catch (error) {
      console.error('Error fetching products from API:', error);
    }
}  

async function setImgTags(imgPaths){
    console.log("Creating <div> and <img> tags with image paths");
    const completePaths = new Array();

    for(var p=0;p<imgPaths.length;p++){
        completePaths.push(`<div> <img src="${imgPaths[p]["imgurl"]}"> </div>`);
    }
    return completePaths;
}

async function addDivImage(paths){
    console.log("Setting images for display.");
    const newPaths = await setImgTags(paths);

    console.log("Appending <div> <img> to DOM body.")
    var divs = document.getElementsByClassName("imgProduct")
    for (i=0; i< divs.length; i++){
        divs[i].innerHTML = newPaths[i];
    }
}

function addNavBar(navBarCode){
    console.log("Appending navigational bar on Shop Page.");
    document.getElementById("headerPage").insertAdjacentHTML("afterend", navBarCode);
}

async function setDetailProduct(products){
    const jsonProducts = products;
    const dProducts = new Array();

    for(p=0; p<jsonProducts.length; p++){
        console.log(`Creating <ul> and <li> tags populated for product ${jsonProducts[p]["id"]}`);
        htmlList =`<ul>
            <li>Price: ${jsonProducts[p]["price"]}</li>
            <li>Material: ${jsonProducts[p]["title"]}</li>
            <li>Origin: ${jsonProducts[p]["description"]}</li>
            </ul>`;

        dProducts.push(htmlList);
    }

    return dProducts;
}

async function addDivProducts(products){
    console.log("Setting prodcuts details.")
    const htmlProducts = await setDetailProduct(products);

    console.log("Appending <div> <img> to DOM body.")
    var divs = document.getElementsByClassName("detailProduct")
    for (i=0; i< divs.length; i++){
        divs[i].innerHTML = htmlProducts[i];
    }
}

function addDivButtonCart(){
    // Get divs in page, and based on number of divs add n buttons
    // Also set the button's id, but increment by 1 to match product ID at the moment.

    var divs = document.getElementsByClassName("buttonCart")
    for (i=0; i< divs.length; i++){
        console.log(`Creating button for product: ${i+1}.`);
        divs[i].innerHTML = `
        <div>
            <button 
                type="button" class="btn btn-primary"
                onclick="addtoCart(this)"
                id="${i+1}"
            >
            Add to Cart
            </button>
        </div>`;
    }
}

function addtoCart(button){
    
    console.log(`Button for product ${buttonId}, pressed.`);

    var buttonId = button.id;
    var counterVal = document.getElementById("ItemCountCart");
    var val = parseInt(counterVal.innerHTML) + 1;
    counterVal.innerHTML = val;

    productSelected.push(buttonId);
    
    // Store arrya of products on localStorgare var
    localStorage.setItem('myProductsArray', JSON.stringify(productSelected));

    console.warn(`Products in Shopping cart: ${productSelected}`);

}

// Global VAR 
// Holding products selected via button.
let productSelected = new Array();

async function setupPage()
{
    console.warn("Part 1");
    addNavBar(navBarCode);

    console.warn("Part 2");
    var url = "http://34.229.91.169:8000/products/?format=json"
    var apiResponse = await fetchProducts(url);

    console.warn("Part 3");
    await addDivImage(apiResponse);
    
    console.warn("Part 4");
    await addDivProducts(apiResponse);
    
    console.warn("Part 5");
    addDivButtonCart();
}

async function cartPage()
{
    console.warn("Part 1");
    addNavBar(navBarCode);

    var productsLit = JSON.parse(localStorage.getItem("myProductsArray"));

    var divProduct = document.getElementsByClassName("productList");
    divProduct[0].innerHTML = productsLit;
}