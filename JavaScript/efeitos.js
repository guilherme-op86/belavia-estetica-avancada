window.addEventListener("scroll", ()=>{
    //pega os elementos da Daniela
    const textDani = document.querySelector(".apresentacao-dani")
    const daniImage = document.querySelector(".dani-img")

    //pega os elementos da Samira
    const textSamira= document.querySelector(".apresentacao-samira")
    const samiraImage = document.querySelector(".samira-img")

    //efeitos da Daniela
    const triggerPoint = window.innerHeight/1.45
    const textTop = textDani.getBoundingClientRect().top
    const imageTop = daniImage.getBoundingClientRect().top

    //efeitos da Samira
    const triggerPoint2 = window.innerHeight/1.05
    const textTop2 = textSamira.getBoundingClientRect().top
    const imageTop2 = samiraImage.getBoundingClientRect().top

  

    if(textTop < triggerPoint){
        textDani.classList.add("scrollRight")
    }

    if(imageTop < triggerPoint){
        daniImage.classList.add("daniImageScroll")
    }

    if(textTop2 < triggerPoint2){
        textSamira.classList.add("scrollLeft")
    }

    if (imageTop2 < triggerPoint2){
        samiraImage.classList.add("samiraImageScroll")
    }
})

window.addEventListener("load", function(){
    const elementos = this.document.querySelectorAll(".history-title, .apresentacao")

    elementos.forEach(function(elemento){
        elemento.classList.add("sizeEffect")
    })
})

