// CRIANDO UMA LISTA COM TODOS OS PRODUTOS
const produtos = [
    // AQUI CADA BLOCO REPRESENTA UM PRODUTO
    {
        nome: "PLACA DISSUASÓRIA",
        descricao: "Serve como um aviso de proteção e monitoramento do ambiente. Sua presença ajuda a desencorajar ações suspeitas e possíveis tentativas de invasão.",
        imagem: "imagem/placaDissuasoria.png"
    },
    {
        nome: "PAINEL DE CONTROLE",
        descricao: "O cérebro do seu sistema. Com interface intuitiva, permite o acionamento imediato de emergência e o gerenciamento total da segurança da sua residência.",
        imagem: "imagem/painelControle.png"
    },
    {
        nome: "FOTODETECTORES",
        descricao: "Sensores avançados que capturam imagens no momento de uma detecção, permitindo a verificação visual imediata do que ocorre no local.",
        imagem: "imagem/fotoDetector.png"
    },
    {
        nome: "DETECTOR DE ACESSO",
        descricao: "Proteção perimetral para portas e janelas. Identifica qualquer abertura não autorizada e dispara o alerta instantaneamente.",
        imagem: "imagem/sensorAcesso.png"
    },
    {
        nome: "CÂMERAS DE SEGURANÇA",
        descricao: "Monitoramento em alta definição com visão noturna. Tenha olhos em todos os cantos da sua propriedade através do seu smartphone.",
        imagem: "imagem/cameraSeguranca.png"
    },
    {
        nome: "SIRENE DE ALTA POTÊNCIA",
        descricao: "Dissuasão sonora imediata. Projetada para alertar a vizinhança e desestabilizar qualquer invasor através de um alerta sonoro estridente.",
        imagem: "imagem/sirene.png"
    },
    {
        nome: "SENSOR DE MOVIMENTO",
        descricao: "Tecnologia de detecção infravermelha de alta precisão. Identifica movimentos suspeitos em áreas internas com ajuste para evitar falsos alarmes.",
        imagem: "imagem/sensorMovimento.png"
    }
];

// COMO O NOME DIZ AQUI ESTÁ GUARDANDO O PRODUTO QUE ESTÁ NA TELA
let produtoAtual = 0;

// TRAS OS ITENS (IMAGEM,NOME,DESC E BOTOES) PELO ID E CLASS
const imgProduto = document.getElementById("imagemProduto");
const nomeProduto = document.getElementById("nomeProduto");
const descProduto = document.getElementById("descProduto");
const botaoEsquerdo = document.querySelector(".esquerdo");
const botaoDireito = document.querySelector(".direito");

// CRIA UMA FUNÇÃO (telaAtualizada) QUE QUANDO CHAMADA, ELA EXECUTA O BLOCO DENTRO DELA
function telaAtualizada() {
    // TRAS O PRODUTO ATUAL
    const produto = produtos[produtoAtual];

    // TRAS OS ITENS (IMAGEM,NOME E DESC) REFERENTE AO PRODUTO ATUAL
    imgProduto.src = produto.imagem;
    imgProduto.alt = produto.nome;
    nomeProduto.innerText = produto.nome;
    descProduto.innerText = produto.descricao;
}

// IDENTIFICA QUANDO O BOTAO DIREITO É APERTADO, SE APERTADO, ENTAO EXECUTA O BLOCO DENTRO DELE
botaoDireito.addEventListener("click", () => {
    // INCREMENTANDO MAIS 1 AO PRODUTO ATUAL, PASSA PARA O PROXIMO
    produtoAtual++;
    // VERIFICA SE O PRODUTO PASSOU DO ULTIMO, SE PASSOU, AI VOLTA PARA O PRIMEIRO
    if (produtoAtual >= produtos.length) {
        produtoAtual = 0;
    }
    // CHAMANDO A FUNCAO PARA ATUALIZAR AS INFOS DO PRODUTO
    telaAtualizada();
});

// MESMA COISA, MAS AGORA VOLTANDO
botaoEsquerdo.addEventListener("click", () => {
    produtoAtual--;
    if (produtoAtual < 0) {
        produtoAtual = produtos.length - 1;
    }
    telaAtualizada();
 });
