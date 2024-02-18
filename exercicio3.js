let escolha1 = prompt("Qual área você quer seguir? Digite Front-End ou Back-End para escolher essa área");

if (escolha1 == "Front-End") {
    let FrontEnd1 = prompt("Já que escolheu essa área, você quer aprender React ou aprender Vue?")
}
else if(escolha1 == "Back-end") {
    let BackEnd1 = prompt("Já que escolheu essa área, você quer aprender C# ou aprender Java?")
}
else {
    window.alert("Ops!!! Você digitou errado a resposta escolhida, recarregue o site para tentar denovo.")
}

let escolha2 = prompt(`Você tem certeza que quer continuar especializando na área de ${escolha1} ou se tornar um Fullstack? Digite novamente a área escolhida para confirmar`)

if (escolha2 == "Front-end") {
    window.alert("Ótimo, agora você está numa área de criar partes visuais de um site")
}
else if (escolha2 == "Back-end") {
    window.alert("Ótimo, agora você está numa área das funcionalidades do sistema ou do site.")
}
else if (escolha2 == "Fullstack") {
    window.alert("Ótimo, agora você desenvolverá um sistema inteiro por completo")
}
else {
    window.alert("Ops!!! Você digitou errado a resposta escolhida ou não repondeu nada, recarregue o site para tentar denovo ou prossiga se quiser.")
}

let escolha3 = prompt("Quais tecnologias a mais você gostaria de se especializar ou de conhecer?")

let escolha4 = window.confirm("Tem mais tecnologias que você gostaria de aprender?")

while (escolha4 == true) {
    let resposta = prompt("Quais tecnologias a mais você gostaria de se especializar ou de conhecer?")
    window.alert("Legal continue assim!")
    escolha4 = window.confirm("Tem mais tecnologias que você gostaria de aprender?")
}