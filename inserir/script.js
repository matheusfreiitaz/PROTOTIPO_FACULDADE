const tarefas = document.getElementById("campo-tarefa");
const adicionar = document.getElementById("btn-adicionar");
const lista = document.getElementById("lista-de-tarefas");

function adicionar1 (){
    const adicionarTarefa = tarefas.value;
    const novoValor = document.createElement("li")
    novoValor.textContent = adicionarTarefa
    lista.appendChild(novoValor)
    tarefas.value ="";
}
adicionar.addEventListener('click',adicionar1)