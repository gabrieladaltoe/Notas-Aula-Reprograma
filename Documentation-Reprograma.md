#### Como usar `rem`
~~~~
html {
    font-size: 10px;
}

h1 {
    font-size: 3.2rem;
}
~~~~

#### Como usar porcentagem

Geralmente usar em width, levando em conta que não conseguimos ter certeza do tamanho do navegador do usuário. 


#### Webkit

~~~~
div{
    -ms-border-radius: 10px;
    -moz-border-radius: 10px;
}
~~~~

Acessar sempre [www.caiuse.com](www.caiuse.com) para conferir o comportamento do servidor.

#### Display Flex

[Utilizar esse link para consulta](css-tricks.com/snippets/css/a-guide-to-flexbox)

#### Position 
* Relative
* Absolute
* Fixed
* Static

[Um bom link no Medium](https://medium.com/@jacobgreenaway12/taming-the-css-beast-master-positioning-5882bad14458)

#### Botões

O botão submit vai enviar o formulário para o banco de dados.
~~~~
<button>
<input type="Submit"> 
~~~~

IE7 possui um bug ao enviar um formulário com 
~~~~
<button type="submit" name="myButton" value="foo">Click me</button>
~~~~
, os dados POST  enviados terá como resultado em myButton=Click me em vez de myButton=foo.
IE6 possui um bug ainda pior quando enviado um formulário através de um botão por enviar TODOS os botões do formulário com o mesmo bug do IE7.
Esse bug foi corrigido no IE8.
~~~~
<button type="button">Click Me!</button>
~~~~

#### Mobile First

Começar a fazer o site a partir do media query. 
Menor para maior e min-width


* Desktop: começar do maior para o menor, isto é, os tamanhos dos media querys devem sempre ser max-width. 
* Mobile First: começar o código do menor para o maior, isto é, os tamanhod do media query devem ser sempre min-width.

Tablet
~~~~
@media screen and ( max-width: 768px) {
}
~~~~

Celular
~~~~
@media screen and (max-width: 420px) {  
}

..
