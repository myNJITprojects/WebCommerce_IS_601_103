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
                        <a class="nav-link" href="./shop_page.html">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
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


function addNavBar(navBarCode){
    console.log("Appending navigational bar on Shop Page.");
    document.getElementById("headerPage").insertAdjacentHTML("afterend", navBarCode);
}


async function setupPage()
{
    console.warn("Part 1");
    addNavBar(navBarCode);
}