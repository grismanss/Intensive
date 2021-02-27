//var a;
let b1=5;
let b2=17
console.log("Привет МИР!");
let b3="5";
let b4="15";

console.log(b1/b2);
console.log(b3+b4);

let mas1=[111,22,3,12,44];
console.log(mas1[2]);

//если 1 элемент 
//больше второго вывести 1
//в противном случае 2й
//> < >=  <=   !=  

if (mas1[0]>mas1[1]){       
    console.log(mas1[0]);
}
else{
    console.log(mas1[1]);
}
//mas1.length количество элементов в массиве
for (let i=0; i<mas1.length; i++){
    //console.log(mas1[i]);
    mas1[i]=mas1[i]*2;
}
console.log(mas1);

let my_b=document.getElementById("my_b");

//Функция, которая 
//сработает при нажатии кнопки
my_b.onclick=function(){
    let my_b=document.getElementById("my_p");
    my_b.innerHTML="Привет мир!!!!";
};

let my_b2=document.getElementById("my_b2");
my_b2.onclick=function(){
    let my_b=document.getElementById("my_p");
    my_b.style.color="red";
    my_b.style.fontSize="40pt";
}



let my_b3=document.getElementById("my_b3");
my_b3.onclick=function(){
    let my_b=document.getElementById("my_p");
    my_b.style.display="none";

}

let my_b4=document.getElementById("my_b4");
my_b4.onclick=function(){
    let my_class=document.getElementsByClassName("myclass");
    for (let i=0; i<my_class.length; i++ )
        my_class[i].style.color="red";
   
}


let my_b5=document.getElementById("my_b5");
my_b5.onclick=function(){
    let in1=document.getElementById("in1");
    let txt=in1.value;
    let in2=document.getElementById("in2");
    in2.value=txt*5;
};

/*Создать на странице два инпута
и кнопку при нажатии на кноку происходит + - * /
вывод результатов произвести в теги <p> */
