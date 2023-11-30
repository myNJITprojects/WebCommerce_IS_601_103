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
</div>`

const divBottonCart=`
<div>
    <button type="button" class="btn btn-primary">Add to Cart</button>
</div>`

function setImgTags(imgPaths){

    const completePaths = new Array();

    for(p=0;p<imgPaths.length;p++){
        completePaths.push(`<div> <img src="${imgPaths[p]}"> </div>`);
    }
    return completePaths;
}

function addDivImage(){
    const paths = new Array(
        "/home/jarvis/Development/WebCommerce_IS_601_103/img/1.png",
        "/home/jarvis/Development/WebCommerce_IS_601_103/img/2.png",
        "/home/jarvis/Development/WebCommerce_IS_601_103/img/3.png",
        "/home/jarvis/Development/WebCommerce_IS_601_103/img/4.png",
        "/home/jarvis/Development/WebCommerce_IS_601_103/img/5.png",
        "/home/jarvis/Development/WebCommerce_IS_601_103/img/6.png"
    );

    const newPaths = setImgTags(paths);

    var divs = document.getElementsByClassName("imgProduct")
    for (i=0; i< divs.length; i++){
        divs[i].innerHTML = newPaths[i];
    }
}



function addNaBar(navBarCode){
    document.getElementById("headerPage")
        .insertAdjacentHTML("afterend", navBarCode);
}

function addDivButtonCart(BottonCart){
    var divs = document.getElementsByClassName("buttonCart")
    for (i=0; i< divs.length; i++){
        divs[i].innerHTML = BottonCart;
    }
}

function setupPage()
{
    addNaBar(navBarCode);
    addDivButtonCart(divBottonCart);
    addDivImage();

}