
document.getElementById("theButton").onclick = function(){
 const country = document.getElementById("theInput").value;
 getCountryInfo(country);
}

function getCountryInfo(theName) {
    axios
    .get("https://restcountries.eu/rest/v2/name/" + theName)
    .then(responseFromAPI => {
      const countryName = responseFromAPI.data[0].name;
      const countryCapital = responseFromAPI.data[0].capital;

      // instead in the console, show data in the browser using JS DOM manipulation:
      document.getElementById("countryName").innerHTML = countryName;
      document.getElementById("countryCapital").innerHTML = "Capital: " + countryCapital;
      document.getElementById("error").innerHTML = "";
    }).catch(err => {
      if (err.response.status === 404) {
        console.log(err);
        document.getElementById("countryName").innerHTML = "";
        document.getElementById("countryCapital").innerHTML = "";
        document.getElementById("error").innerHTML = "Couldn't find country: " + theName;
      } else {
        console.log("err => ", err);
      }
    })
}