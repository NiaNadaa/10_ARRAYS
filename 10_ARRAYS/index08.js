let edad = [];
for(i=0;i<20;i++){
    edad.push(parseInt(Math.random()*(36-20))+20);
}
let media=0;
for(i=0;i<20;i++){
    media += edad[i];
}
console.log(media/10);
