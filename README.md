## Índice


  - [Resumo do projeto](#resumo-do-projeto)
  - [Objetivos de aprendizagem](#objetivos-de-aprendizagem)
  - [Orientações:](#orientações)
  - [Critérios de aceitação](#critérios-de-aceitação)
  - [Links utéis:](#links-utéis)
  - [Dicas](#dicas)

***

## Resumo do projeto


<img src="https://img.freepik.com/vetores-gratis/mulher-cliente-fazendo-compras-com-conceito-de-carrinho-de-mao_40876-2550.jpg" alt="Instagram post dia do garçom ilustrado preto e amarelo" width="300">



Como um cliente interessado em fazer compras online, eu gostaria de simular um carrinho de compras para adicionar produtos, visualizar os itens escolhidos, calcular o subtotal de cada produto e o valor total da compra, para poder tomar decisões de compra mais informadas.



## :computer: Objetivos de aprendizagem
  
  
### JavaScript:

- Saída de dados com `alert()`
- Variáveis e constantes 
- Entrada de dados com `prompt()`
- Entrada de dados e uso de variáveis

### Git e GitHub:

- Uso de comandos de git: `git add` `git commit` `git pull` `git push`
- Gerenciamento de repositorios de GitHub (clone e fork)



##  :bangbang: Orientações:

- O trabalho pode ser feito em dupla ou individual.
- O projeto deverá ser entregue subindo o seu código no GitHub (commit/push) em seguida o link do repositório deverá ser enviado na atividade na plataforma da Campinho Digital.
- Abra o arquivo `index.js` no seu editor de código preferido.
- Faça o fork desse repo: https://github.com/campinho-digital/Como-fazer-um-Fork e adicione os demais participantes 
- use`npm start` => para rodar o seu projeto
  

##  :white_check_mark: Critérios de aceitação

- Como cliente, desejo adicionar produtos ao carrinho de compras informando o nome, preço e quantidade de cada item.
- Como cliente, desejo visualizar os produtos adicionados ao carrinho, incluindo o nome, preço unitário, quantidade e subtotal de cada item.
- Como cliente, desejo ver o valor total da compra, calculado somando os subtotais de todos os itens no carrinho.


### :link:  Links utéis:

[Constantes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
[Sintaxe e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
[Diferenças de var const e let](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)
[Prompt](https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt)
[Alert](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert)
[Convertendo String para Inteiro](https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript)


## :shipit: Dicas


### Prompt: 

[Instalando prompt](https://www.npmjs.com/package/prompt-sync)

- CERTIFIQUE-SE DE ESTAR NO CAMINHO CORRETO
  
~~~javascript
npm i prompt-sync
~~~


 - Certifique-se de estar com a sua maquina configurada de acordo com as aulas vistas anteriormente.

 - Lembre se que o método `prompt()` em JavaScript retorna uma string. Ele exibe uma caixa de diálogo que permite ao usuário inserir um texto e retorna esse texto como uma string. 
para efetuar uma operação matemática precisamos trabalhar com números ou seja será preciso converter nosso tipo string para um tipo number :arrow_heading_down:


~~~javascript
let stringNumero = "123";
let numeroInteiro = parseInt(stringNumero);
console.log(numeroInteiro); // Saída: 123
~~~


- os parênteses (()) são usados para controlar a ordem de avaliação das expressões em uma operação. Isso é conhecido como precedência de operadores.

#####  Neste caso, de acordo com a precedência de operadores padrão, a multiplicação (*) é avaliada antes da adição (+), resultando em 3 * 4 = 12, e então 2 + 12 = 14.
~~~javascript
let resultado = 2 + 3 * 4;
console.log(resultado); // Saída: 14
~~~

##### Agora, se quisermos que a adição seja avaliada antes da multiplicação, podemos usar parênteses para forçar a ordem de avaliação como abaixo, os parênteses indicam que a adição deve ser feita primeiro, resultando em 2 + 3 = 5, e então 5 * 4 = 20.

~~~javascript
let resultado = (2 + 3) * 4;
console.log(resultado); // Saída: 20
~~~




