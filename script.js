const btn = document.querySelector(".btn")
const percent = document.querySelector(".percent")
const growth = document.querySelector(".growth")

let grow = 0;

btn.addEventListener("click", function(){
    var int = setInterval(() => {
        grow++
        percent.innerHTML = grow + "%"
        growth.style.width = grow + "%"
       
    }, 50)


    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML = "Completed"
        btn.style.opacity = "0.5"
    },5000)
})