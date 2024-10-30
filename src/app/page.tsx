"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { UserIcon } from "@heroicons/react/24/solid"; // Heroicons para o ícone de usuário
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { allowedUsers } from "./utils/allowedUsers";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  // Função para validar o nome de usuário
  const handleLogin = (e: any) => {
    e.preventDefault();
    // Converte o nome de usuário digitado para minúsculas e verifica se existe no array allowedUsers, também convertido para minúsculas
    if (
      allowedUsers.some((user) => user.toLowerCase() === username.toLowerCase())
    ) {
      localStorage.setItem("userValidated", "true");
      setTimeout(() => {
        router.push("/beneficios");
      }, 100);
    } else {
      alert("Usuário não autorizado. Tente outro nome.");
    }
  };

  return (
    <div className="flex h-full lg:h-screen-minus-200 font-poppins justify-center items-center">
      <div className="hidden lg:flex items-center justify-center">
        <div className="flex flex-col text-white w-[500px] h-[250px] justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2">
              Parabéns, agora você é um{" "}
              <span className="text-primary">Jogador Raio!</span>
            </h1>
            <p>Acesse para conhecer as vantagens BetSpeed Prime.</p>
          </div>
          <form
            className="flex items-center rounded-[10px] bg-white px-3 w-[460px] h-[64px]"
            onSubmit={(e) => handleLogin(e)}
          >
            <InputGroup size="lg">
              <Input
                pr="13rem"
                height={"48px"}
                type={"text"}
                placeholder="Usuário"
                border={"none"}
                focusBorderColor={"white"}
                textColor={"black"}
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputRightElement width="12rem">
                <Button
                  className="!bg-primary w-full"
                  size="lg"
                  onClick={(e) => handleLogin(e)}
                >
                  Acessar
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </div>
        <img
          src="/card.png"
          alt="betspeed-card"
          className="w-[500px] h-[590px]"
        />
      </div>
      <div className="lg:hidden flex flex-col items-center text-white py-20 w-[330px]">
        <img src="/card.png" alt="betspeed-card" className="w-[100%]" />
        <div className="flex flex-col items-center justify-center mb-[50px]">
          <h1 className="text-2xl font-bold text-center">
            Parabéns, agora você é um{" "}
            <span className="text-primary text-5xl">Jogador Raio!</span>
          </h1>
          <p className="w-[300px] text-center">
            Acesse para conhecer as vantagens BetSpeed Prime.
          </p>
        </div>
        <Input
          height={"48px"}
          width={"100%"}
          type={"text"}
          placeholder="Usuário"
          border={"none"}
          focusBorderColor={"white"}
          bgColor={"white"}
          textColor={"black"}
          mb={"20px"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          className="!bg-primary w-full"
          size="lg"
          onClick={(e) => handleLogin(e)}
        >
          Acessar
        </Button>
      </div>
    </div>
  );
}
