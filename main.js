const form = document.getElementById ("form"); 
const statusInput = document.getElementById ("status")

form.addEventListener("submit", function(event){
    event.preventDefault();

var campoA = parseFloat(document.getElementById("campoA").value);
var campoB = parseFloat(document.getElementById("campoB").value);

if ( campoB > campoA) {
    statusInput.value = "Positivo"
}
else {
    statusInput.value = "Negativo"
}
});
