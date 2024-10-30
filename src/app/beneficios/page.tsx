"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Link } from "@chakra-ui/react";
import { ExclusiveBenefits } from "@/components/ExclusiveBenefits";
import { BenefitsCard } from "@/components/BenefitsCard";
import { BenefitsCardMobile } from "@/components/BenefitsCardMobile";
import { Benefit, benefits } from "../utils/benefits";
import { faqs } from "../utils/faqs";

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

  // Configurações do carrossel
  const settings = {
    className: "slider",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-32 lg:gap-44">
      {/* Main Section */}
      <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-center px-6 mt-24 lg:mt-36">
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
            <Button
              className="!bg-primary w-full lg:w-auto"
              _hover={{ transform: "scale(1.05)" }}
              onClick={scrollToExperience}
            >
              Conheça as vantagens
            </Button>
            <ExclusiveBenefits />
          </div>
        </div>
        <img
          src="/card.png"
          alt="betspeed-card"
          className="w-[300px] lg:w-[450px] mb-14 lg:mb-0"
        />
      </section>
      {/* Experience Section */}
      <section className="flex flex-col justify-center items-center">
        <h1
          className="text-3xl font-bold mb-8 lg:mb-48 text-white text-center px-6"
          ref={experienceRef}
        >
          A sua experiência BetSpeed{" "}
          <span className="text-primary">potencializada</span>
        </h1>
        {/* Desktop */}
        <div className="w-[1050px] lg:flex flex-wrap hidden">
          {benefits.map((item: Benefit, index: number) => {
            return <BenefitsCard benefit={item} index={index} key={index} />;
          })}
        </div>
        {/* Mobile */}
        <div className="lg:hidden flex w-screen max-w-full overflow-hidden">
          <Slider {...settings}>
            {benefits.map((item: Benefit, index: number) => {
              return (
                <BenefitsCardMobile benefit={item} index={index} key={index} />
              );
            })}
          </Slider>
        </div>
      </section>
      {/* Whisky Section */}
      <section className="w-full flex justify-center px-6">
        <div className="grid grid-col-1 lg:grid-rows-4 lg:grid-flow-col max-w-[370px] lg:max-w-[900px] gap-14">
          <div className="row-start-1 lg:row-span-2 lg:col-span-1 w-full lg:w-[350px] text-center lg:text-start">
            <h1 className="text-3xl text-primary font-bold mb-3">
              A melhor forma de começar sua jornada
            </h1>
            <p className="text-white">
              Um presente de boas-vindas para você. A box é totalmente
              personalizada e vai te dar o gostinho de ser um jogador Raio.
            </p>
          </div>
          <div className="row-start-3 lg:row-span-2 lg:col-span-1 w-full lg:w-[350px] text-white">
            <p className="text-center lg:text-start mb-4 lg:mb-2 px-20 lg:px-0">
              Entre em contato conosco e resgate já o seu kit
            </p>
            <Link
              href="https://wa.me/5521991871253"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="!bg-primary w-full lg:w-[350px]"
                _hover={{ transform: "scale(1.05)" }}
              >
                Resgatar agora
              </Button>
            </Link>
          </div>
          <img
            src="/whisky.png"
            alt="whisky"
            className="w-[550px] row-start-2 lg:row-span-4 lg:col-span-3"
          />
        </div>
      </section>
      {/* Telegram Section */}
      <section className="flex flex-col w-full justify-center items-center gap-4 px-6">
        <h3 className="text-white text-3xl font-bold text-center max-w-[370px] lg:max-w-full">
          Tudo que você precisa saber,{" "}
          <span className="text-primary">na palma da sua mão</span>
        </h3>
        <div className="bg-primary lg:w-[820px] rounded-xl flex lg:flex-row flex-col max-w-[370px] lg:max-w-full items-center text-center lg:text-start justify-center px-7 lg:px-10 py-4">
          <p style={{ lineHeight: "1.2rem" }} className="mb-4 lg:mb-0">
            Informações em primeira mão de odds relâmpago, aviso de sorteios e
            torneios exclusivos e muito mais para você não perder nenhuma
            oportunidade. 
          </p>
          <Link
            className="!w-full lg:!w-[500px] lg:ml-6"
            href="https://t.me/+OjzvJqfzVR8yNjZh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              bgColor={"#171717"}
              className="!text-white w-full"
              size={"lg"}
              leftIcon={
                <img src="/logos/telegram-white.png" className="w-7 mr-2" />
              }
              _hover={{ transform: "scale(1.05)" }}
            >
              Entre no telegram
            </Button>
          </Link>
        </div>
      </section>
      <section className="w-full mb-32 lg:mb-44 px-6">
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
                  className="flex justify-between items-center md:w-[700px] w-[100%] cursor-pointer"
                >
                  <p className="text-[#E5C680] text-sm lg:text-md font-semibold">
                    {faq.question}
                  </p>
                  <Image
                    src={
                      activeIndex === index
                        ? "/svg/seta-baixo.svg"
                        : "/svg/seta-direita.svg"
                    }
                    alt="Seta"
                    width={10}
                    height={7}
                    className={
                      activeIndex === index ? "text-white" : "text-[#E5C680]"
                    }
                  />
                </div>

                {/* Linha separadora */}
                <hr className="md:w-[700px] w-[100%] h-[1px] bg-[#E5C680] my-5" />

                {/* Resposta */}
                {activeIndex === index && (
                  <p className="text-[#FFFFFF] md:w-[700px] w-[100%] text-left text-sm lg:text-md">
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
