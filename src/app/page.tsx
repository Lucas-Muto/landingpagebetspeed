"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { UserIcon } from "@heroicons/react/24/solid"; // Heroicons para o ícone de usuário
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const allowedUsers = [
    "adam martins dos santos",
    "admin",
    "adriano jose fernandes de faria",
    "aislan reis bastos",
    "alan antonio de amorim neto",
    "alan rodrigues silva",
    "alex da costa freitas maldonado",
    "alex oliveira macedo",
    "ana clara duarte dantas",
    "ana paula piunti novaes",
    "andre luiz faria de castro",
    "anna julia de faria",
    "antonio edson teixeira junior",
    "arthur fernando salles bernardo",
    "bruno jacomini",
    "brusle goncalves remidio",
    "catia milene crepaldi",
    "danrlei levandowski xavier",
    "dassaieve albuquerque taveira",
    "edilson martins do nascimento",
    "eduardo yuji kinjo da silva",
    "ezedo lucas da rocha moreira",
    "francisco de paula lima",
    "francisco josiel dos santos matos",
    "francisco lucas silva marques",
    "gabriel santos correa de moraes",
    "gabriel severo brittes",
    "gilmar francisco zwetsch",
    "gregory santos de oliveira",
    "guilherme augusto casonato",
    "guilherme dos santos wadenphul",
    "gustavo garcia cardoso",
    "gustavo pereira",
    "guterman oliveira dos santos",
    "henrique de souza barcelos",
    "hureverson marcelino domingues da silva",
    "jesse osvaldo antonio gomes fernandes",
    "joaffison dos santos silva",
    "joao eduardo ribeiro ramos",
    "jose antonio vaccaro junior",
    "jose ilton vieira de sousa",
    "josimar alberto silva gomes",
    "julio cesar frontine de brito",
    "julio cesar renouleau serrano",
    "kalahan de campos",
    "larissa gabriele de lima silveira",
    "leandro rocha nacano",
    "leonardo batista braga",
    "leonardo dias ribeiro",
    "leonardo henrique oliveira de souza",
    "louryval soares melo raposo",
    "lucas soares ribeiro",
    "luis henrique moronary de souza",
    "marco jose marques",
    "marcorelio nascimento dornelas",
    "marcos antonio da silva brito",
    "maria eduarda moura rezende",
    "mariana carolina tabile",
    "marina euzebio baptista santos",
    "matheus moreira santos",
    "matheus salomao cardoso ferreira",
    "mauricio mendes santos",
    "mayke tibes de paula lourenco",
    "miller tadeu do nascimento",
    "milton de souza frazao neto",
    "mingpei wu",
    "nielton zanetti dos santos",
    "paulo ricardo fidencio",
    "pedro henrique nunes da silva laurentino",
    "rafael antonio da costa cacemiro",
    "reginaldo de lima",
    "renan lucas pinto bertolino",
    "renata brito de sousa",
    "robson joacir ferrazza basso",
    "robson luis figueiredo",
    "rodrigo arruda gomes de sousa",
    "rodrigo mazzoni bergami",
    "saulo rodrigues xavier",
    "sergio ieler",
    "stepherson santos correa",
    "tatiana de souza franca",
    "thiago ramos correia",
    "thiago rosa cardoso",
    "tiago bispo de freitas",
    "tone ramos evangelista de souza",
    "waldir pereira alves junior",
    "wanderson mendes da silva",
    "wellington castro de assis",
    "willian cleber camilo",
  ];

  // Função para validar o nome de usuário
  const handleLogin = (e: any) => {
    e.preventDefault();
    // Converte o nome de usuário digitado para minúsculas e verifica se existe no array allowedUsers, também convertido para minúsculas
    if (
      allowedUsers.some((user) => user.toLowerCase() === username.toLowerCase())
    ) {
      localStorage.setItem("userValidated", "true");
      setTimeout(() => {
        router.push("/landingpage");
      }, 100);
    } else {
      alert("Usuário não autorizado. Tente outro nome.");
    }
  };

  return (
    <div className="flex h-full lg:h-[calc-(h-screen-125px)] font-poppins justify-center items-center">
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
      <div className="lg:hidden flex flex-col items-center text-white py-14 w-[330px]">
        <img src="/card.png" alt="betspeed-card" className="w-[100%]" />
        <div className="flex flex-col items-center justify-center mb-[20px]">
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
