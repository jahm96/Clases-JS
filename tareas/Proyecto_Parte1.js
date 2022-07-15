class property {
    constructor(kindOfTransaction,placeOfCity,price,currency,quantityOfRooms,address)
    {
        this.kindOfTransaction=kindOfTransaction;
        this.placeOfCity=placeOfCity;
        this.price=parseFloat(price);
        this.currency=currency;
        this.quantityOfRooms=quantityOfRooms;
        this.address=address;
    }
}



const propertys = [];
propertys.push (new property("Compra", "Belgrano", "100000", "USD", "3", "Av Cabildo 2145 7B"));
propertys.push (new property("Compra", "Villa Urquiza", "65000", "USD", "2", "Av Alvarez Thomas 2545 902"));
propertys.push (new property("Compra", "Caballito", "250000", "USD", "5", "Riglos 545 PH"));
propertys.push (new property("Alquier", "Belgrano", "35000", "Pesos", "1", "La Pampa 1955 5F"));
propertys.push (new property("Alquier", "Belgrano", "55000", "Pesos", "2", "Juramento 2257 7B"));
propertys.push (new property("Alquier", "Belgrano", "70000", "Pesos", "3", "Ciudad de La Paz 1222 1C"));
propertys.push (new property("Alquier", "Villa Urquiza", "90000", "Pesos", "4", "Carbajal 4104 8A"));
propertys.push (new property("Alquier", "Villa Urquiza", "60000", "Pesos", "3", "Olazabal 5197 303"));
propertys.push (new property("Alquier", "Villa Urquiza", "30000", "Pesos", "1", "Mariano Acha 2568 2E"));
propertys.push (new property("Alquier", "Caballito", "70000", "Pesos", "3", "Luis Viale 2167"));
propertys.push (new property("Alquier", "Caballito", "85000", "Pesos", "4", "Av Juan B Alberti 1621 11E"));
propertys.push (new property("Alquier", "Caballito", "40000" , "Pesos", "2", "Doblas 554 2H"));


tipoDeOperacion = prompt (`Que tipo de Transccion busca?
                           1 Para Compra
                           2 Para Alquiler`);
if (tipoDeOperacion=="1"||tipoDeOperacion=="compra"||tipoDeOperacion=="Compra"||tipoDeOperacion=="COMPRA")
{
searchType=prompt (`Que busqueda desea hacer?
                    Por barrios
                    Por ambientes
                    Por precio`);
if (searchType=="BARRIOS"||searchType=="barrios"||searchType=="Barrios")
                    {
                    resultado=prompt(`Que barrio desea Buscar?
                                      Belgrano
                                      Caballito
                                      Villa Urquiza`);

                    if (resultado=="Belgrano"||resultado=="BELGRANO"||resultado=="belgrano")    
                    {
                    let buy = propertys.
                    filter (propiedad => propiedad.placeOfCity=="Belgrano")
                    //buscar la manera de filtrar compra
                    {    
                        console.log(buy);
                    }
                    }                             
                    else if (resultado=="Caballito"||resultado=="CABALLITO"||resultado=="caballito") 
                    {
                    let buy = propertys.
                    filter (propiedad => propiedad.placeOfCity=="Caballito")
                    //buscar la manera de filtrar compra
                    {    
                        console.log(buy);
                    }
                    }
                    else if (resultado=="Villa Urquiza"||resultado=="VILLA URQUIZA"||resultado=="villa urquiza") 
                    {
                    let buy = propertys.
                    filter (propiedad => propiedad.placeOfCity=="Villa Urquiza")
                    //buscar la manera de filtrar compra
                    {    
                        console.log(buy);
                    }
                    }
                    else
                    {   alert ("ERROR");}
}
else if (searchType=="ambientes"||searchType=="Ambientes"||searchType=="AMBIENTES")
{
    numer=prompt (`Seleccione cuantos ambientes busca con numero
                   1 Ambiente
                   2 Ambientes
                   3 Ambientes
                   4 Ambientes
                   5 Ambientes`)

                   if (numer="1")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="1")
                   {    
                    console.log(buy);
                   }
                   }
                   else if (numer="2")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="2")
                   {    
                    console.log(buy);
                   }    
                   }
                   else if (numer="3")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="3")
                   {    
                    console.log(buy);
                   }    
                   }
                   else if (numer="4")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="4")
                   {    
                    console.log(buy);
                   }    
                   }
                   else if (numer="5")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="5")
                   {    
                    console.log(buy);
                   }    
                   }
                   else {alert("ERROR")}
}

else if (searchType=="precio"||searchType=="Precio"||searchType=="PRECIO")
{
        cono=prompt (`Tiene algun codigo de descuento?`)
        if (cono=="coder"||cono=="CODER"||cono=="Coder")
        {
            const descuentoCoder= propertys.map(function(descuento)
            {
                propertys.price = property.price * 0,85;
            });
            
            console.log(propertys);
            //no me da el descuento y tampoco la cabeza xd
        }
        cono
        }
}



else if (tipoDeOperacion=="2"||tipoDeOperacion=="alquiler"||tipoDeOperacion=="Alquiler"||tipoDeOperacion=="ALQUILER")
{
searchType=prompt (`Que busqueda desea hacer?
                    Por barrios
                    Por ambientes
                    Por precio`);
if (searchType=="BARRIOS"||searchType=="barrios"||searchType=="Barrios")
{
resultado=prompt(`Que barrio desea Buscar?
                  Belgrano
                  Caballito
                  Villa Urquiza`);
                if (resultado=="Belgrano"||resultado=="BELGRANO"||resultado=="belgrano")    
                    {
                        let buy = propertys.
                        filter (propiedad => propiedad.placeOfCity=="Belgrano")
                        //buscar la manera de filtrar compra
                    {    
                        console.log(buy);
                    }
                    }                             
                else if (resultado=="Caballito"||resultado=="CABALLITO"||resultado=="caballito") 
                    {
                        let buy = propertys.
                        filter (propiedad => propiedad.placeOfCity=="Caballito")
                        //buscar la manera de filtrar compra
                        {    
                            console.log(buy);
                        }
                    }
                else if (resultado=="Villa Urquiza"||resultado=="VILLA URQUIZA"||resultado=="villa urquiza") 
                    {
                        let buy = propertys.
                        filter (propiedad => propiedad.placeOfCity=="Villa Urquiza")
                        //buscar la manera de filtrar compra
                        {    
                        console.log(buy);
                        }
                        }
                else
                    {   alert ("ERROR");}
}
else if (searchType=="ambientes"||searchType=="Ambientes"||searchType=="AMBIENTES")
{
    alert ("rela mano")
    numer=prompt (`Seleccione cuantos ambientes busca con numero
                   1 Ambiente
                   2 Ambientes
                   3 Ambientes
                   4 Ambientes
                   5 Ambientes`)

                   if (numer="1")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="1")
                   {    
                    console.log(buy);
                   }
                   }
                   else if (numer="2")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="2")
                   {    
                    console.log(buy);
                   }    
                   }
                   else if (numer="3")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="3")
                   {    
                    console.log(buy);
                   }    
                   }
                   else if (numer="4")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="4")
                   {    
                    console.log(buy);
                   }    
                   }
                   else if (numer="5")
                   {
                   let buy = propertys.
                   filter (propiedad => propiedad.quantityOfRooms=="5")
                   {    
                    console.log(buy);
                   }    
                   }
                   else {alert("ERROR")}
}
}

else {alert("ERROR")}