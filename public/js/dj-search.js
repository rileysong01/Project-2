console.log('loaded the js') 

var searchButton = document.getElementById("search");


var cb1 = document.getElementById("cb1");
var cb2 = document.getElementById("cb2");
var cb3 = document.getElementById("cb3");
var cb4 = document.getElementById("cb4");
var cb5 = document.getElementById("cb5");
var cb6 = document.getElementById("cb6");



function search(){
    options = []

    if(cb1.checked){
        options.push(1)
    }

    if(cb2.checked){
        options.push(2)
    }

    if(cb3.checked){
        options.push(3)
    }

    if(cb4.checked){
        options.push(4)
    }

    if(cb5.checked){
        options.push(5)
    }

    if(cb6.checked){
        options.push(6)
    }

    console.log(options)

    options = options.toString()

    url = `/search/findcards?filter=${options}`

    window.location.href = url
}


searchButton.addEventListener('click', search)


