var nombre = prompt("Nombre Completo");
var dia = prompt("Dia de Nacimiento");
var mes = prompt("Mes de Nacimiento");
var años = prompt("Año de Nacimiento");
var conyugue = prompt('Tiene Conyuge  "SI / NO"');
var hijos = prompt('Tiene Hijos  "SI / NO"');
var cantidadhijos = prompt("Cuantos Hijos Tiene");
var boton = document.getElementById("boton");

var edad = años
var comision = 0;
var precioBase = 250;
var recargos = 0;
var totalPagar = 0;
var nrecargo="no aplica Recargos"
var edadR = 0;
var conyugueR = 0;
var hijosR = 0;
var edadConyugue = 0;
var edadhijos = 0;

if (conyugue == "SI") {
   var edadConyugue = (prompt("Ingrese la edad de su cónyugue"));
}
if (edadConyugue <=29) {
  conyugueR = precioBase * 0.01
}
else if (edadConyugue >=30) {
  conyugueR = precioBase * 0.02
}
else if (edadConyugue >=40) {
  conyugueR = precioBase * 0.03
}
else if (edadConyugue >=50 && edadConyugue <=70) {
  conyugueR = precioBase * 0.05
}

if (hijos == "SI") {
   var edadhijos = parseInt(prompt("Ingrese la cantidad de hijos menores de 21 años"));
}
if (edadhijos > 0){
hijosR = precioBase * 0.01 * edadhijos
}

if(edad <= 17){
document.write("El Asegurado debe de ser mayor de 18 años");
}
else if(edad < 21)
{
document.write(nrecargo);
}
else if(edad >= 21)
{
  edadR = precioBase * 0.01
}
else if(edad >= 25)
{
  edadR = precioBase * 0.02
}
else if(edad >= 30)
{
    edadR= precioBase * 0.05
}
else if(edad >= 40)
{
  edadR = precioBase * 0.08
}
else if(edad >= 50)
{
    edadR = precioBase * 0.12
}
else if(edad >= 65)
{
    edadR = "no aplica recargos"
}

edad = 2020 - años;

if( edad <= 17){
  totalPagar = 0;
  precioBase = 0;
  comisio = 0;
  recargos= 0;
  hijosR = 0;
  conyugueR = 0;
  edadR = 0;
  document.write("<br> <strong> CONTIZACIÒN DE SEGUROS  TK-U </strong>");
  document.write("<br> <strong> Nombre Completo: </strong>" + nombre );
  document.write("<br> <strong>Fecha de nacimiento:</strong> " + dia + "/" + mes + "/" + años);
  document.write("<br> <strong>Edad del Asegurado:</strong> " + edad);
  document.write("<br> <strong> Tiene Conyugue: </strong> " + conyugue);
  document.write("<br> <strong> Tiene Hijos: </strong> " + hijos + "<strong> Cuantos Hijos Tiene: </strong>" + cantidadhijos);
  document.write("<br> <strong> Recargos por edad del Asegurado: </strong>Q" + edadR);
  document.write("<br> <strong> Recargos por conyugue: </strong>Q" + conyugueR);
  document.write("<br> <strong> Recargos por hijos menores de 21 años:   </strong>Q" + hijosR);
  document.write("<br> <strong> Total a Pagar es:</strong> Q"  + totalPagar);
  document.write("<br> <strong>El asegurado principal debe ser mayor de 18 años, de lo contrario no se le puede asegurar. </strong>");
  }

if( edad >= 18){
totalPagar = precioBase + comision + recargos + hijosR + conyugueR + edadR;
document.write("<br> <strong> CONTIZACIÒN DE SEGUROS  TK-U </strong>");
document.write("<br> <strong> Nombre Completo: </strong>" + nombre );
document.write("<br> <strong>Fecha de nacimiento:</strong> " + dia + "/" + mes + "/" + años);
document.write("<br> <strong>Edad del Asegurado:</strong> " + edad);
document.write("<br> <strong> Tiene Conyugue: </strong> " + conyugue);
document.write("<br> <strong> Tiene Hijos: </strong> " + hijos + "<strong> Cuantos Hijos Tiene: </strong>" + cantidadhijos);
document.write("<br> <strong> Recargos por edad del Asegurado: </strong>Q" + edadR);
document.write("<br> <strong> Recargos por conyugue: </strong>Q" + conyugueR);
document.write("<br> <strong> Recargos por hijos menores de 21 años:   </strong>Q" + hijosR);
document.write("<br> <strong> Total a Pagar es:</strong> Q"  + totalPagar);
}
