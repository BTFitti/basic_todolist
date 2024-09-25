
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function listarTarefas(){
    listElement.innerHTML="";
    tarefas.map((itens)=>{

        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(itens);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href","#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let position = tarefas.indexOf(itens);
        linkElement.setAttribute("onclick", `excluirTarefa(${position})`);

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
       
    })
}
listarTarefas();

function registrar(){
    if(inputElement.value ===''){
        alert("Digite alguma tarefa");
        return false;
    }else{
        let novaTarefa = inputElement.value; 
        tarefas.push(novaTarefa);
        inputElement.value='';       
        listarTarefas();
        salvarTarefas();
    }  
    
} 
buttonElement.onclick = registrar;

function excluirTarefa(position){
    tarefas.splice(position, 1);
    listarTarefas();
    salvarTarefas();
}

function salvarTarefas(){
    localStorage.setItem("@listaTarefas",JSON.stringify(tarefas));
}
