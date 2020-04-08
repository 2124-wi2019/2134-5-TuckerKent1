/*
    Tucker Kent
    script.js
    19SP_INFO_2134_WW Online - JavaScript II
    Thoendel
    8 April 2020
*/

window.addEventListener("load", (event) => { //window event listener added for load event

    const actionCreate = document.getElementById("actionCreate"); //storing actionCreate anchor in constant
    const actionComplete = document.getElementById("actionComplete"); //storing actionComplete anchor in constant

    actionCreate.addEventListener("click", (e) => { //event listener add for click event of actionCreate anchor
        const eventPromise = new Promise((resolve, reject) => { //promise created 
            setTimeout(resolve, 1000); //setTimeout method called - calling resolve method after 1 second timeout
        });

        eventPromise.then(result => actionCreate.setAttribute("class", "hidden")); //then method called to hide the actionCreate anchor upon promise being resolved
        eventPromise.then(result => actionComplete.setAttribute("class", "visible")); //then method called to make the actionComplete anchor visible after promise is resolved
    });

    actionComplete.addEventListener("click", (e) => { //event listener for click event on actionComplete achor
        actionComplete.setAttribute("class", "hidden"); //making the actionComplete anchor hidden
        actionCreate.setAttribute("class", "visible"); //setting actionCreate anchor to visible
    });


});