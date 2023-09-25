console.log('loaded the js') 

var searchButton = $('#search')

console.log(searchButton)

$('#search').click( () => { 
    console.log('hasdfasdfadf')
    fetch("http://localhost:3001/deckbuild/redir").then(() => {
        window.location.href = "/"
    })
});

