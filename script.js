const btn = document.querySelector(".btn")
const percent = document.querySelector(".percent")
const growth = document.querySelector(".growth")

let grow = 0;

btn.addEventListener("click", function(){
    setInterval(() => {
        if(grow > 100){
            
            clearInterval()
            btn.innerHTML = "Completed"
            btn.style.opacity = "0.5"
            return grow
        }
        
        percent.innerHTML = grow + "%"
        growth.style.width = grow + "%"
        grow++
    }, 50)


   
})