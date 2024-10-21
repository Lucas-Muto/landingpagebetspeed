'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from "react";
import Slider from 'react-slick';
import fundo from '@/components/imagens/fumaça.svg';
import betspeed from '@/components/imagens/logo.svg';
import gray from '@/components/imagens/betspeed1.svg';
import acesso from '@/components/imagens/acesso.svg';
import beneficio from '@/components/imagens/beneficio.svg';
import box1 from '@/components/imagens/box1.svg'
import box2 from '@/components/imagens/box2.svg'
import box3 from '@/components/imagens/box3.svg'
import box4 from '@/components/imagens/box4.svg'
import box5 from '@/components/imagens/box5.svg'
import box6 from '@/components/imagens/box6.svg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import descricao from '@/components/imagens/descricao.svg'
import whisky from '@/components/imagens/whisky.svg'
import botao2 from '@/components/imagens/botao2.svg'
import contato from '@/components/imagens/contato.svg'
import telegram from '@/components/imagens/telegram.svg'
import botao3 from '@/components/imagens/botao3.svg'
import setaDireita from '@/components/imagens/seta-direita.svg';
import setaBaixo from '@/components/imagens/seta-baixo.svg';
import small from '@/components/imagens/small.svg';
import jornada from '@/components/imagens/jornada.svg';
import palma from '@/components/imagens/palma.svg';

export default function LandingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Estado para controlar a pergunta ativa

  const experienceRef = useRef<HTMLDivElement | null>(null); // Referência para o novo container

  useEffect(() => {
    const userValidated = localStorage.getItem('userValidated');
    if (userValidated !== 'true') {
      router.replace('/login');
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
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: 'O que é o BetSpeed Prime?',
      answer: 'O BetSpeed Prime é um clube de vantagens exclusivas para jogadores de alto nível da BetSpeed. Oferecemos prêmios, benefícios especiais e atendimento prioritário para nossos membros selecionados, apelidados de "RAIO".',
    },
    {
      question: 'Quais são os principais benefícios de ser um membro?',
      answer: 'Os membros do BetSpeed Prime têm acesso a avisos de Super odds e odds reâmpago, Rakeback em apostas, Prêmios personalizados e experiências VIP, Atendimento exclusivo via WhatsApp, Acesso a um grupo anônimo com comunicação especial.',
    },
    {
      question: 'Como posso me tornar um membro do BetSpeed Prime?',
      answer: 'A adesão ao BetSpeed Prime é feita por convite. Nossos jogadores de maior destaque recebem convites com base no volume de apostas e outros critérios de atividade.',
    },
    {
      question: 'Onde posso tirar dúvidas ou falar com o suporte?',
      answer: 'Os membros do BetSpeed Prime têm um canal direto no WhatsApp para atendimento personalizado. Você também pode entrar em contato através da nossa central de atendimento, acessível pelo botão na LP, os RAIOS têm prioridade na nossa fila de atendimento pelo chat do site!',
    },
    {
      question: 'Como funciona o rakeback?',
      answer: 'O rakeback oferece um percentual de retorno sobre o valor apostado, como forma de recompensa. Ele será depositado na sua conta da BetSpeed até o 5º dia útil do mês.',
    },
    {
      question: 'Posso sair do clube se não quiser mais participar?',
      answer: 'Sim, a participação no BetSpeed Prime é opcional. Caso deseje cancelar, entre em contato com nosso suporte pelo WhatsApp.',
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
      const slickTrack = document.querySelector('.slick-track') as HTMLElement;
      if (slickTrack) {
        slickTrack.style.transform = 'translateX(-50px)'; // Ajuste o valor conforme necessário
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

  // Lista de imagens para o carrossel
  const images = [box1, box2, box3, box4, box5, box6];

  return (
    <div className="relative w-full min-h-screen overflow-y-scroll overflow-x-hidden scrollbar-none">

      {/* Plano de fundo como uma imagem */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src={fundo}
          alt="Plano de fundo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ajusta a logo para centralizar em telas menores ou iguais a 430px */}
      <div className="absolute top-[15px] left-[250px] p-4 z-10 smaller:relative smaller:translate-x-[-10px] smaller:flex smaller:justify-center smaller:top-0 smaller:left-0 smaller:w-full">
        <Image
          src={betspeed}
          alt="Logo betspeed"
          width={237} // Largura ajustada
          height={77} // Altura ajustada
          className="w-[237px] h-[77px] smaller:w-auto"
        />
      </div>

      {/* Container para a imagem cinza */}
      <div className="relative z-10 justify-center xl:justify-start ml-[900px] mt-[150px] hidden sm:flex">
        <Image
          src={gray}
          alt="Imagem cinza"
          width={726}
          height={639}
          className="object-cover rounded-[15px]"
        />
      </div>

      {/* Container para a imagem cinza - versão para telas pequenas */}
      <div className="relative z-12 flex justify-center sm:hidden mt-[20px] mr-[50px]">
        <Image
          src={gray}
          alt="Imagem cinza"
          width={360}
          height={253}
          className="object-cover rounded-[15px]"
        />
      </div>

      {/* Container para o texto ao lado esquerdo da imagem cinza */}
      <div className="absolute top-[300px] left-[330px] w-[537px] h-[377px] flex flex-col z-20">
        <div className="smaller:hidden">
          <p className="text-white text-[48px] font-extrabold leading-[53px] text-left">
            O <span className="text-[#E5C680]">maior clube de vantagens</span> do mundo das apostas chegou para você
          </p>
          <p className="text-white text-[20px] leading-[26px] font-normal text-left mt-4">
            Receba cashback mensal, tenha um assistente à sua disposição e viva experiências exclusivas que só um jogador Raio merece ter.
          </p>
        </div>


        {/* Contêiner para o botão e a imagem lado a lado */}
        <div className="mt-6 flex flex-row items-center space-x-4 smaller:translate-x-[-385px] smaller:flex-col smaller:items-center smaller:space-x-0 smaller:space-y-4 smaller:mt-[455px] smaller:translate-x-[-380px] smaller:w-full smaller:block">
          <div
            className="cursor-pointer transition-transform transform hover:scale-105 smaller:mx-auto"
            onClick={scrollToExperience}
          >
            <Image
              src={acesso}
              alt="Botão de acesso"
              width={258}
              height={48}
              className="w-[258px] h-[48px] smaller:w-[300px] smaller:h-[50px] smaller:mx-auto"
            />
          </div>
          <Image
            src={beneficio}
            alt="Imagem de benefício"
            width={202}
            height={44}
            className="w-[202px] h-[44px] relative left-7 smaller:left-0 smaller:w-[400px] smaller:h-[50px] smaller:translate-x-[80px] smaller:mt-[20px] smaller:mx-auto"
          />
        </div>
      </div>

      {/* Imagem para telas menores ou iguais a 430px */}
      <div className="smaller:flex hidden justify-center items-start absolute top-[450px] smaller:pr-[35px] smaller:mt-[10px] left-0 w-full z-30">
        <Image
          src={small}
          alt="Imagem para telas menores"
          width={440} // Largura ajustada
          height={250} // Altura ajustada
          className="w-[380px] h-[250px]" // Atualiza os valores das classes
        />
      </div>

      {/* Novo container para o texto centralizado */}
      <div ref={experienceRef} className="absolute flex justify-center items-center w-full mt-[200px] font-bold z-20 smaller:mt-[490px]">
        <p className="text-white text-[35px] leading-[40px] text-center smaller:text-[25px]">
          A sua experiência BetSpeed <span className="text-[#E5C680]">potencializada</span>
        </p>
      </div>

      {/* Seção dos cards abaixo da seção superior */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center mt-[400px]">
        {/* Carrossel para larguras abaixo de 639px */}
        <div className="sm:hidden w-full mt-[50px] smaller:mt-[200px]">
          <Slider {...settings}>
            {images.map((imageSrc, index) => (
              <div key={index} className="flex justify-center">
                <div
                  className="w-[500px] h-[263px] rounded-[16px] bg-black/10 flex flex-col items-center"
                >
                  <Image
                    src={imageSrc}
                    alt={`Imagem do card ${index + 1}`}
                    className="w-[336px] h-[240px] mt-[12px] rounded-[5px]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>


        {/* Layout original com duas fileiras para larguras acima de 639px */}
        <div className="hidden sm:flex w-[1500px] flex-col items-center">
          {/* Primeira fileira de cards */}
          <div className="flex items-center w-full h-[263px]">
            {[box1, box2, box3].map((imageSrc, index) => (
              <React.Fragment key={index}>
                <div
                  className="w-[500px] h-[263px] rounded-[10px] flex flex-col items-center
                       sm:bg-transparent bg-[#000000] bg-opacity-[38%]"
                >
                  <Image
                    src={imageSrc}
                    alt={`Imagem do card ${index + 1}`}
                    className="w-[336px] h-[240px] mt-[12px] rounded-[5px]"
                  />
                </div>
                {/* Linha separadora vertical, adicionada entre os cards */}
                {index < 2 && (
                  <div className="w-[1px] h-[263px] bg-[#5b5b5c] mx-4" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Segunda fileira de cards */}
          <div className="flex items-center w-full h-[263px] mt-[50px]">
            {[box4, box5, box6].map((imageSrc, index) => (
              <React.Fragment key={index}>
                <div
                  className="w-[500px] h-[263px] rounded-[10px] flex flex-col items-center
                       sm:bg-transparent bg-[#000000] bg-opacity-[38%]"
                >
                  <Image
                    src={imageSrc}
                    alt={`Imagem do card ${index + 4}`}
                    className="w-[336px] h-[240px] mt-[14px] rounded-[5px]"
                  />
                </div>
                {/* Linha separadora vertical, adicionada entre os cards */}
                {index < 2 && (
                  <div className="w-[1px] h-[263px] bg-[#5b5b5c] mx-4" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Novo Container com duas imagens e um botão */}
      <div className="relative flex flex-col sm:flex-row justify-center items-center mt-[220px]">
        {/* Imagem "descricao" na esquerda - escondida em telas menores */}
        <div className="flex-shrink-0 relative right-[-400px] smaller:hidden">
          <Image
            src={descricao}
            alt="Imagem de descrição"
            width={437}
            height={182}
            className="w-[437px] h-[182px]"
          />
        </div>

        {/* Imagem "jornada" que será mostrada em telas menores */}
        <div className="hidden smaller:flex justify-center w-full smaller:translate-y-[-160px]">
          <Image
            src={jornada}
            alt="Imagem de jornada"
            width={329}
            height={182}
            className="w-[329px] h-[182px]"
          />
        </div>

        {/* Contêiner para a imagem "contato" e o "botao2" */}
        <div className="mt-[100px] flex flex-col items-start sm:translate-y-[120px] smaller:items-center sm:translate-x-[-35px] w-full smaller:mt-[180px] relative z-10">
          {/* Imagem "contato" centralizada */}
          <Image
            src={contato}
            alt="Imagem de contato"
            width={441}
            height={26}
            className="w-[441px] h-[26px] smaller:w-[365px] smaller:mx-auto"
          />

          {/* Imagem "botao2" centralizada */}
          <a
            href="https://wa.me/21991871253"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[5px] flex justify-center w-full smaller:mx-auto relative z-20"
          >
            <Image
              src={botao2}
              alt="Botão 2"
              width={441}
              height={60}
              className="w-[441px] h-[60px] cursor-pointer smaller:w-[370px] transition-transform transform hover:scale-105"
            />
          </a>
        </div>

        {/* Imagem "whisky" centralizada para telas menores */}
        <div className="flex-shrink-0 mt-8 sm:mt-0 relative left-[120px] sm:mr-[400px] smaller:mx-auto smaller:translate-x-[-110px] smaller:mt-[-360px]">
          <Image
            src={whisky}
            alt="Imagem de whisky"
            width={621}
            height={346}
            className="w-[621px] h-[346px] smaller:w-[300px] smaller:h-[200px] smaller:mx-auto"
          />
        </div>
      </div>


      {/* Novo Container com a imagem "telegram" e o botão "botao3" */}
      <div className="relative mt-[-40px] sm:mt-[140px]">
        {/* Botão "botao3" no canto superior direito, com efeito de hover */}
        <a
          href="https://t.me/+OjzvJqfzVR8yNjZh"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[195px] right-[600px] transform transition-transform hover:scale-105 sm:translate-x-[125px] smaller:static smaller:mx-auto smaller:block smaller:translate-y-[490px] smaller:translate-x-[85px]"
        >
          <Image
            src={botao3}
            alt="Botão 3"
            width={261}
            height={48}
            className="w-[261px] h-[48px] sm:translate-x-[-125px] translate-y-[5px] top-2"
          />
        </a>

        {/* Imagem "telegram" centralizada - escondida em telas menores */}
        <div className="smaller:hidden">
          <Image
            src={telegram}
            alt="Imagem do Telegram"
            width={800}
            height={400}
            className="w-[800px] h-[400px] mx-auto"
          />
        </div>

        {/* Imagem "palma" que será mostrada em telas menores */}
        <div className="hidden smaller:flex justify-center mt-[250px]">
          <Image
            src={palma}
            alt="Imagem de palma"
            width={329}
            height={267}
            className="w-[329px] h-[267px]"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative w-full min-h-screen overflow-y-scroll overflow-x-hidden scrollbar-none">
        {/* FAQ Section */}
        <div className="mt-[100px] text-center">
          <h2 className="text-[#E5C680] text-[44px] smaller:text-[34px] font-bold uppercase tracking-wide">FAQ</h2>

          <div className="mt-[50px] space-y-[10px]">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                {/* Pergunta */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-[768px] smaller:w-[390px] cursor-pointer"
                >
                  <p className="text-[#E5C680] text-[20px] smaller:text-[13px] font-semibold">{faq.question}</p>
                  <Image
                    src={activeIndex === index ? setaBaixo : setaDireita}
                    alt="Seta"
                    width={10}
                    height={7}
                    className={activeIndex === index ? 'text-white' : 'text-[#E5C680]'}
                  />
                </div>

                {/* Linha separadora */}
                <hr className="w-[768px] smaller:w-[390px] h-[1px] bg-[#E5C680] my-5" />

                {/* Resposta */}
                {activeIndex === index && (
                  <p className="text-[#FFFFFF] w-[768px] smaller:w-[390px] text-left ">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Rodapé */}
      <div className="relative flex flex-col items-center mt-[150px]">
        {/* Linha branca */}
        <hr className="w-[90%] border-t border-white" />

        {/* Texto do rodapé com espaçamento extra abaixo */}
        <p className="text-[#64748B] text-[14px] leading-[24px] text-center mt-7 mb-[40px]">
          <span className="block max-[600px]:inline">Copyright © 2024 Betspeed.</span>
          <span className="block max-[600px]:inline"> Todos os direitos reservados.</span>
        </p>
      </div>
    </div >
  );
}
