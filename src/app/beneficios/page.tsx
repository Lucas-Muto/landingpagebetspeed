"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import setaDireita from "@/components/imagens/seta-direita.svg";
import setaBaixo from "@/components/imagens/seta-baixo.svg";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ExclusiveBenefits } from "@/components/ExclusiveBenefits";

export default function LandingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Estado para controlar a pergunta ativa

  const experienceRef = useRef<HTMLDivElement | null>(null); // Referência para o novo container

  useEffect(() => {
    const userValidated = localStorage.getItem("userValidated");
    if (userValidated !== "true") {
      router.replace("/");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return null;

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "O que é o BetSpeed Prime?",
      answer:
        'O BetSpeed Prime é um clube de vantagens exclusivas para jogadores de alto nível da BetSpeed. Oferecemos prêmios, benefícios especiais e atendimento prioritário para nossos membros selecionados, apelidados de "RAIO".',
    },
    {
      question: "Quais são os principais benefícios de ser um membro?",
      answer:
        "Os membros do BetSpeed Prime têm acesso a avisos de Super odds e odds reâmpago, Rakeback em apostas, Prêmios personalizados e experiências VIP, Atendimento exclusivo via WhatsApp, Acesso a um grupo anônimo com comunicação especial.",
    },
    {
      question: "Como posso me tornar um membro do BetSpeed Prime?",
      answer:
        "A adesão ao BetSpeed Prime é feita por convite. Nossos jogadores de maior destaque recebem convites com base no volume de apostas e outros critérios de atividade.",
    },
    {
      question: "Onde posso tirar dúvidas ou falar com o suporte?",
      answer:
        "Os membros do BetSpeed Prime têm um canal direto no WhatsApp para atendimento personalizado. Você também pode entrar em contato através da nossa central de atendimento, acessível pelo botão na LP, os RAIOS têm prioridade na nossa fila de atendimento pelo chat do site!",
    },
    {
      question: "Como funciona o rakeback?",
      answer:
        "O rakeback oferece um percentual de retorno sobre o valor apostado, como forma de recompensa. Ele será depositado na sua conta da BetSpeed até o 5º dia útil do mês.",
    },
    {
      question: "Posso sair do clube se não quiser mais participar?",
      answer:
        "Sim, a participação no BetSpeed Prime é opcional. Caso deseje cancelar, entre em contato com nosso suporte pelo WhatsApp.",
    },
  ];

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Ativa o slide automático
    autoplaySpeed: 4000, // Define o intervalo de 2 segundos
    beforeChange: () => {
      const slickTrack = document.querySelector(".slick-track") as HTMLElement;
      if (slickTrack) {
        slickTrack.style.transform = "translateX(-50px)"; // Ajuste o valor conforme necessário
      }
    },
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen px-6 flex flex-col gap-[100px]">
      <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="lg:max-w-[400px] max-w-[370px] flex flex-col text-center lg:text-start lg:gap-4">
          <h1 className="text-white lg:text-4xl text-3xl font-bold mb-1 lg:mb-0">
            O <span className="text-primary">maior clube de vantagens</span> do
            mundo das apostas chegou para você
          </h1>
          <p className="text-white">
            Receba cash-back mensal, tenha um assistente à sua disposição e viva
            experiências exclusivas que só um jogador Raio merece ter.
          </p>
          <div className="flex gap-3 lg:gap-6 flex-col lg:flex-row items-center mt-14">
            <Button className="!bg-primary w-full lg:w-auto">
              Conheça as vantagens
            </Button>
            <ExclusiveBenefits />
          </div>
        </div>
        <img
          src="/card.png"
          alt="betspeed-card"
          className="w-[300px] lg:w-[500px] lg:h-[590px]"
        />
      </section>
      <section className="flex flex-col w-full justify-center items-center gap-4">
        <h3 className="text-white text-3xl font-bold text-center max-w-[370px] lg:max-w-full">
          Tudo que você precisa saber,{" "}
          <span className="text-primary">na palma da sua mão</span>
        </h3>
        <div className="bg-primary lg:w-[820px] rounded-xl flex lg:flex-row flex-col max-w-[370px] lg:max-w-full items-center text-center lg:text-startjustify-center px-7 lg:px-10 py-4">
          <p style={{ lineHeight: "1.2rem" }} className="mb-4 lg:mb-0">
            Informações em primeira mão de odds relâmpago, aviso de sorteios e
            torneios exclusivos e muito mais para você não perder nenhuma
            oportunidade. 
          </p>
          <Button
            bgColor={"#171717"}
            className="!text-white !w-full lg:!w-[500px] lg:ml-6"
            size={"lg"}
            leftIcon={
              <img src="/logos/telegram-white.png" className="w-7 mr-2" />
            }
          >
            Entre no telegram
          </Button>
        </div>
      </section>
      <section className="relative w-full min-h-screen overflow-y-scroll overflow-x-hidden scrollbar-none">
        {/* FAQ Section */}
        <div>
          <h2 className="text-[#E5C680]  text-center lg:text-4xl text-3xl font-bold uppercase tracking-wide">
            FAQ
          </h2>

          <div className="mt-[50px] space-y-[10px] px-6">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                {/* Pergunta */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center md:w-[768px] w-[100%] cursor-pointer"
                >
                  <p className="text-[#E5C680] md:text-[20px] text-[13px] font-semibold">
                    {faq.question}
                  </p>
                  <Image
                    src={activeIndex === index ? setaBaixo : setaDireita}
                    alt="Seta"
                    width={10}
                    height={7}
                    className={
                      activeIndex === index ? "text-white" : "text-[#E5C680]"
                    }
                  />
                </div>

                {/* Linha separadora */}
                <hr className="md:w-[768px] w-[100%] h-[1px] bg-[#E5C680] my-5" />

                {/* Resposta */}
                {activeIndex === index && (
                  <p className="text-[#FFFFFF] md:w-[768px] w-[100%] text-left md:text-[20px] text-[13px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
