let givenData = new XMLHttpRequest();
givenData.open("GET", "https://restcountries.com/v3.1/all");

givenData.send();

givenData.onload = function (){
    const data = JSON.parse(givenData.response);
    
    for( let i = 0; i<data.length; i++){
        console.log(` Flags: ${data[i].flag}`)
    }
}