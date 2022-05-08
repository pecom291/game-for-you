document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").addEventListener("keyup", function(){
        let val = this.value;
        localStorage.setItem("name", val)
    })


    let radios = document.querySelectorAll("fieldset input");
    console.log(radios)
    for(let i = 0; i < radios.length; i++){
        radios[i].addEventListener("change", function(){
            localStorage.setItem("genreType",this,value)
        })
    }
})
