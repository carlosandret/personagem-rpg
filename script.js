const personagens = [
  {
    nome: "⚔️ Guerreiro",
    img: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
    descricao: "Corajoso e forte, você enfrenta qualquer desafio de frente. Sempre pronto para proteger seus aliados."
  },
  {
    nome: "🧙‍♂️ Mago",
    img: "https://images.unsplash.com/photo-1579370318442-ec0e6b6c6d6f",
    descricao: "Inteligente e estratégico, domina o conhecimento e usa magia para controlar o campo de batalha."
  },
  {
    nome: "🏹 Arqueiro",
    img: "./images/arqueiro.png",
    descricao: "Ágil e preciso, você ataca à distância e raramente erra seu alvo."
  },
  {
    nome: "🗡️ Paladino",
    img: "https://images.unsplash.com/photo-1601758003122-53c40e686a19",
    descricao: "Silencioso e esperto, resolve problemas com habilidade e estratégia, sempre um passo à frente."
  },
  {
    nome: "🔨 Bárbaro",
    img: "https://images.unsplash.com/photo-1590608897129-79da98d15969",
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