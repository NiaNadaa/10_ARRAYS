let valores = [];
for(i=0;i<3;i++){
    valores.push(parseInt(window.prompt("Introduce un número")));
}
console.log(valores);
if(valores[0]<valores[1]&&valores[0]<valores[2]){
    window.alert(`El número menor es ${valores[0]}`)
}else if(valores[1]<valores[0]&&valores[1]<valores[2]){
    window.alert(`El número menor es ${valores[1]}`)
}else{
    window.alert(`El número menor es ${valores[2]}`)
}