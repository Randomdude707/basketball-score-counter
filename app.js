let leftcounter = document.getElementById("left-counter")
let rightcounter = document.getElementById("right-counter")

countleft = 0
countright = 0

function add1(){
    countleft = countleft + 1
    leftcounter.innerHTML = countleft
}
function add2(){
    countleft = countleft + 2
    leftcounter.innerHTML = countleft
}
function add3(){
    countleft = countleft + 3
    leftcounter.innerHTML = countleft
}
function add1Right(){
    countright = countright + 1
    rightcounter.innerHTML = countright
}
function add2Right(){
    countright = countright + 2
    rightcounter.innerHTML = countright
}
function add3Right(){
    countright = countright + 3
    rightcounter.innerHTML = countright
}
function reset(){
    countleft = 0
    leftcounter.innerHTML = countleft
    countright = 0
    rightcounter.innerHTML = countright
}