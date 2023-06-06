const form = document.getElementById ("form"); 

form.addEventListener("submit", function(event){
    event.preventDefault();

var campoA = parseFloat(document.getElementById("campoA").value);
var campoB = parseFloat(document.getElementById("campoB").value);

if ( campoB > campoA) {
    alert ('positivo')
}
else {
    alert ("negativo")
}
});
