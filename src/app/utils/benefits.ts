export interface Benefit {
  title: string;
  description: string;
  url: string;
}

export const benefits: Benefit[] = [
  {
    title: "Welcome Kit",
    description:
      "Uma box exclusiva com uma Gold Label, R$500 para a sua banca e um cartão black personalizado.",
    url: "/logos/gift.png",
  },
  {
    title: "Account Manager",
    description:
      "Acompanhamento de um profissional com atendimento personalizado para você. Tire suas dúvidas e entre em contato quando quiser. Além disso, você tem prioridade no atendimento padrão.",
    url: "/logos/user.png",
  },
  {
    title: "Cashback",
    description:
      "Deu red? Sem estresse! Todo dia 05, você recebe uma porcentagem sobre as suas movimentações na casa com o Cash Back.",
    url: "/logos/money.png",
  },
  {
    title: "Prêmios mensais",
    description:
      "Você também concorre a iPhones, viagens e experiências únicas, sorteadas mensalmente.",
    url: "/logos/trophy.png",
  },
  {
    title: "Torneios exclusivos Raio",
    description:
      "Concorra às premiações em banca jogando seus jogos preferidos. Você compete apenas entre os Raios, beleza?",
    url: "/logos/bolt.png",
  },
  {
    title: "Telegram BetSpeed Prime",
    description: "Receba as melhores oportunidades em primeira mão.",
    url: "/logos/telegram.png",
  },
];
