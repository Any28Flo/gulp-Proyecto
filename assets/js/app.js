var imprimerNumeros = function(){
    
    var arreglo = [3,2,4,2];
    
    arreglo.forEach(function(elemento,indice){
       var resultado=  elemento*indice;
        console.log(resultado)
    })
}
var saluda = function(){
    console.log("hola");
}

saluda();