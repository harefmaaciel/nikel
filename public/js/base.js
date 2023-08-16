
let pessoaDefalt = {
    nome: "Haref MAciel",
    idade: "35",
    trabalho: "Programador"

}

let nomes = ['Haref MAciel','Maria Araujo','Rodrigo Alves','Deborah Guedes']
let pessoaListaVazia = []
let pessoas = [

    {nome: "Haref MAciel",
    idade: "35",
    trabalho: "Programador"}, 
    
    {nome: "Deborah Guedes",
    idade: "29",
    trabalho: "Design"}
]

function alterarNome() {
    nome2 = 'Marcos Andrade'
    console.log(nome2)
}  

//alterarNome()
//alterarNome()

function recebeEalternome (novoNome){

    nome2 = novoNome
    console.log("O novo nome alterado é: " )
    console.log(nome2) 
}

function imprimirPessoa (pessoa) {
    
    
    console.log("Nome: " + pessoa.nome)
    console.log("Idade: " + pessoa.idade)
    console.log("Trabalho: " + pessoa.trabalho)
}


function adicionarPessoa (pessoa){
pessoas.push(pessoa)
} 

function imprimirPessoas () {
    console.log("-----------IMPRIMIR PESSOAS-------")
    pessoas.array.forEach(item => {
    console.log("Nome: ")
    console.log(item.nome)   
    console.log("Idade: " + item.idade)
    console.log("Trabalho: " + item.trabalho) 
        
    });
} 
imprimirPessoas() 

adicionarPessoas ({
nome: 'Pedro Silva',
idade: '28',
trabalho: 'Recepcioista'

})

imprimirPessoas()




//console.log(pessoas[1])
//imprimirPessoa(pessoaDefalt)

//imprimirPessoa({
//    nome: "Marcia Marques",
//    idade: "24",
//  trabalho: "Designer"
//})
    


//recebeEalternome("Rodrigo Pereira")
//recebeEalternome("Francisco Pedro")
