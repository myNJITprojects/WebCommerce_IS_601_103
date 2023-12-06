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



async function fetchProducts(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error fetching products:', error);
    }
} 

function addNavBar(navBarCode){
    document.getElementById("headerPage")
        .insertAdjacentHTML("afterend", navBarCode);
}


function setupPage()
{
    addNavBar(navBarCode);
}