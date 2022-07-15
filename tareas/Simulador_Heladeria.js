cantidadDeHelado = prompt (`Ingrese la cantidad de Helado que desea
                                c. Para un Cuarto 
                                m. Para un Medio
                                k. Para un Kilo`);
cantidadDeGustos = prompt (`Ingrese la de gustos que desea
                                Maximo 3 para un Cuarto 
                                Maximo 3 para un Medio
                                Maximo 4 para un Kilo`);


    switch(cantidadDeHelado)
    {
        case"c":
        cuarto ();
        break;
        case"m":
        medio ();
        break;
        case"k":
        kilo ();
        break;

}
function cuarto () {
if (cantidadDeGustos<=3)
        {
            for(i=1;i<=cantidadDeGustos;i++)
            {
                gusto=prompt("Elija su gusto");
                alert ("Usted ha agregado" +gusto)
            }
            alert("Su helado tiene los siguientes gustos"+heladofina )
        }
        else 
        {
            alert ("Demasiados gustos para esta opcion")
        }
    }
function medio () {
    if (cantidadDeGustos<=3)
        {
            for(i=1;i<=cantidadDeGustos;i++)
            {
                gusto=prompt("Elija su gusto")
            }
        }
        else 
        {
            alert ("Demasiados gustos para esta opcion")
        }
}
function kilo() {
    if (cantidadDeGustos<=4)
        {
            for(i=1;i<=cantidadDeGustos;i++)
            {
                gusto=prompt("Elija su gusto");
                
                
            }
        }
        else 
        {
            alert ("Demasiados gustos para esta opcion")
        }
}