var acumulador = 0;
for (var i=0;i<=2;i++)
{
	var nota1= Number(prompt("ingrese el valor de la nota"));
	acumulador= acumulador + nota1;
}	
	var promedio = acumulador / 3;
	alert ("Total de notas Acumuladas:" + acumulador)
	alert ("Promedio general es:" + promedio)