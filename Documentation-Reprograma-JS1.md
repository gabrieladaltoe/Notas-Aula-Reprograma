#### CONDICIONAIS


if (TRUE){

}


O if sempre avalia para verdadeiro. Para trocar a condicional para verdadeiro, tornar o falso em verdadeiro com "!"


* && > e 
* || > ou

* == não checa o tipo de elemento (number ou string)
* === checa o tipo de elemento (number e number, string e string)
* !=
* (>) MAIOR
* (<) MENOR
* (<=) MENOR OU IGUAL
* (>=) MAIOR OU IGUAL

typeof 1 - number
typeof "1" - string
...

~~~~
let x = 1

if (x < 3) {
    console.log ("alo")
    }else if (x===1) {
        console.log(1)
    }else {
        console.log("ola")
    }

alo
~~~~

o código verifica a primeira condição e sai do loop, ou seja, se a primeira condição for verdadeira, ele já dá o resultado. 

~~~~
${} é a mesma coisa que + 
"string" e 'string' - não pode pular linha
`string` pode pular linha

a++ = a + 1
a-- = a - 1
c += 25 
~~~~

####if / else

~~~~
if ([expressão ->true/false]) {
    [codigo a ser executado caso expressão true]
} else if ([expressao 2 > true or false]) {
    else {
        [codigo a ser executado caso expressao e expressao 2 = false]
    }
}
~~~~

####switch / case

~~~~
switch ([valor]) {
    case [1]:
     [codigo a ser executado caso valor 1]
      case [2]:
     [codigo a ser executado caso valor 2]
      case [3]:
     [codigo a ser executado caso valor 3]
      case [4]:
      case [5]
     [codigo a ser executado caso valor == 4 ou 5]
     break

     default:
     [codigo a sr executado caso o valor = qualquer coisa]
}
~~~~

####operador ternário

~~~~
[expressão] ? [se true] : [se não for true] 
[expressão] ? [se true] : [se não for true] : [expressao 2] ? [se expressao 2 true : [se expressao2 for false]
~~~~

sempre terminar com uma condição para se todas as condições forem falsas.


#### Variáveis

let nome_da_variavel =876 // pode ser alterado
const nome_da_constante = 123 // não pode ser alterado

var nome = 1231 // tentar usar o let sempre

if ([expressao]) {
    let_nome_do_let = 12312 // aqui ja mudou o nome da let
    //let_nome_do_let = 12312 // não pode definir uma segunda vez dentro da condição
}

a let dentro do escopo, não é reconhecida fora do bloco. 

