
var response = ''

$('button').on("click", function loadDoc() {
    let response = $('select').val().trim()
    console.log(response)
    var queryURL = "https://api.nytimes.com/svc/books/v3/lists/" + response + ".json?api-key=YYLM4H4ZVCvkU3CCEM6hMcTnfTjAP7DM"
    console.log(queryURL)
// ====== need to pull a response from a book
    $.ajax({
        url: queryURL,
       method: "GET" 
    }).then(function(response){
        console.log(response)

    })
})
