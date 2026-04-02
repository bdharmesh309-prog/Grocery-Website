let btnadd=document.getElementById('add')
let btncan=document.getElementById('can')
let disp=document.getElementById('dis')

let count=0

function add() 
{
    count++
    disp.textContent = count*30
}
btnadd.addEventListener('click',add)

function can() 
{
    count--
    disp.textContent = count*30
}
btncan.addEventListener('click',can)




let btnaddd=document.getElementById('addd')
let btncann=document.getElementById('cann')
let dispp=document.getElementById('diss')

let countt=0

function addd() 
{
    countt++
    dispp.textContent = countt*15
}
btnaddd.addEventListener('click',addd)

function cann() 
{
    countt--
    dispp.textContent = countt*15
}
btncann.addEventListener('click',cann)



let btnadddd=document.getElementById('adddd')
let btncannn=document.getElementById('cannn')
let disppp=document.getElementById('disss')

let counttt=0

function adddd() 
{
    counttt++
    disppp.textContent = counttt*50
}
btnadddd.addEventListener('click',adddd)

function cannn() 
{
    counttt--
    disppp.textContent = counttt*50
}
btncannn.addEventListener('click',cannn)

let btnaddddd=document.getElementById('addddd')
let btncannnn=document.getElementById('cannnn')
let dispppp=document.getElementById('dissss')

let countttt=0

function addddd() 
{
    countttt++
    dispppp.textContent = countttt*100
}
btnaddddd.addEventListener('click',addddd)

function cannnn() 
{
    countttt--
    dispppp.textContent = countttt*100
}
btncannnn.addEventListener('click',cannnn)

let btnadddddd=document.getElementById('adddddd')
let btncannnnn=document.getElementById('cannnnn')
let disppppp=document.getElementById('disssss')

let counttttt=0

function adddddd() 
{
    counttttt++
    disppppp.textContent = counttttt*80
}
btnadddddd.addEventListener('click',adddddd)

function cannnnn() 
{
    counttttt--
    disppppp.textContent = counttttt*80
}
btncannnnn.addEventListener('click',cannnnn)


let btnaddddddd=document.getElementById('addddddd')
let btncannnnnn=document.getElementById('cannnnnn')
let dispppppp=document.getElementById('dissssss')

let countttttt=0

function addddddd() 
{
    countttttt++
    dispppppp.textContent = countttttt*300
}
btnaddddddd.addEventListener('click',addddddd)

function cannnnnn() 
{
    countttttt--
    dispppppp.textContent = countttttt*300
}
btncannnnnn.addEventListener('click',cannnnnn)





let total=0;
function addamount(price) 
{
        total += price;
        document.getElementById("totalamount").innerText = total;    
}

function canamount(price) 
{
        total -= price;
        document.getElementById("totalamount").innerText = total;    
}