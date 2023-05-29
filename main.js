console.log("hello world")
const message = {
    premierePartie : ["Votre chat", "Le voisin", "La Terre", "Votre esprit"],
    deuxiemePartie : ["est", "mangera", "louera", "regarde"],
    troisiemePartie : ["une Bentley Continental GT", "le croque monsieur que vous avez mis de côté" , "Kotaro de \"Kotaro en solo\"", "le disque de Black Ops II"],
}
let messageCree = ""
function creerLeMessage(){
    let messagesStockes = []
    messagesStockes.push(message.premierePartie[Math.floor(Math.random()*message.premierePartie.length)])
    messagesStockes.push(message.deuxiemePartie[Math.floor(Math.random()*message.deuxiemePartie.length)])
    messagesStockes.push(message.troisiemePartie[Math.floor(Math.random()*message.troisiemePartie.length)])
    console.log(messagesStockes.join(" "))
}
creerLeMessage()