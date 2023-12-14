function createDivs(divsClass,idPrefix){
    const divs = new Array();

    for(r=0;r<2;r++){
        var newdiv = document.createElement('div');
        newdiv.className=divsClass;
        newdiv.id = `"${idPrefix}${r}"`;
        divs.push(newdiv);
    }
    
    return divs;
}

function addDivRows(){
    const newDivs = createDivs(divsClass="row",idPrefix="rr");

    for (i=0; i< newDivs.length; i++){
        document.getElementById("TEST").appendChild(newDivs[i]);
    }
}

function addDivsCols(){
    const newDivs = createDivs(divsClass="col-md-4 listedItem", idPrefix="c");


    var targetDivs = document.getElementsByClassName("row")
    for (i=0; i< newDivs.length; i++){
        targetDivs[i].appendChild(newDivs[i]);
    }
}

function setTestDivs(){
    addDivRows();
    addDivsCols();
}