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
import raio2 from '@/components/imagens/raio2.svg';
import novo from '@/components/imagens/novo.svg';


export default function Login() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const allowedUsers = [
    'adam martins dos santos',
    'admin',
    'adriano jose fernandes de faria',
    'aislan reis bastos',
    'alan antonio de amorim neto',
    'alan rodrigues silva',
    'alex da costa freitas maldonado',
    'alex oliveira macedo',
    'ana clara duarte dantas',
    'ana paula piunti novaes',
    'andre luiz faria de castro',
    'anna julia de faria',
    'antonio edson teixeira junior',
    'arthur fernando salles bernardo',
    'bruno jacomini',
    'brusle goncalves remidio',
    'catia milene crepaldi',
    'danrlei levandowski xavier',
    'dassaieve albuquerque taveira',
    'edilson martins do nascimento',
    'eduardo yuji kinjo da silva',
    'ezedo lucas da rocha moreira',
    'francisco de paula lima',
    'francisco josiel dos santos matos',
    'francisco lucas silva marques',
    'gabriel santos correa de moraes',
    'gabriel severo brittes',
    'gilmar francisco zwetsch',
    'gregory santos de oliveira',
    'guilherme augusto casonato',
    'guilherme dos santos wadenphul',
    'gustavo garcia cardoso',
    'gustavo pereira',
    'guterman oliveira dos santos',
    'henrique de souza barcelos',
    'hureverson marcelino domingues da silva',
    'jesse osvaldo antonio gomes fernandes',
    'joaffison dos santos silva',
    'joao eduardo ribeiro ramos',
    'jose antonio vaccaro junior',
    'jose ilton vieira de sousa',
    'josimar alberto silva gomes',
    'julio cesar frontine de brito',
    'julio cesar renouleau serrano',
    'kalahan de campos',
    'larissa gabriele de lima silveira',
    'leandro rocha nacano',
    'leonardo batista braga',
    'leonardo dias ribeiro',
    'leonardo henrique oliveira de souza',
    'louryval soares melo raposo',
    'lucas soares ribeiro',
    'luis henrique moronary de souza',
    'marco jose marques',
    'marcorelio nascimento dornelas',
    'marcos antonio da silva brito',
    'maria eduarda moura rezende',
    'mariana carolina tabile',
    'marina euzebio baptista santos',
    'matheus moreira santos',
    'matheus salomao cardoso ferreira',
    'mauricio mendes santos',
    'mayke tibes de paula lourenco',
    'miller tadeu do nascimento',
    'milton de souza frazao neto',
    'mingpei wu',
    'nielton zanetti dos santos',
    'paulo ricardo fidencio',
    'pedro henrique nunes da silva laurentino',
    'rafael antonio da costa cacemiro',
    'reginaldo de lima',
    'renan lucas pinto bertolino',
    'renata brito de sousa',
    'robson joacir ferrazza basso',
    'robson luis figueiredo',
    'rodrigo arruda gomes de sousa',
    'rodrigo mazzoni bergami',
    'saulo rodrigues xavier',
    'sergio ieler',
    'stepherson santos correa',
    'tatiana de souza franca',
    'thiago ramos correia',
    'thiago rosa cardoso',
    'tiago bispo de freitas',
    'tone ramos evangelista de souza',
    'waldir pereira alves junior',
    'wanderson mendes da silva',
    'wellington castro de assis',
    'willian cleber camilo'
  ];

  // Função para validar o nome de usuário
  const handleLogin = () => {
    // Converte o nome de usuário digitado para minúsculas e verifica se existe no array allowedUsers, também convertido para minúsculas
    if (allowedUsers.some(user => user.toLowerCase() === username.toLowerCase())) {
      localStorage.setItem('userValidated', 'true');
      setTimeout(() => {
        router.push('/landingpage');
      }, 100);
    } else {
      alert('Usuário não autorizado. Tente outro nome.');
    }
  };
  // Função para detectar a tecla "ENTER" e chamar handleLogin
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="flex h-screen min-h-screen overflow-y-scroll overflow-x-hidden items-center justify-center bg-black font-poppins overflow">

      {/* Plano de fundo como uma imagem */}
      <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full z-0">
        <Image
          src={fundo}
          alt="Plano de fundo"
          className="fixed object-cover w-screen h-screen"
        />


        {/* Container para a imagem cinza */}
        <div className="relative z-10 justify-center note:translate-x-[-50px] note:translate-y-[50px] xl:justify-start ml-[700px] mb-[90px] sm:flex">
          <Image
            src={cartao}
            alt="Imagem cinza"
            width={691}
            height={639}
            className="object-cover rounded-[15px] max-w-full"
          />
        </div>

        {/* Posiciona a logo no canto superior esquerdo */}
        <div className="absolute top-[15px] left-[450px] p-4 z-10 
             note:left-[80px] 
             smaller:left-0 smaller:relative smaller:flex smaller:justify-center smaller:mt-[-800px]">
          <Image
            src={betspeed}
            alt="Logo betspeed"
            width={237} // Largura ajustada
            height={77} // Altura ajustada
            className="w-[237px] h-[77px] max-w-full"
          />
        </div>

        <div className="smaller:flex top-0 mr-4 absolute hidden justify-center text-center z-20">
          {/* Imagem "parabens" substituindo os textos */}
          <Image
            src={novo}
            alt="Parabéns"
            width={389} // Ajuste a largura conforme necessário
            height={253} // Ajuste a altura conforme necessário
            className="mx-auto max-w-full"
          />
        </div>

        <div className="smaller:flex hidden mr-[-5px] mt-[70px] absolute text-center z-20">
          {/* Imagem "parabens" substituindo os textos */}
          <Image
            src={raio2}
            alt="Parabéns"
            width={329} // Ajuste a largura conforme necessário
            height={132} // Ajuste a altura conforme necessário
            className="mx-auto mb-6 max-w-full"
          />
        </div>


        <div className="absolute text-center note:translate-y-[120px] mb-[150px] ml- z-20">
          {/* Imagem "parabens" substituindo os textos */}
          <Image
            src={parabens}
            alt="Parabéns"
            width={537} // Ajuste a largura conforme necessário
            height={163} // Ajuste a altura conforme necessário
            className="mx-auto mb-6  smaller:hidden mr-[655px] max-w-full"
          />



          {/* Container para centralizar o input e o botão */}
          <div className="flex flex-col items-center mr-[690px] mt-[50px] smaller:translate-x-[345px] smaller:mt-[550px] max-w-full">
            {/* Campo de Input */}
            <div className="flex items-center border border-gray-300 rounded-[10px] bg-white px-3 py-2 mb-4 w-[458px] smaller:w-[340px] h-[64px]">
              {/* Ícone de usuário */}
              <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
              {/* Input com estilo Tailwind e evento onKeyDown */}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nome Completo"
                className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400 border-none"
                onKeyDown={handleKeyPress} // Adicionado evento para detectar "ENTER"
              />
            </div>



            {/* Botão de Validar */}
            <button
              onClick={handleLogin}
              className="flex items-center justify-center bg-[#E5C680] text-[#0C0E0D] font-semibold py-2 px-4 rounded-[10px] hover:scale-105 transition-transform w-[158px] h-[60px] mt-2 max-w-full"
            >
              Acessar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
