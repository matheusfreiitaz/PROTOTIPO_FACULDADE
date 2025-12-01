const botao = document.getElementById("botao")
const lista= document.getElementById("lista")
const tarefa= document.getElementById("novaTarefa") 

function adicionar(){
    const base =tarefa.value;  
    const novoValor =document.createElement("div")
    novoValor.textContent= base;
    lista.appendChild(novoValor)
    tarefa.value="";
   
}
botao.addEventListener('click',adicionar)








