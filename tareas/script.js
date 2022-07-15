/*console.log('Hola Mundo dentro del archivo js');

let numero = Number(prompt("Ingrese un numero"))
let resultado=0;
for(let i=1;i<= numero;i++)
{
    resultado=resultado+i;
}
console.log(resultado);
*/

/* Seleccione una opcion 
    1 Suma
    2 Resta
    3 Multiplicacion 
    4 Dividir 
    5 Fin 
 revisar




baseRectangulo=0;
alturaRectangulo=0;
alturaTriangulo=0;
baseTriangulo=0;
resultado;

let opcion = prompt(`Ingrese una opcion:
T. Triangulo
R. Rectangulo
C. Circulo
F. FIN`);

let finProceso = "FIN";

while(opcion!==finProceso)
{
    let opcion = prompt(`Ingrese una opcion:
T. Triangulo
R. Rectangulo
C. Circulo
F. FIN`);
if (opcion!=="T" && 
    opcion!=="R" && 
    opcion!=="C" && 
    opcion!=="FIN")
{   
    alert("Opcion invalida")
}
else if (opcion === "T")
{
    let alturaTriangulo = prompt("Ingrese la base del triangulo:");
    let baseTriangulo = prompt("Ingrese la altura del triangulo");
    let resultado = (alturaTriangulo*baseTriangulo)/2;
}
else if (opcion ==="R")
{
    let alturaTriangulo = prompt("Ingrese la base del triangulo:");
    let baseTriangulo = prompt("Ingrese la altura del triangulo");
    let resultado = (alturaRectangulo*baseRectangulo);
}
}
*/


var sum = 0;
            var arr01 = [];
            for(var i=1;i <=100;i++){
                if(i%7 == 0){
                    arr01.push(i);
                    sum=sum+i;
                }
            }

