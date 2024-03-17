//massive/array
var too=5;
// []-> massive
//var toonuud=[5,6,3,7,100];
//console.log(toonuud);
// index -> elementiin bairshil. 0-ees ehelne
/*console.log(toonuud[[0]]);
var test=["text", 20, true,null]
console.log(test[test.length-1]);
var fruits=["mandarin", "orange", "apple" ,"banana", "kiwi"];
console.log(fruits[fruits.length-1])
console.log(fruits[0])*/

/*var numbers=[1, 12, 23,34,45];
for(var i=0; i<=numbers.length-1; i++){
    console.log(numbers[i]);
}*/
/*var numbers=[1,2,3,4,5]
console.log(numbers[0]*numbers[numbers.length-1])*/

/*var numbers=[1,2,3,4,5,6,7,8,9,11];
var B=0
for(var i=0; i<=numbers.length-1; i++){
    B=B+numbers[i];
}
console.log(B)

var numbers=[1,2,3,4,5,6,7,8,9,11];
var a=1
for(var i=0; i<=numbers.length-1; i++){
    a=a*numbers[i];
}
console.log(a)*/

/*var too=[11,-32,36,-40,55]
for(var i=0; i<=too.length-1; i++){
    if(too[i]%2==0){
        console.log("Tegsh too "+too[i])
        if(too[i]>=0){
            console.log("Eyreg")
        }if(too[i]<0){
            console.log("Surug")
        }
    }
    if(too[i]%2>0){
        console.log("Sondgoi too "+too[i])
        if(too[i]>=0){
            console.log("Eyreg")
        }if(too[i]<0){
            console.log("Surug")
        }
    }
}*/
var colors=["red" ,"blue","green", "brown", "purple"]
var body=document.getElementsByTagName('body')[0];
var p=document.getElementsByTagName('p')[0];
var a=-1
function changeColor(){
    a++
    body.style.backgroundColor=colors[a];
    p.style.color=colors[a]
    p.innerText=colors[a]
    if(a>colors.length-1){
        a=-1;
        changeColor();
    }
}
function back(){
    a--
    body.style.backgroundColor=colors[a];
    p.style.color=colors[a]
    p.innerText=colors[a]
    if(a<0){
        a=colors.length
        back()
    }
}
//setTimeout -> func meden millisecond daraa ajillahig tohiruulna 1000ms=1s
var up;
function auto(){
    a++
    body.style.backgroundColor=colors[a];
    p.style.color=colors[a]
    p.innerText=colors[a]
    if(a>colors.length-1){
        a=-1;
        changeColor();
    }
    up= setTimeout(auto,700)
}
function stop(){
    clearTimeout(up)
}