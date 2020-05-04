const interval = setInterval(() =>{
    
    const header = document.querySelector("._3auIg");
    
    if(header){
        console.log(header)
            clearInterval(interval)
    
        //Criando os Buttons
        const button = document.createElement("button")
        
        //Manipulando os Buttons
        button.innerHTML="<p>2X<p>"
        button.classList.add("buttonSpeed")
        header.appendChild(button)


        //Função
        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")
            button.style.color="#07bc4c"
            audios.forEach((audio) => {
                audio.playbackRate = 2;
            })
        })

    }
    
}, 1000)
