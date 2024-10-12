const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function cliqueinobotao(){
    form.style.left = "40%"
    form.style.transforme = " translateX(-50%)"
    mascara.style.visibility = "visible"
}
function cliqueinamascara(){
    form.style.left = "-300px"
    form.style.transforme = " translateX(0s)"
    mascara.style.visibility = "hidden"

}