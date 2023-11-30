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
    "/home/jarvis/Development/WebCommerce_IS_601_103/img/1.png",
    "/home/jarvis/Development/WebCommerce_IS_601_103/img/2.png",
    "/home/jarvis/Development/WebCommerce_IS_601_103/img/3.png",
    "/home/jarvis/Development/WebCommerce_IS_601_103/img/4.png",
    "/home/jarvis/Development/WebCommerce_IS_601_103/img/5.png",
    "/home/jarvis/Development/WebCommerce_IS_601_103/img/6.png"
);

const produtDetail = '[{"price":500, "material":"Cotton", "origin":"Italian"}, {"price":600, "material":"Lether", "origin":"France"}, {"price":700, "material":"Polyester", "origin":"Colombia"}, {"price":800, "material":"Cotton", "origin":"USA"}, {"price":900, "material":"Lether", "origin":"Uzbekistan"}, {"price":1000, "material":"Polyester", "origin":"Indonesia"}]';

function setImgTags(imgPaths){

    const completePaths = new Array();

    for(p=0;p<imgPaths.length;p++){
        completePaths.push(`<div> <img src="${imgPaths[p]}"> </div>`);
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
            <li>Material: ${jsonProducts[p]["material"]}</li>
            <li>Origin: ${jsonProducts[p]["origin"]}</li>
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


function setupPage()
{
    addNavBar(navBarCode);
    addDivButtonCart();
    addDivImage(paths);
    addDivProducts(produtDetail);

}