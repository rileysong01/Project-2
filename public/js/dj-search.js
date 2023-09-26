
console.log('loaded the js') 

var searchButton = document.getElementById("search");
var inputBox = document.getElementById("InputBox");

var cb1 = document.getElementById("cb1");
var cb2 = document.getElementById("cb2");
var cb3 = document.getElementById("cb3");
var cb4 = document.getElementById("cb4");
var cb5 = document.getElementById("cb5");
var cb6 = document.getElementById("cb6");


var cardRadioButton = document.getElementById("cardSearchRadioButton");
var userRadioButton = document.getElementById("userSearchRadioButton");


var costAndStuff = document.getElementById("costnstuff");

//1 for card 2 for user
var UorC = 1


function search(){
    
    var searchInput = inputBox.value.trim(); // Trim to remove leading/trailing white spaces

    if(UorC === 2){
        var url = `/search/search/user/${encodeURIComponent(searchInput)}`; // Use encodeURIComponent to handle special characters

        window.location.href = url;
        return
    }
    
    
    
    var options = [];
   

    console.log(searchInput);

    if (cb1.checked) {
        options.push(1);
    }

    if (cb2.checked) {
        options.push(2);
    }

    if (cb3.checked) {
        options.push(3);
    }

    if (cb4.checked) {
        options.push(4);
    }

    if (cb5.checked) {
        options.push(5);
    }

    if (cb6.checked) {
        options.push(6);
    }

    console.log(options);

    options = options.join(','); 

    // Build the URL with the input value and selected options
    var url = `/search/findcards?filter=${options}&card=${encodeURIComponent(searchInput)}`; // Use encodeURIComponent to handle special characters

    window.location.href = url;
}

function radioButton(){
    console.log('radio button clicked')

    if(userRadioButton.checked){
        costAndStuff.className = 'd-none'
        UorC = 2
    }

    if(cardRadioButton.checked){
        costAndStuff.className = '',
        UorC = 1
    }


    console.log(UorC)
}   


cardRadioButton.addEventListener('click', radioButton)
userRadioButton.addEventListener('click', radioButton)


searchButton.addEventListener('click', search);
