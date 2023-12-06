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
                        <a class="nav-link" href="#">Browse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="./cart_page.html">
                            <i class="fas fa-shopping-cart"></i> ❄️
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
</div>`;

const paths = new Array(
    
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
    "./img/7.png",
    "./img/8.png",

);

const produtDetail = '[{"price":500, "material":"Cotton", "origin":"Italian"}, {"price":600, "material":"Lether", "origin":"France"}, {"price":700, "material":"Polyester", "origin":"Colombia"}, {"price":800, "material":"Cotton", "origin":"USA"}, {"price":900, "material":"Lether", "origin":"Uzbekistan"}, {"price":1000, "material":"Polyester", "origin":"Indonesia"}]';


async function fetchProducts(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error fetching products:', error);
    }
}  

function setImgTags(imgPaths){

    const completePaths = new Array();

    for(p=0;p<imgPaths.length;p++){
        console.log(typeof imgPaths[p])
        console.log(imgPaths[p])
        completePaths.push(`<div> <img src=${imgPaths[p]}> </div>`);
    }
    return completePaths;
}

function addDivImage(paths){
    const newPaths = setImgTags(paths);

    var divs = document.getElementsByClassName("imgProduct")
    for (i=0; i< divs.length; i++){
        divs[i].innerHTML = newPaths[i];
    }
}

function addNavBar(navBarCode){
    document.getElementById("headerPage")
        .insertAdjacentHTML("afterend", navBarCode);
}

function addDivButtonCart(){
    const divBottonCart=`<div> <button type="button" class="btn btn-primary">Add to Cart</button> </div>`;

    var divs = document.getElementsByClassName("buttonCart")
    for (i=0; i< divs.length; i++){
        divs[i].innerHTML = divBottonCart;
    }
}

function setDetailProcut(products){
    const jsonProducts = JSON.parse(products);
    const dProducts = new Array();

    for(p=0; p<jsonProducts.length; p++){

        htmlList =`<ul>
            <li>Price: ${jsonProducts[p]["price"]}</li>
            <li>Material: ${jsonProducts[p]["title"]}</li>
            <li>Origin: ${jsonProducts[p]["description"]}</li>
            </ul>`;

        dProducts.push(htmlList);
    }

    return dProducts;
}

function addDivProducts(products){

    const htmlProducts = setDetailProcut(products);

    var divs = document.getElementsByClassName("detailProduct")
    for (i=0; i< divs.length; i++){
        divs[i].innerHTML = htmlProducts[i];
    }
}

// function createDivs(divsClass,idPrefix){
//     const divs = new Array();

//     for(r=0;r<2;r++){
//         var newdiv = document.createElement('div');
//         newdiv.className=divsClass;
//         newdiv.id = `"${idPrefix}${r}"`;
//         divs.push(newdiv);
//     }
    
//     return divs;
// }

// function addDivRows(){
//     const newDivs = createDivs(divsClass="row",idPrefix="rr");

//     for (i=0; i< newDivs.length; i++){
//         document.getElementById("TEST").appendChild(newDivs[i]);
//     }
// }

// function addDivsCols(){
//     const newDivs = createDivs(divsClass="col-md-4 listedItem", idPrefix="c");


//     var targetDivs = document.getElementsByClassName("row")
//     for (i=0; i< newDivs.length; i++){
//         targetDivs[i].appendChild(newDivs[i]);
//     }
// }

// function setTestDivs(){
//     addDivRows();
//     addDivsCols();
// }


function setupPage()
{
    addNavBar(navBarCode);
    // setTestDivs();
    addDivButtonCart();
    addDivImage(paths);

    var url = "http://34.229.91.169:8000/products/?format=json"
    var x = fetchProducts(url);
    console.log(x.value)

    addDivProducts(produtDetail);
}