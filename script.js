let wrapper=document.getElementById("wrapper")
let btn=document.getElementById("btn")

const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


function rand(){
    let hexvalue=Math.floor(Math.random()*15)
    return hex[hexvalue]
}

// console.log(rand())
btn.addEventListener('click',function(){
let colorvalue='#'

for(let i=1;i<=6;i++)
{
colorvalue+=rand()
}

wrapper.style.background=colorvalue
})


// console.log(colorvalue)