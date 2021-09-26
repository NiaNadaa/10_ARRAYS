let numeros = [];
for(i=20;i>10;i--){
    numeros.push(i);
    console.log(numeros);
}
for(i=0;i<10;i++){
    document.getElementById("main").innerHTML+=`<p>${numeros[i]}</p>`
}