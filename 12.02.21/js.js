let but=document.getElementById("but");
but.onclick=function(){
let i1=document.getElementById("in1");
let i2=document.getElementById("in2");
let i=Number(i1.value)+Number(i2.value);
let pp=document.getElementById("my_p");
pp.innerHTML=i;

};


let b2=document.getElementById("myBtn");
b2.onclick=function(){
    let mod=document.getElementById("myModal");
    mod.style.display="block";//none
};


let cl=document.getElementById("cl");
cl.onclick=function(){
    let mod=document.getElementById("myModal");
    mod.style.display="none";//none
};