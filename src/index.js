const prompt = require("prompt-sync")();
let alert = require("alert"); 
let produtos = [];
let carrinho = [];
function cadastrarProduto() {
  let nome = prompt("Informe o nome do produto: ");
  let preco = parseFloat(prompt("Informe o preço do produto: "));
  let qtdCadaItem = parseInt(prompt("Informe a qtdCadaItem: "));
  let subTotal = preco * qtdCadaItem;
  const novoProduto = {
    nome: nome,
    preco: preco,
    qtdCadaItem: qtdCadaItem,
    subTotal:subTotal
  };
  produtos.push(novoProduto);
  console.log(`Produto "${nome}" cadastrado com sucesso!`);
  console.log(produtos);
}

function adicionarCarrinho() {
  let listaProdutos = "Adicionar Produtos ao Carrinho:";
  for (let i = 0; i < produtos.length; i++) {
    listaProdutos += `ID: ${i + 1} - Nome: ${produtos[i].nome} - Preço: ${
      produtos[i].preco
    } - Quantidade De Cada Item: ${produtos[i].qtdCadaItem}`;
  }

  const escolha = parseInt(
      prompt(listaProdutos + "\nDigite o número do produto:")
    );

   if (escolha >= 1 && escolha <= produtos.length) {
     const produtoEscolhido = produtos[escolha - 1];
     carrinho.push(produtoEscolhido);
     console.log(`${produtoEscolhido.nome} foi adicionado ao carrinho.`);
   } else {
     console.log("Escolha inválida. Tente novamente.");
   }
}

function visualizarCarrinho() {
  let totalCompra = 0;
  let itemsCarrinho = "Itens no carrinho:\n";
  for (let item of carrinho) {
    itemsCarrinho += `Nome: ${item.nome} - R$ Preço: ${item.preco} - Quantidade De Cada Item: ${item.qtdCadaItem} - SubTotal: ${item.subTotal}`;
    totalCompra += item.subTotal;
  }
   console.log(itemsCarrinho);
   const total = totalCompra;
   console.log("Total é: " + total);
}

function executarCarrinho() {
  while (true) {
    const op = prompt(
      "Escolha uma opção: 1 - Cadastrar Produto 2 - adicionarCarrrinho - 3 visualizarCarrinho 4 - Sair: "
    );
    switch (op) {
      case "1":
        cadastrarProduto();
        break;
      case "2":
        adicionarCarrinho();
        break;
      case "3":
        visualizarCarrinho();
        break; // Sair da função
      case "4":
        return;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  }
}

executarCarrinho();
