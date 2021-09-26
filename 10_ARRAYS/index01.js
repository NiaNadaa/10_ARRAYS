let animales = ["gato","león","hormiga","jirafa","serpiente","ratón","ballena","loro","vaca","mosca"];
console.log(animales.length);
for(i=0;i<animales.length;i++){
    document.getElementById("main").innerHTML+=`
    <p>${animales[i]}</p>`
    console.log(animales[i]);
};