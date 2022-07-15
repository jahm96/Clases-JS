function getRandomInt(min,max){
    return Math.floor (Math.random()*(max - min) + min);
}
function ordenar()
{
    let array = [];

    for (let i = 0;i<10 ; i++)
    {
        array.push (getRandomInt(1,100));
    }
    console.log("Array sin ordenar");
    console.log (array);
    array.sort( function ( a, b) { return a - b });
    console.log("Array ordenador");
    console.log (array);
} 
window.onload = ordenar;