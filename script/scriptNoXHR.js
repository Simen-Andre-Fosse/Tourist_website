/* På grunn av mye feilmeldinger og mislykkede forsøk på å få xmlHttpRequesten
til å funke på page5 og 6, bestemte vi oss for å ligge JSON arrayet hardkodet inn
i denne filen. */
var lekeplasser=[{"latitude":"60.336617","navn":"Bønesparken","id":"1","longitude":"5.301290"},{"latitude":"60.334972","navn":"Kråkenes miljøpark","id":"2","longitude":"5.315892"},{"latitude":"60.334400","navn":"Øvre Bergveien lekeplass","id":"3","longitude":"5.317622"},{"latitude":"60.409634","navn":"Amalie Skrams vei lekeplass","id":"4","longitude":"5.324110"},{"latitude":"60.394161","navn":"Apotekerhagen lekeplass","id":"5","longitude":"5.316830"},{"latitude":"60.400307","navn":"Arbeiderboligen lekeplass","id":"6","longitude":"5.327210"},{"latitude":"60.395927","navn":"Bernhard Meyers vei lekeplass","id":"7","longitude":"5.329953"},{"latitude":"60.400158","navn":"Birkebeinergaten lekeplass","id":"8","longitude":"5.323874"},{"latitude":"60.402195","navn":"Bøkkergaten lekeplass","id":"9","longitude":"5.322305"},{"latitude":"60.406006","navn":"Christinegården lekeplass","id":"10","longitude":"5.328541"},{"latitude":"60.394714","navn":"Corps de Garde lekeplass","id":"11","longitude":"5.316685"},{"latitude":"60.387714","navn":"Dokkebakken barnepark","id":"12","longitude":"5.316546"},{"latitude":"60.389427","navn":"Dragesmauet lekeplass","id":"13","longitude":"5.316106"},{"latitude":"60.399319","navn":"Finnemanns plass med lek","id":"14","longitude":"5.327328"},{"latitude":"60.407238","navn":"Fjæregrenden lekeplass","id":"15","longitude":"5.322436"},{"latitude":"60.423450","navn":"Flagghaugen barnepark","id":"16","longitude":"5.307400"},{"latitude":"60.386406","navn":"Fosswinckels gate, gatetun med lek","id":"17","longitude":"5.328192"},{"latitude":"60.401039","navn":"Fredens bolig lekeplass","id":"18","longitude":"5.326760"},{"latitude":"60.397362","navn":"Fredriksbergsgaten lekeplass","id":"19","longitude":"5.309816"},{"latitude":"60.395851","navn":"Galgebakken lekeplass","id":"20","longitude":"5.310549"},{"latitude":"60.396271","navn":"Georgernes verft lekeplass","id":"21","longitude":"5.307695"},{"latitude":"60.401340","navn":"Grøgårds gate, gatetun med lek","id":"22","longitude":"5.325341"},{"latitude":"60.401550","navn":"Hans Hauges gate, gatetun med lek","id":"23","longitude":"5.324780"},{"latitude":"60.388515","navn":"Jekteviksbakken lekeplass","id":"24","longitude":"5.316165"},{"latitude":"60.388176","navn":"Johanneskirken lekeplass","id":"25","longitude":"5.320178"},{"latitude":"60.397877","navn":"Kastanjeparken lekeplass","id":"26","longitude":"5.308553"},{"latitude":"60.395821","navn":"Klosterhaugen lekeplass","id":"27","longitude":"5.312914"},{"latitude":"60.384392","navn":"Konsul Børs\u0027 gate, gatetun med lek","id":"28","longitude":"5.321395"},{"latitude":"60.398270","navn":"Koren Wibergs plass med lek","id":"29","longitude":"5.325231"},{"latitude":"60.399235","navn":"Kroken lekeplass","id":"30","longitude":"5.323595"},{"latitude":"60.388290","navn":"Kvartal 7, gatetun med lek","id":"31","longitude":"5.330027"},{"latitude":"60.402508","navn":"Ladegårdsgaten, gatetun med lek","id":"32","longitude":"5.325757"},{"latitude":"60.404259","navn":"Meyermarken bydelspark","id":"33","longitude":"5.326046"},{"latitude":"60.417339","navn":"Munkebotn lekeplass","id":"34","longitude":"5.315090"},{"latitude":"60.398659","navn":"Nordnesbakken lekeplass","id":"35","longitude":"5.304358"},{"latitude":"60.398140","navn":"Nordnes lekeplass","id":"36","longitude":"5.305227"},{"latitude":"60.399593","navn":"Nordnesparken lekeområde","id":"37","longitude":"5.302153"},{"latitude":"60.387684","navn":"Ole Irgens vei lekeplass","id":"38","longitude":"5.352640"},{"latitude":"60.385681","navn":"Ole Vigs gate lekeplass","id":"39","longitude":"5.322710"},{"latitude":"60.401295","navn":"Repslagergaten, gatetun med lek","id":"40","longitude":"5.325778"},{"latitude":"60.393391","navn":"Ross-smauet lekeplass","id":"41","longitude":"5.315623"},{"latitude":"60.405636","navn":"Sandvikskirken lekeplass","id":"42","longitude":"5.325601"},{"latitude":"60.392906","navn":"Skansemyren lekeplass","id":"43","longitude":"5.339055"},{"latitude":"60.397305","navn":"Skanseparken","id":"44","longitude":"5.331261"},{"latitude":"60.391979","navn":"Skivebakken lekeplass","id":"45","longitude":"5.336150"},{"latitude":"60.401775","navn":"Skuteviksveien lekeplass","id":"46","longitude":"5.321489"},{"latitude":"60.402653","navn":"Sophus Pihls gate lekeplass","id":"47","longitude":"5.329568"},{"latitude":"60.393982","navn":"St. Hansstredet, gatetun med lek","id":"48","longitude":"5.314245"},{"latitude":"60.397980","navn":"Steinkjellerbakken lekeplass","id":"49","longitude":"5.327615"},{"latitude":"60.398804","navn":"Steinkjellergaten lekeplass","id":"50","longitude":"5.326945"},{"latitude":"60.383774","navn":"Stemmeveien lekeplass","id":"51","longitude":"5.364783"},{"latitude":"60.411942","navn":"Sudmanns vei barnepark","id":"52","longitude":"5.325360"},{"latitude":"60.390636","navn":"Sydnesparken lekeplass","id":"53","longitude":"5.316278"},{"latitude":"60.395428","navn":"Verftsbakken lekeplass","id":"54","longitude":"5.311219"},{"latitude":"60.384846","navn":"Welhavens gate, gatetun med lek","id":"55","longitude":"5.323308"},{"latitude":"60.439121","navn":"Øvre Lønborg lekeplass","id":"56","longitude":"5.283855"},{"latitude":"60.396187","navn":"Ytre Markeveien lekeplass","id":"57","longitude":"5.313488"},{"latitude":"60.384136","navn":"Zetlitz\u0027 gate, gatetun med lek","id":"58","longitude":"5.323144"},{"latitude":"60.399117","navn":"Øvregaten lekeplass","id":"59","longitude":"5.324265"},{"latitude":"60.361092","navn":"Adolph Bergs vei lekeplass","id":"60","longitude":"5.364718"},{"latitude":"60.360710","navn":"Bendixens vei parkanlegg","id":"61","longitude":"5.353518"},{"latitude":"60.363914","navn":"Birkeveien lekeplass","id":"62","longitude":"5.361103"},{"latitude":"60.363117","navn":"Bøkeveien lekeplass","id":"63","longitude":"5.358995"},{"latitude":"60.372730","navn":"Camilla Colletts gate barnepark","id":"64","longitude":"5.347402"},{"latitude":"60.356663","navn":"Elvebakken lekeplass","id":"65","longitude":"5.348791"},{"latitude":"60.360973","navn":"Henrik Mohns vei lekeplass","id":"66","longitude":"5.357670"},{"latitude":"60.363670","navn":"Hjelms vei lekeplass","id":"67","longitude":"5.350492"},{"latitude":"60.370731","navn":"Hordagaten barnepark","id":"68","longitude":"5.335831"},{"latitude":"60.374527","navn":"Hunstadsvingen lekeplass","id":"69","longitude":"5.346651"},{"latitude":"60.377068","navn":"Ibsens gate lekeplass","id":"70","longitude":"5.340192"},{"latitude":"60.365067","navn":"Jacob Aalls vei lekeplass","id":"71","longitude":"5.350508"},{"latitude":"60.375324","navn":"Jonas Lies vei lekeplass","id":"72","longitude":"5.350878"},{"latitude":"60.364944","navn":"Kanonhaugen lekeplass","id":"73","longitude":"5.371134"},{"latitude":"60.357643","navn":"Kolstien lekeplass","id":"74","longitude":"5.373334"},{"latitude":"60.360332","navn":"Landåslien lekeplass","id":"75","longitude":"5.373591"},{"latitude":"60.379433","navn":"Lien lekeplass","id":"76","longitude":"5.320677"},{"latitude":"60.367218","navn":"Lægdene lekeplass","id":"77","longitude":"5.370099"},{"latitude":"60.370811","navn":"Lægdesvingen øst lekeplass","id":"78","longitude":"5.370051"},{"latitude":"60.371231","navn":"Lægdesvingen vest lekeplass","id":"79","longitude":"5.367229"},{"latitude":"60.371834","navn":"Løvstakklien lekeplass","id":"80","longitude":"5.332797"},{"latitude":"60.362831","navn":"Nicolaysens vei lekeplass","id":"81","longitude":"5.352713"},{"latitude":"60.367233","navn":"Soleiveien lekeplass","id":"82","longitude":"5.364515"},{"latitude":"60.365475","navn":"Solhaug lekeplass","id":"83","longitude":"5.346544"},{"latitude":"60.365406","navn":"Solhaugparken","id":"84","longitude":"5.347928"},{"latitude":"60.375706","navn":"Solheimslien lekeplass","id":"85","longitude":"5.327843"},{"latitude":"60.368164","navn":"Solheimsvannet","id":"86","longitude":"5.347713"},{"latitude":"60.367744","navn":"St. Olavs vei lekeplass","id":"87","longitude":"5.353410"},{"latitude":"60.369762","navn":"St. Sunnivas vei lekeplass","id":"88","longitude":"5.356640"},{"latitude":"60.379364","navn":"Strandlien lekeplass","id":"89","longitude":"5.319732"},{"latitude":"60.374653","navn":"Søndre Skogveien lekeplass","id":"90","longitude":"5.333573"},{"latitude":"60.351677","navn":"Tveiteparken","id":"91","longitude":"5.355309"},{"latitude":"60.366505","navn":"Øvre Sollien lekeplass","id":"92","longitude":"5.376472"},{"latitude":"60.458740","navn":"Alf Bondes veg lekeplass","id":"93","longitude":"5.438109"},{"latitude":"60.402431","navn":"Arnatveitlia lekeplass","id":"94","longitude":"5.476518"},{"latitude":"60.455780","navn":"Dr. Krohns veg lekeplass","id":"95","longitude":"5.443479"},{"latitude":"60.449997","navn":"Gamlevegen lekeplass","id":"96","longitude":"5.447427"},{"latitude":"60.375484","navn":"Lone lekeplass","id":"97","longitude":"5.455441"},{"latitude":"60.383659","navn":"Londalen lekeplass","id":"98","longitude":"5.455715"},{"latitude":"60.416878","navn":"Stølsvegen lekeplass","id":"99","longitude":"5.474700"},{"latitude":"60.458538","navn":"Sætreparken","id":"100","longitude":"5.436181"}]

/* lager et option for hvert av lekeplass objektene,
 deretter sender han de til select*/
function createSelect(){
for(i =0;i < lekeplasser.length;i++) {
     var nodes = document.createElement("option"); 
     var textnode = document.createTextNode(lekeplasser[i].id+'. '+lekeplasser[i].navn);
     nodes.appendChild(textnode);
     document.getElementById('mySelect').appendChild(nodes);
    }
}
// Sender brukers valg til <p> hvor den skriver ut favoritt lekeplassen.
function dropDownSelect() {
    var x = document.getElementById("mySelect");
    var i = x.selectedIndex;
    document.getElementById("favElementP").innerHTML = "Din favoritt lekeplass er " + x.options[i].text;
}
/*Det selvvalgte datasettet våres er lekeplasser i stavanger
 (https://hotell.difi.no/api/json/stavanger/lekeplasser?).*/
var sLekeplasser = [{"latitude":"58.97349203","name":"Byhaugen","adressenavn":"Carl Sundt Hansens gate 20","longitude":"5.700507617"},{"latitude":"58.89778255","name":"Eikeberget","adressenavn":"","longitude":"5.731022334"},{"latitude":"58.89860684","name":"Heddå","adressenavn":"Godeset","longitude":"5.718161593"},{"latitude":"58.93180295","name":"Hinnaberget","adressenavn":"Hindalsbakken","longitude":"5.721179923"},{"latitude":"58.98781593","name":"Høye","adressenavn":"","longitude":"5.660478936"},{"latitude":"58.93260153","name":"Håhammaren","adressenavn":"","longitude":"5.645477514"},{"latitude":"58.90047936","name":"Kvieberget","adressenavn":"","longitude":"5.725365721"},{"latitude":"59.00847385","name":"Lunde","adressenavn":"","longitude":"5.7428061"},{"latitude":"58.9376403","name":"Madlatuå","adressenavn":"","longitude":"5.647422436"},{"latitude":"58.96799623","name":"Smiodden","adressenavn":"Kvernevik Ring","longitude":"5.593566256"},{"latitude":"58.97912831","name":"Sølyst","adressenavn":"","longitude":"5.744534218"},{"latitude":"58.98550923","name":"Tastavarden","adressenavn":"","longitude":"5.679107153"},{"latitude":"58.98503109","name":"Tastaveden","adressenavn":"","longitude":"5.699054942"},{"latitude":"58.94041246","name":"Ullandhaugtårnet","adressenavn":"Ullandhaugleitet 11","longitude":"5.706659864"},{"latitude":"58.89424593","name":"Ulsberget","adressenavn":"","longitude":"5.731200229"},{"latitude":"58.97191889","name":"Valbergtårnet","adressenavn":"Valbjerget 4","longitude":"5.731290897"},{"latitude":"58.95665784","name":"Varden","adressenavn":"","longitude":"5.751612325"},{"latitude":"58.9573561","name":"Vålandstårnet","adressenavn":"Vålandshaugen 18","longitude":"5.728686362"},{"latitude":"58.97394949","name":"Ørnaberget","adressenavn":"Kvernevik Ring","longitude":"5.606677474"},{"latitude":"58.974832","name":"Solhaugen","adressenavn":"Almeveien","longitude":"5.70859"},{"latitude":"58.9914125","name":"Klampen","adressenavn":"","longitude":"5.7486216"},{"latitude":"58.985662","name":"Vanntårnet Buøy","adressenavn":"","longitude":"5.735763"},{"latitude":"58.999058","name":"Selhundveien","adressenavn":"Selhundveien","longitude":"5.715676"},{"latitude":"58.90136","name":"Husaberget","adressenavn":"","longitude":"5.729378"},{"latitude":"58.999405","name":"Vardenes fyr","adressenavn":"","longitude":"5.678569"},{"latitude":"58.974835","name":"Vølstadveien","adressenavn":"","longitude":"5.688305"},{"latitude":"58.99216","name":"Byåsen","adressenavn":"","longitude":"5.681268"},{"latitude":"58.979016","name":"Kvidavigå","adressenavn":"","longitude":"5.74598"},{"latitude":"59.002306","name":"Jektavigå, Vassøy","adressenavn":"","longitude":"5.789802"},{"latitude":"58.99032","name":"Sørstrand, Vassøy","adressenavn":"","longitude":"5.786738"},{"latitude":"59.012516","name":"Klubben, Langøy","adressenavn":"","longitude":"5.773215"},{"latitude":"59.008497","name":"Kanonstilling, Langøy","adressenavn":"","longitude":"5.765558"}]

     function createList2(){
     for(i =0;i < sLekeplasser.length;i++) {
     var node = document.createElement("LI"); 
     var textnode = document.createTextNode(sLekeplasser[i].name);
     node.appendChild(textnode);
     document.getElementById('myList2').appendChild(node);
    }}

    // Dropdown menyen som vises når skjermen er mindre enn 600px
function dropdownMenu() {
    var mediaq = document.getElementById("navbaren");
    if (mediaq.className === "navbar") {
        mediaq.className += " responsive";
    } else {
        mediaq.className = "navbar";
    }
}