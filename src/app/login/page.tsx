'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserIcon } from '@heroicons/react/24/solid'; // Heroicons para o ícone de usuário

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
      <div className="text-center">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-white mb-4">Verificação</h1>
        {/* Subtítulo */}
        <p className="text-lg text-gray-400 mb-6">Insira um nome de usuário válido</p>

        {/* Container para centralizar o input e o botão */}
        <div className="flex flex-col items-center">
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
            className="flex items-center justify-center bg-[#E5C680] text-white font-semibold py-2 px-4 rounded-[10px] hover:scale-105 transition-transform w-[158px] h-[60px] mt-2"
          >
            Validar
          </button>
        </div>
      </div>
    </div>
  );
}
