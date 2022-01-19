/*
var nome = "Victor Kitaoka";
var idade = 27;
var idade2 = 10;
var frase ="Japão é o melhor time do mundo";
alert(frase.replace("Japão", "Brasil"));
console.log(nome)
console.log(idade + idade2)
console.log(frase.replace("Japão", "Brasil"));


var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop()
console.log(lista)


//var frutas = {nome:"maçã", cor:"vermelha"}
//console.log(frutas); 
//console.log(fruta.join(" - "));
//alert(frutas.nome);

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas); 
alert(frutas[1].cor);

var idade = prompt("Qual sua idade?")
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};

var count = 0;
while(count<=5){
    console.log(count);
    alert(count)
    count = count +1;
}


var count;
for(count = 3; count <=5; count++){
    alert(count);
}
*/

var d = new Date();
alert(d.getMonth() +1);
alert(d.getHours());