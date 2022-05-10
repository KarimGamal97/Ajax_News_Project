let myLinks = document.getElementsByClassName("nav-link");
let category = "general";
let data;


for (var k = 0; k < myLinks.length; k++) {
    myLinks[k].addEventListener("click", function(e) {
        category = e.target.innerHTML;
        category = category.toLowerCase();
        getApi();
    });
}

function getApi() {

    let myUrl = "https://newsapi.org/v2/top-headlines?country=de&category=" + category + "&apiKey=934ba48c7cec4d1eabd5330256bc21e4";

    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", myUrl);
    myRequest.onreadystatechange = function() {
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            data = myRequest.response;
            data = JSON.parse(data);
            data = data.articles;
            showData();
        }
    }
    myRequest.send();
}
getApi();

function showData() {
    let row = "";

    for (let i = 0; i < data.length; i++) {
        row += ` 
                <div class="col-md-4 test mb-5">
                    <img src="` + data[i].urlToImage + `" alt="#" class="img-fluid">
                    <h1>` + data[i].title + `</h1>
                    <p>` + data[i].description + `</p>
                  </div>
                  `
    }
    document.getElementById("show").innerHTML = row;
}