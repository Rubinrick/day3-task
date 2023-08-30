let givenData = new XMLHttpRequest();
givenData.open ("GET", "https://restcountries.com/v3.1/all");

givenData.send();

givenData.onload = function (){
    const data = JSON.parse(givenData.response);
    console.log(data);
    for ( let i = 0; i<data.length; i++){
        console.log(`
Country : ${data[i].name.common} 
Region  : ${data[i].region}
Subregion: ${data[i].subregion}
Population :${data[i].population}
        `);
    }
}

