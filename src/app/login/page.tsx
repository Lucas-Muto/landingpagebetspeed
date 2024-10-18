'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from "react";
import { UserIcon } from '@heroicons/react/24/solid'; // Heroicons para o ícone de usuário
import betspeed from '@/components/imagens/logo.svg';
import cartao from '@/components/imagens/betspeed1.svg';
import parabens from '@/components/imagens/parabens.svg';
import fundo from '@/components/imagens/fumaça.svg';


export default function Login() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const allowedUsers = ['Lucas', 'Maria', 'Joao'];

  // Função para validar o nome de usuário
  const handleLogin = () => {
    if (allowedUsers.includes(username)) {
      localStorage.setItem('userValidated', 'true');
      setTimeout(() => {
        router.push('/landingpage');
      }, 100);
    } else {
      alert('Usuário não autorizado. Tente outro nome.');
    }
  };

  // Função para detectar a tecla "ENTER" e chamar handleLogin
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black font-poppins">

      {/* Plano de fundo como uma imagem */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src={fundo}
          alt="Plano de fundo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Container para a imagem cinza */}
      <div className="relative z-10 flex justify-center xl:justify-start ml-[700px] mb-[90px]  hidden sm:flex">
            <Image
              src={cartao}
              alt="Imagem cinza"
              width={691}
              height={639}
              className="object-cover rounded-[15px]"
            />
          </div>

      {/* Posiciona a logo no canto superior esquerdo */}
      <div className="absolute top-[15px] left-[250px] p-4 z-10">
        <Image
          src={betspeed}
          alt="Logo betspeed"
          width={237} // Largura ajustada
          height={77} // Altura ajustada
          className="w-[237px] h-[77px]"
        />
      </div>

      <div className="absolute text-center z-20">
        {/* Imagem "parabens" substituindo os textos */}
        <Image
          src={parabens}
          alt="Parabéns"
          width={537} // Ajuste a largura conforme necessário
          height={163} // Ajuste a altura conforme necessário
          className="mx-auto mb-6 mr-[655px]"
        />

        {/* Container para centralizar o input e o botão */}
        <div className="flex flex-col items-center mr-[690px] mt-[50px]">
          {/* Campo de Input */}
          <div className="flex items-center border border-gray-300 rounded-[10px] bg-white px-3 py-2 mb-4 w-[458px] h-[64px]">
            {/* Ícone de usuário */}
            <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
            {/* Input com estilo Tailwind e evento onKeyDown */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nome"
              className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400 border-none"
              onKeyDown={handleKeyPress} // Adicionado evento para detectar "ENTER"
            />
          </div>

          

          {/* Botão de Validar */}
          <button
            onClick={handleLogin}
            className="flex items-center justify-center bg-[#E5C680] text-[#0C0E0D] font-semibold py-2 px-4 rounded-[10px] hover:scale-105 transition-transform w-[158px] h-[60px] mt-2"
          >
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
}