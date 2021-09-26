let valores = [];
for(i=0;i<10;i++){
    valores.push(window.prompt("Escribe un número"));
}
console.log(valores);
for(i=0;i<10;i++){
    document.getElementById("main").innerHTML+=`<p>${valores[i]}</p>`
}