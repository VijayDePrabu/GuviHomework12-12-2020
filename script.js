let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function() {
    let data = JSON.parse(this.response);
    for (let i in data){
        console.log(data[i].name);
    }
}
