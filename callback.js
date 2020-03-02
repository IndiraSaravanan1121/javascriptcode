var div1 = document.getElementById('first');
var div2 = document.getElementById('second');
var div3 = document.getElementById('third');

function makeOrange(element){
    element.style.backgroundColor=('orange');
}

function makeGreen(element){
    element.style.backgroundColor=('green');
}

function addColor(element,callback){
    callback(element);
}

addColor(div1,makeOrange);
addColor(function makeGreen(element){
    element.style.backgroundColor=('green');
});