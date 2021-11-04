var dia = new Date()
var hora = dia.getHours()
var minutos = dia.getMinutes()
var tx1 = document.getElementById("bom")
var tx2 = document.getElementById("horario")

tx2.innerHTML = `Agora são exatamente ${hora}:${minutos}!`
if (hora < 12 && hora >= 5){
    console.log("bom dia")
    tx1.innerHTML = `Olá, Bom Dia`
    document.getElementById("imagem").src = "./IMG/dia.jpg"

} else if ( hora <=18 && hora >=12){
    console.log("boa tarde")
    tx1.innerHTML = `Olá, Boa Tarde`
    document.body.style.backgroundColor = "#FF7F50"
    document.getElementById("imagem").src = "./IMG/tarde.jpg"

} else {
    console.log("boa noite")
    tx1.innerHTML = `Olá, Boa Noite`
    document.body.style.backgroundColor = "#334463"
    document.getElementById("imagem").src = "./IMG/night.jpg"

}



