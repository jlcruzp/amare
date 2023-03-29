import {valida} from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })

})


const textarea = document.querySelectorAll("textarea");

textarea.forEach( textarea => {
    textarea.addEventListener("blur", (textarea) =>{
        valida(textarea.target);
    } )
})