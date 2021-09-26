let val = [1,1,1,1,1,1,1,1,1,1];
let num=0;
for(i=0;i<10;i++){
    num = parseInt(window.prompt("Introduce un número entre 0 y 9"));
    val[num]=val[num]*2
    console.log(val);
}