let val = [0,0,0,0,0,0,0,0,0,0,0];
let num = 0;
for(i=0;i<10;i++){
    num = parseInt(window.prompt("Introduce un número entre 0 y 9"));
    val[i]+=val[num]+1
    console.log(val);
    document.getElementById("main").innerHTML+=`
    <p>${val[i]} ____ ${val[num]}</p>`
};