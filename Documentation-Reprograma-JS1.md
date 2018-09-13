#### CONDICIONAIS


if (TRUE){

}


O if sempre avalia para verdadeiro. Para trocar a condicional para verdadeiro, tornar o falso em verdadeiro com "!"


* && > e 
* || > ou

* == não checa o tipo de elemento (number ou string)
* === checa o tipo de elemento (number e number, string e string)
* != diferente
* (>) MAIOR
* (<) MENOR
* (<=) MENOR OU IGUAL
* (>=) MAIOR OU IGUAL

Para saber se o elemento é uma string, number ou boolean, podemos usar o typeof

~~~~
typeof 1 - number
typeof "1" - string
...
~~~~

Vemos aqui um exemplo:
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

O código verifica a primeira condição e sai do loop, ou seja, se a primeira condição for verdadeira, ele irá dar o resultado. 

#### Cocatenação

${} é a mesma coisa que + 
Quando usamos string com as aspas normais, como "string" e/ou 'string', não podemos pular linhas no código. 
Já usando acento grave, como em `string`, podemos pular linhas.

Outro exemplo: 

~~~~
a++ = a + 1
a-- = a - 1
c += 25 
~~~~

#### If / else

~~~~
if ([expressão ->true/false]) {
    [codigo a ser executado caso expressão true]
} else if ([expressao 2 > true or false]) {
    else {
        [codigo a ser executado caso expressao e expressao 2 = false]
    }
}
~~~~

#### Switch / case

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

#### Operador ternário

~~~~
[expressão] ? [se true] : [se não for true] 
[expressão] ? [se true] : [se não for true] : [expressao 2] ? [se expressao 2 true : [se expressao2 for false]
~~~~

Quando usar operador ternário, sempre terminar com uma condição para se todas as condições forem falsas.


#### Variáveis

~~~~
let nome_da_variavel = 876 // pode ser alterado
const nome_da_constante = 123 // não pode ser alterado
~~~~

~~~~
if ([expressao]) {
    let_nome_do_let = 12312 // aqui ja mudou o nome da let
    //let_nome_do_let = 12312 // não pode definir uma segunda vez dentro da condição
}
~~~~

Uma let dentro do escopo, não é reconhecida fora do bloco. 


#### Loop

[Sintaxe](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)
[Artigo no medium com animação](https://medium.freecodecamp.org/want-to-learn-about-javascripts-for-loops-this-animated-scuba-diver-can-help-76a038a09cc8)


~~~~
for ([inicialização]; [condição]; [expressão final]){
    declaração
}
~~~~

   Isto é,

~~~~
for (let i=0; i<10 ; i++) {
    [codigo que vai rodar varias vezes // ou não]
    console.log(i)
}
~~~~ 

    Isto é, 

~~~~
for (let i=0; i<10 ; i++){
	console.log(i)
}
VM60:2 0
VM60:2 1
VM60:2 2
VM60:2 3
VM60:2 4
VM60:2 5
VM60:2 6
VM60:2 7
VM60:2 8
VM60:2 9
undefined
~~~~

~~~~
for (let i=0; i<10 ; i++){
	console.log(i)
}

let contador = 0
while (contador < 10) {
    console.log(contador)
    contador ++ // contador = contador +1
}


let rand = 0
while (rand < 0.5) {
    rand = Math.randon()
    console.log(rand)
}
~~~~

#### Array

let arr = [[[[[]]]], true, 8754, "string" ]

primeiro elemento da array = 0, 
segundo  elemento da array = 1, 
e assim sucessivamente

para acessar o elemento 2 da arr, 

~~~~
arr[2]
~~~~

arr.legth /// retorna o numero de elementos da array

#### Função

~~~~
function test() {return 10}
~~~~

ao chamar  
~~~~
test3 = test()
10 // retorna a função
~~~~

~~~~
function divisao(divisor,dividendo) {
    return dividendo / divisor
}

divisao (8,10)
~~~~

Quando uma função recebe um argumento, não tem um return, e muda apenas o argumento, ela é chamada de `side effect`.

Exemplo:

~~~~

const x =[]

function push10(arr){
    arr.push(10)
}
push10(x)
>>> [10,10]
~~~~

~~~~
const x =[]

function push10(arr){
    arr.push(10)
}
push10(x)
undefined
x
[10]0: 10length: 1__proto__: Array(0)
~~~~

O [Spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator) ajuda a não mudar o objeto da função. 




