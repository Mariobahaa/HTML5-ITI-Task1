var r = 100;
var g = 100;
var b = 100;

document.querySelector('p').style.color = 'rgb('+r+','+g+','+b+')';

document.querySelector('#r').addEventListener("change",function(){
    r= parseInt(this.value);
    document.querySelector('p').style.color = 'rgb('+r+','+g+','+b+')';
})

document.querySelector('#g').addEventListener("change",function(){
    g= parseInt(this.value);
    document.querySelector('p').style.color = 'rgb('+r+','+g+','+b+')';
})

document.querySelector('#b').addEventListener("change",function(){
    b= parseInt(this.value);
    document.querySelector('p').style.color = 'rgb('+r+','+g+','+b+')';
})
