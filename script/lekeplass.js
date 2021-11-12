// Dropdown menyen som vises når skjermen er mindre enn 600px
function dropdownMenu() {
    var mediaq = document.getElementById("navbaren");
    if (mediaq.className === "navbar") {
        mediaq.className += " responsive";
    } else {
        mediaq.className = "navbar";
    }
}


var lekeplasser = {};
var isLoaded = false;

// Henter ut JSON array fra url
function getLekeplassData(url){
var lekeplassRequest = new XMLHttpRequest();
lekeplassRequest.open('GET', url);
lekeplassRequest.onload = function() {
var lekeplassResponse = JSON.parse(lekeplassRequest.responseText);
window.lekeplasser = lekeplassResponse.entries;
initMap();
};


lekeplassRequest.send();
}


document.addEventListener('DOMContentLoaded', function() {
getLekeplassData("https://hotell.difi.no/api/json/bergen/lekeplasser?");
  

}, false);



// Kode for å ligge inn kart med markers. 
function initMap() {
        var uluru = {lat: 60.391263, lng: 5.322054};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        
        for(i =0;i < lekeplasser.length;i++) {
            var laten = parseFloat(lekeplasser[i].latitude)
            var longen = parseFloat(lekeplasser[i].longitude)
            var possisjon = {lat:laten, lng:longen};
            var labels = lekeplasser[i].id;
            var marker = new google.maps.Marker ({
                  position: possisjon, 
                  label : labels,
                  map: map,
                  index: i
            });
    } 
      }



 


//  Kode for å loope igjennom JSON array, og liste ut alle lekeplasser i en liste
     function createList(){
     for(i =0;i < lekeplasser.length;i++) {
     var node = document.createElement("LI"); 
     var textnode = document.createTextNode(lekeplasser[i].id+'. '+lekeplasser[i].navn);
     node.appendChild(textnode);
     document.getElementById('myList12').appendChild(node);
    }}



/* Funksjon som regner avstanden mellom to punkter i km.
Punktene er gitt av latitude og longitude. Vi hat tatt med at jorden er
rund i våres fuksjon */
function finnAvstand() {

  var x = document.getElementById("favSearch1").value-1; // Trekker fra 1, pga array index starter på 0
  var z = document.getElementById("favSearch2").value-1;
  var firstLat = parseFloat(lekeplasser[x].latitude);
  var firstLon = parseFloat(lekeplasser[x].longitude);
  var secLat =   parseFloat(lekeplasser[z].latitude);
  var secLon =   parseFloat(lekeplasser[z].longitude);

  var earthRadius = 6371;
  var divide = (Math.PI/180); 
  var latDiff = divide*(secLat-firstLat);  
  var lonDiff = divide*(secLon-firstLon); 
  var a = Math.sin((latDiff/2) * (latDiff/2)) +
          Math.cos(divide*(firstLat)) * Math.cos(divide*(secLat)) * 
          Math.sin((lonDiff/2) * (lonDiff/2));

  var utReg = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var kmResult = earthRadius * utReg; 
  document.getElementById("kmResultP").innerHTML = kmResult + "KM";
}


