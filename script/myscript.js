
//Globale variabler

var result = []; // holder id og addresse for toalettene.
var markerArray = []; // holder toalettene som skal vises på kartet.
var mapLoaded = false; // boolsk verdi som brukes i mapLoad. 
var toaletter = {};


function dropdownMenu() {
    var mediaq = document.getElementById("navbaren");
    if (mediaq.className === "navbar") {
        mediaq.className += " responsive";
    } else {
        mediaq.className = "navbar";
    }
}



// Kode for å ligge inn kart med markers. 
function mapLoad() {
  mapLoaded = true;
  initMap(toaletter);
}


function initMap(toalettresultat) {
        var uluru = {lat: 60.391263, lng: 5.322054};

          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru,
          mapTypeId: 'terrain'
        });
            for(i = 0; i < toalettresultat.length; i++){
            var laten = parseFloat(toalettresultat[i].latitude)
            var longen = parseFloat(toalettresultat[i].longitude)
            var possisjon = {lat:laten, lng:longen};
            var labels = toalettresultat[i].id;
            
            var marker = new google.maps.Marker({
            position : possisjon,
            map: map,
            label : labels,
            
            index : i
            
       
      });

    }

  }


 function isEmpty(string) {
    return (!string || 0 === string.length);
   }

//returerer en boolsk verdi om toalettet er åpent på det tidspunket som blir oppgitt. 
function isOpen(){
 var verdi = document.getElementById("apenKlokkeslettCheck").value;
 var erÅpen = parseFloat(verdi);

 var dato2 = new Date();

 var splitIt = /[-]+/;  //regEx uttrykket for å splitte klokkeslett tidene til åpningstid og stengetid for seg selv. 

 var a = toaletter[i].tid_hverdag.split(splitIt);
 var b = toaletter[i].tid_lordag.split(splitIt);
 var c = toaletter[i].tid_sondag.split(splitIt);
 
 var klokkeHverdagO = parseFloat(a[0]);
 var klokkeHverdagC = parseFloat(a[1]);

 var klokkelordagO = parseFloat(b[0]);
 var klokkeLordagC = parseFloat(b[1]);

 var klokkeSondagO = parseFloat(c[0]);
 var klokkeSondagC = parseFloat(c[1]);   // stengetidene og åpningstidene er tekstverdi, så her gjør vi de om til tall.



      if(dato2.getDay() < 5 && erÅpen > klokkeHverdagO && erÅpen < klokkeHverdagC){
          return true;
      }

      if(dato2.getDay() == 5 && erÅpen > klokkeLordagO && erÅpen < klokkeLordagC){
        return true;
      }

      if(dato2.getDay() == 6 && erÅpen > klokkeSondagO && erÅpen < klokkeSondagC){
        return true;
      }  
}  

       

//Konstruktør for søkeobjekt - ikke brukt enda
function searchObject(herre, tid_sondag, pissoir_only, stellerom, tid_hverdag, tid_lordag, rullestol, adresse, pris, id, dame){
       this.herre = herre;
       this.tid_sondag = tid_sondag;
       this.pissoir_only = pissoir_only;
       this.stellerom = stellerom;
       this.tid_hverdag = tid_hverdag;
       this.tid_lordag = tid_lordag;
       this.rullestol = rullestol;
       this.adresse = adresse;
       this.pris = pris;
       this.id = id;
       this.dame = dame;

       var data = new searchObject();
       console.log(data);
}




//metoden for hurtigsøk - ikke ferdig med den. 
function hurtigSøk(){
  tallIndex = 0;
  result = [];
  markerArray = [];
  document.getElementById("myList").innerHTML = "";


     var splitOn = /[\s:]/;

     var str = document.getElementById("inputTekst").value;

     var word = str.split(splitOn);


    var herretest = new RegExp("herre");
    var dametest = new RegExp("dame");
    var gratistest = new RegExp("gratis");


    var test1 = herretest.test(word);
    var test2 = dametest.test(word);
    var test3 = gratistest.test(word);

    console.log(res);
    for(x = 0; x < toaletter.length; x++) {
    if(test1 == false){
        tallIndex --;

    }

    if(test2 == false){
        tallIndex --;

    }

    if(test3 == false){
        tallIndex --;

    }

    if(tallIndex == 3){
      result.push(toaletter[i].adresse + ", " +  "ID: " + toaletter[i].id);
      markerArray.push(toaletter[i]);

    }

  }

            mapLoaded && initMap(markerArray);


/*



            or(y = 0; y < result.length; y++){

           var supernode = document.createElement("LI");
           var textNode = document.createTextNode(result[y]);
           supernode.appendChild(textNode);
           document.getElementById('myList').appendChild(supernode);
           */

}


//Metoden for avansertsøk basert på kriterier
function search(){
  result = [];
  markerArray = [];
  document.getElementById("myList").innerHTML = "";

  var herreChecked = document.getElementById("HerreCheck").checked;
  var kvinneChecked = document.getElementById("kvinneCheck").checked;
  var rullestolChecked = document.getElementById("rullestolCheck").checked;
  var apenChecked = document.getElementById("apenCheck").checked;
  var apenNaChecked = document.getElementById("apenKlokkeslettCheck").value; //Denne e det ikke checkbox på
  var eDetStellerom = document.getElementById("stelleromCheck").checked;
  var gratis = document.getElementById("gratisCheck").checked;
  var makspris = parseFloat(document.getElementById("maksprisCheck").value); //ingen checkbox 

  console.log(herreChecked,kvinneChecked,rullestolChecked,apenChecked,apenNaChecked,eDetStellerom,gratis,makspris);
  

  

  

     for(i = 0; i < toaletter.length; i++){
          var index = 8;
          var dato = new Date();
          


          if(herreChecked && toaletter[i].herre != "1"){
              index--;
          } 
          
          if(kvinneChecked && toaletter[i].dame != "1"){
            index--;
          }
          
          if(rullestolChecked && toaletter[i].rullestol != "1"){
               index--;
          }


          if(apenChecked){


              if(dato.getDay() < 5){
                 if(parseFloat(toaletter[i].tid_hverdag) > dato.getHours()){
                   index--;
                 } 

               }
                        if(dato.getDay() == 5){

                              if(parseFloat(toaletter[i].tid_lordag) > dato.getHours()){
                                     index--;
                          }
                       } 

                                 if(dato.getDay() == 6){
                                       if(parseFloat(toaletter[i].tid_sondag) > dato.getHours()){
                                                 index--;
                                     }

                                  }

                  }

          

          

          if(!isEmpty(apenNaChecked) && !isOpen()){
            index --;
            
          }

          if(eDetStellerom && toaletter[i].stellerom != "1"){
             index--;
          }

          if(gratis && (toaletter[i].pris != "0" && toaletter[i].pris != "NULL")){
               index--;
          }

          if(makspris != "00" && toaletter[i].pris > makspris){
              index--;
          }



          if(index == 8){ 
            result.push(toaletter[i].adresse + ", " +  "ID: " + toaletter[i].id);
            markerArray.push(toaletter[i]);

          }
          

     }  
        
        mapLoaded && initMap(markerArray); 
     
      for(y = 0; y < result.length; y++){
        
           var supernode = document.createElement("LI");
           var textNode = document.createTextNode(result[y]);
           supernode.appendChild(textNode);
           document.getElementById('myList').appendChild(supernode);    

           

            
    
      }
   }

  

 document.addEventListener('DOMContentLoaded', function() {
     getToiletData("https://hotell.difi.no/api/json/bergen/dokart?");
     searchFormElements = document.querySelectorAll('#toilet-search-form input');
     searchFormElements.forEach(function(el) {
       el.onchange = search;
     })

   }, false);


   function getToiletData(url) {
     var toiletRequest = new XMLHttpRequest();
     toiletRequest.open('GET', url);
     toiletRequest.onload = function() {
       var toiletResponse = JSON.parse(toiletRequest.responseText);
       window.toaletter = toiletResponse.entries; // difi-JSON wrapper toalettene i `entries`
       search(); // Vi kan ikke kjøre search før vi har nåkke data. Kan også løses med Promises https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
     };

     toiletRequest.send();


   }  

