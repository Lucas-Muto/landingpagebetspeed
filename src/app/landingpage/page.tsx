'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from "react";
import fundo from '@/components/imagens/fumaça.svg';
import betspeed from '@/components/imagens/logo.svg';
import gray from '@/components/imagens/cinza.svg';
import graylarge from '@/components/imagens/cinzalargo.svg';
import gray3 from '@/components/imagens/cinzatres.svg';
import gray4 from '@/components/imagens/cinzaquatro.svg';

export default function LandingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userValidated = localStorage.getItem('userValidated');
    if (userValidated !== 'true') {
      router.replace('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return null;

  return (
    <div className="relative w-full min-h-screen overflow-y-scroll overflow-x-hidden scrollbar-none">
      {/* Plano de fundo como uma imagem */}
      <div className="absolute top-0 left-0 w-full h-[1000px]">
        <Image
          src={fundo}
          alt="Plano de fundo"
          className="w-full h-full object-cover z-0"
        />
      </div>

      {/* Conteúdo da seção superior */}
      <div className="relative z-10 text-white flex flex-col xl:flex-row items-center xl:items-start mt-[60px] sm:mt-[10px] xl:mt-[300px] xl:ml-[300px] space-y-10 xl:space-y-0 xl:space-x-10">
        {/* Container para logo e texto */}
        <div className="flex flex-col space-y-4 text-center xl:text-left">
          <Image
            src={betspeed}
            alt="Logo betspeed"
            width={536}
            height={174}
            className="w-[350px] sm:w-[536px] mx-auto xl:mx-0"
          />
          <p className="text-lg ml-[20px] xl:ml-[25px] w-[90%] xl:w-[425px] text-[#52525B] pt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
          </p>
        </div>

        {/* Imagem ao lado direito com ajustes de posição */}
        <div className="flex justify-center xl:ml-10 xl:transform xl:translate-x-[300px] xl:-translate-y-[130px]">
          <Image
            src={gray}
            alt="Imagem cinza"
            width={475}
            height={607}
            className="rounded-[15px] w-[370px] sm:w-[536px]"
          />
        </div>
      </div>

      {/* Seção dos cards abaixo da seção superior */}
      <div className="relative z-20 w-full flex flex-wrap items-center justify-center mt-[50px] gap-y-[50px] gap-x-10 lg:w-[1280px] lg:mx-auto">
        {Array(6).fill('').map((_, index) => (
          <div key={index} className="bg-[#313333] w-[384px] h-[465px] rounded-[10px] flex flex-col items-center">
            <Image
              src={graylarge}
              alt="Imagem cinza"
              className="mt-[24px] mb-[25px] w-[336px] h-[240px]"
            />
            <h2 className="w-[336px] h-[32px] mt-[14px] text-[#FFFFFF] text-[24px] font-bold text-center">
              Lorem Ipsum
            </h2>
            <p className="w-[336px] h-[48px] text-[#D0D0D0] text-[16px] text-center mt-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        ))}
      </div>

      {/* Nova Seção - Terceira Parte */}
      <div className="relative flex flex-col xl:flex-row justify-center items-center sm:ml-[65px] pt-[100px] xl:mr-[70px] space-y-10 xl:space-y-0 xl:space-x-[200px]">
        <Image
          src={gray3}
          alt="Imagem cinza terceira parte"
          width={475}
          height={375}
          className="w-[390px] sm:w-[536px] rounded-[15px]"
        />
        <p className="text-lg leading-[26px] ml-[20px] xl:text-right xl:ml-[25px] w-[90%] xl:w-[425px] text-[#DEDEDE] pt-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

     
      {/* Nova Seção - Quarta Parte */}
      <div className="relative flex flex-col pl-6 mr-5 items-center space-y-[30px] sm:mt-[100px]">
        {/* Imagem com dimensões ajustadas */}
        <Image
          src={gray4}
          alt="Imagem cinza quarta parte"
          width={1168}
          height={348}
          className="mt-[50px] rounded-[15px]"
        />

        {/* Texto abaixo da imagem com gap de 55px */}
        <p className="max-w-[1168px] text-lg text-[16px] leading-[30px] text-center pt-[30px] max-[532px]:max-w-[510px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
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
    </div>
  );
}
