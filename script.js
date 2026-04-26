const personagens = [
    {
    nome: "🔮 Feiticeira",
    img: "./images/feiticeira.png",
    descricao: "Misteriosa e poderosa, você canaliza forças além da compreensão mortal. Sua magia não vem de livros — vem do sangue, da intuição e de um pacto que só você conhece."
    },
  {
    nome: "🧙‍♂️ Mago",
    img: "./images/mago.png",
    descricao: "Inteligente e estratégico, domina o conhecimento e usa magia para controlar o campo de batalha."
  },
  {
    nome: "🏹 Arqueiro",
    img: "./images/arqueiro.png",
    descricao: "Ágil e preciso, você ataca à distância e raramente erra seu alvo."
  },
  {
    nome: "🗡️ Paladino",
    img: "./images/paladino.png",
    descricao: "Silencioso e esperto, resolve problemas com habilidade e estratégia, sempre um passo à frente."
  },
  {
    nome: "🔨 Bárbaro",
    img: "./images/barbaro.png",
    descricao: "Força bruta e coragem definem você. Entra na batalha sem medo e domina com poder."
  }
];

function sortear() {
  const index = Math.floor(Math.random() * personagens.length);
  const p = personagens[index];

  document.getElementById("img").src = p.img;
  document.getElementById("nome").innerText = p.nome;
  document.getElementById("descricao").innerText = p.descricao;

  document.getElementById("card").style.display = "block";
}